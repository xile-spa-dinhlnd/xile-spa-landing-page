import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

interface LotusSceneProps {
  /** Path to the GLB model file, relative to public/ */
  modelPath?: string;
  className?: string;
}

/**
 * Premium 3D Lotus Scene — Loads a GLTF/GLB model with:
 * - Studio-quality warm spa lighting
 * - Bloom post-processing for dreamy glow
 * - Smooth auto-rotation (turntable)
 * - Mouse-reactive tilt for interactivity
 * - Golden particle field floating around the scene
 */
export default function LotusScene({
  modelPath = '/models/lotus.glb',
  className = '',
}: LotusSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const setupScene = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // ─── 1. Scene ───
    const scene = new THREE.Scene();

    // ─── 2. Camera ───
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 2.4, 6.2);
    camera.lookAt(0, 0.2, 0);

    // ─── 3. Renderer ───
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // ─── 3b. Warm Studio Spa Background Texture ───
    const bgCanvas = document.createElement('canvas');
    bgCanvas.width = 512;
    bgCanvas.height = 640;
    const bgCtx = bgCanvas.getContext('2d');
    let bgTexture: THREE.CanvasTexture | null = null;
    if (bgCtx) {
      // Warm glowing spa backdrop with candle halo behind the lotus
      const grad = bgCtx.createRadialGradient(256, 230, 25, 256, 280, 360);
      grad.addColorStop(0, '#B38B68');   // Luminous warm golden-champagne halo directly behind flower
      grad.addColorStop(0.25, '#8D664A'); // Warm amber-terracotta tone
      grad.addColorStop(0.55, '#63442F'); // Rich warm spa wood tone
      grad.addColorStop(0.82, '#422B1D'); // Deep espresso
      grad.addColorStop(1, '#2C1A10');    // Warm outer border tone
      bgCtx.fillStyle = grad;
      bgCtx.fillRect(0, 0, 512, 640);

      // Subtle candlelight warmth orb on upper right
      const candleGlow = bgCtx.createRadialGradient(380, 130, 5, 380, 130, 140);
      candleGlow.addColorStop(0, 'rgba(255, 225, 175, 0.22)');
      candleGlow.addColorStop(1, 'rgba(255, 225, 175, 0)');
      bgCtx.fillStyle = candleGlow;
      bgCtx.fillRect(0, 0, 512, 640);

      bgTexture = new THREE.CanvasTexture(bgCanvas);
      bgTexture.colorSpace = THREE.SRGBColorSpace;
      scene.background = bgTexture;
    }

    // ─── 4. Spa Studio Lighting System ───

    // Warm ambient fill (soft bounced light simulating warm spa walls)
    const ambientLight = new THREE.AmbientLight(0xffede0, 1.9);
    scene.add(ambientLight);

    // Main key light (warm sunlight from upper-front-right)
    const keyLight = new THREE.DirectionalLight(0xfff6ee, 2.9);
    keyLight.position.set(3, 6, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.bias = -0.0003;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 20;
    keyLight.shadow.camera.left = -5;
    keyLight.shadow.camera.right = 5;
    keyLight.shadow.camera.top = 5;
    keyLight.shadow.camera.bottom = -5;
    scene.add(keyLight);

    // Warm gold fill from left (soft candlelight warmth)
    const fillLight = new THREE.DirectionalLight(0xf7d9b2, 1.9);
    fillLight.position.set(-4, 3, 2);
    scene.add(fillLight);

    // Soft rim light from behind (defines petal silhouettes against warm backdrop)
    const rimLight = new THREE.DirectionalLight(0xffecd2, 1.5);
    rimLight.position.set(0, 2, -4);
    scene.add(rimLight);

    // Overhead spotlight for lotus core glow (softened to prevent overexposure)
    const spotLight = new THREE.SpotLight(0xffeed6, 2.2, 12, Math.PI / 5, 0.6, 1.5);
    spotLight.position.set(0, 5, 1);
    spotLight.target.position.set(0, 0.2, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);
    scene.add(spotLight.target);

    // Interactive mouse-following light
    const mouseLight = new THREE.PointLight(0xffe0be, 1.4, 10);
    mouseLight.position.set(0, 3, 4);
    scene.add(mouseLight);

    // ─── 5. Environment Map for Reflections ───
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    // Create warm gradient environment
    const envScene = new THREE.Scene();
    const envGeo = new THREE.SphereGeometry(10, 32, 32);
    const envMat = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      color: 0x553822,
    });
    envScene.add(new THREE.Mesh(envGeo, envMat));
    // Warm light sources in env
    const envLight1 = new THREE.PointLight(0xfff0d4, 4, 20);
    envLight1.position.set(3, 5, 3);
    envScene.add(envLight1);
    const envLight2 = new THREE.PointLight(0xf5d3aa, 3, 20);
    envLight2.position.set(-4, 3, -2);
    envScene.add(envLight2);

    const envMap = pmremGenerator.fromScene(envScene, 0.04).texture;
    scene.environment = envMap;

    // Cleanup env resources
    envGeo.dispose();
    envMat.dispose();
    pmremGenerator.dispose();

    // ─── 6. Post-processing (Bloom for Dreamy Glow) ───
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.28,   // Subtle, refined dreamy glow
      0.5,    // Radius
      0.75    // Threshold (avoids blowing out inner petal texture)
    );
    composer.addPass(bloomPass);

    // ─── 7. Root Group for Model (auto-rotation applied here) ───
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // ─── 8. Load the GLTF/GLB Model ───
    const loader = new GLTFLoader();

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        // Auto-center and scale the model with elegant margins (targetSize 2.2 instead of 3.5)
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetSize = 2.2; // Perfectly proportioned, no clipping
        const scale = targetSize / maxDim;

        model.scale.setScalar(scale);
        // Center horizontally and depth-wise, shift slightly upwards (+0.25) so bottom info card doesn't cover petals
        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale + 0.25;
        model.position.z = -center.z * scale;

        // Enhance materials for premium look
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            // Upgrade materials for better visual quality
            if (child.material instanceof THREE.MeshStandardMaterial) {
              child.material.envMapIntensity = 0.9;
              child.material.needsUpdate = true;
            }
          }
        });

        rootGroup.add(model);
        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error('Failed to load 3D lotus model:', error);
        setLoadError(true);
        setIsLoading(false);
      }
    );

    // ─── 9. Floating Golden Particles ───
    const particleCount = 40;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 1] = Math.random() * 5 - 1;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      particleSpeeds[i] = 0.2 + Math.random() * 0.5;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xCFA13D,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ─── 10. Mouse Interaction ───
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      targetTiltY = normX * 8; // ±8 degrees horizontal
      targetTiltX = normY * 5; // ±5 degrees vertical

      // Move the interactive light
      mouseLight.position.x = normX * 4;
      mouseLight.position.y = normY * 2 + 3;
    };

    const onPointerLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
    };

    container.addEventListener('mousemove', onPointerMove, { passive: true });
    container.addEventListener('mouseleave', onPointerLeave);

    // ─── 11. Resize Handler ───
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
      bloomPass.resolution.set(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // ─── 12. Animation Loop ───
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Auto-rotation (smooth turntable)
      rootGroup.rotation.y += 0.003; // Very gentle continuous rotation

      // Mouse tilt interpolation (smooth follow)
      currentTiltX += (targetTiltX - currentTiltX) * 0.04;
      currentTiltY += (targetTiltY - currentTiltY) * 0.04;

      // Apply combined rotation
      rootGroup.rotation.x = THREE.MathUtils.degToRad(currentTiltX);
      // Y rotation = auto-rotation + mouse tilt
      rootGroup.rotation.y += THREE.MathUtils.degToRad(currentTiltY) * 0.01;

      // Gentle floating bob
      rootGroup.position.y = Math.sin(elapsed * 0.8) * 0.08;

      // Animate particles (slow upward drift)
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i] * 0.005;
        // Gentle horizontal sway
        positions[i * 3] += Math.sin(elapsed + i) * 0.001;

        // Reset particles that drift too high
        if (positions[i * 3 + 1] > 5) {
          positions[i * 3 + 1] = -1;
          positions[i * 3] = (Math.random() - 0.5) * 8;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Pulsing particle opacity
      particleMat.opacity = 0.4 + Math.sin(elapsed * 1.5) * 0.2;

      // Render with bloom post-processing
      composer.render();
    };

    animate();

    // ─── 13. Cleanup ───
    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('mouseleave', onPointerLeave);
      renderer.dispose();
      composer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      envMap.dispose();
      bgTexture?.dispose();
    };
  }, [modelPath]);

  useEffect(() => {
    const cleanup = setupScene();
    return () => {
      if (cleanup) cleanup();
    };
  }, [setupScene]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none overflow-hidden ${className}`}
      style={{ aspectRatio: '4/5' }}
    >
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Subtle Warm Ambiance Vignette (gentle, does not darken center) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 38%, transparent 55%, rgba(45, 28, 18, 0.15) 80%, rgba(30, 18, 11, 0.35) 100%)',
        }}
      />

      {/* Loading State */}
      {isLoading && !loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#2C1D14]/85 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-spa-bronze/30 border-t-spa-bronze animate-spin" />
            <span className="text-spa-cream/80 text-xs font-sans tracking-wide">
              Đang tải mô hình 3D...
            </span>
          </div>
        </div>
      )}

      {/* Error State */}
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1C1510]/90 z-10">
          <div className="text-center px-6">
            <p className="text-spa-cream/80 text-sm font-sans mb-2">
              Không thể tải mô hình 3D
            </p>
            <p className="text-spa-cream/50 text-xs font-sans">
              Vui lòng đặt file <code className="text-spa-bronze">lotus.glb</code> vào thư mục <code className="text-spa-bronze">public/models/</code>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
