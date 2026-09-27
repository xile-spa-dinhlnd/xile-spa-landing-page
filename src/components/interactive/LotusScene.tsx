import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

interface LotusSceneProps {
  /** Path to the GLB model file, relative to public/ */
  modelPath?: string;
  className?: string;
}

/**
 * Premium Seamless 3D Lotus Sanctuary Scene:
 * - Floating gracefully on website's warm cream backdrop (no boxy card)
 * - Stem digitally removed at geometry level (pure blooming lotus petals & stamen)
 * - Full 360° Drag-to-Rotate interaction with silky inertia damping
 * - Gentle ambient turntable rotation & floating breathing bob
 * - Golden zen particle field drifting peacefully
 * - Studio spa daylighting optimized for light backgrounds
 */
export default function LotusScene({
  modelPath = '/models/lotus.glb',
  className = '',
}: LotusSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const setupScene = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // ─── 1. Scene ───
    const scene = new THREE.Scene();

    // ─── 2. Camera (gentle ~18° downward angle to admire petal crown) ───
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 5.2);
    camera.lookAt(0, 0.05, 0);

    // ─── 3. Transparent WebGL Renderer ───
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // ─── 4. Spa Studio Lighting (Tailored for Warm Cream Backdrops) ───

    // Warm daylight ambient fill
    const ambientLight = new THREE.AmbientLight(0xfff7ee, 2.2);
    scene.add(ambientLight);

    // Key light (soft warm sun from upper-right)
    const keyLight = new THREE.DirectionalLight(0xfff8f0, 2.6);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.bias = -0.0003;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 20;
    scene.add(keyLight);

    // Fill light (warm champagne fill from left)
    const fillLight = new THREE.DirectionalLight(0xf7dfc8, 1.6);
    fillLight.position.set(-3.5, 3, 2);
    scene.add(fillLight);

    // Rim light (defining petal silhouette edges)
    const rimLight = new THREE.DirectionalLight(0xffeedd, 1.8);
    rimLight.position.set(0, 2.5, -4);
    scene.add(rimLight);

    // Overhead spotlight for lotus stamen radiance
    const spotLight = new THREE.SpotLight(0xfffaec, 2.2, 12, Math.PI / 4, 0.5, 1.5);
    spotLight.position.set(0, 4.5, 1);
    spotLight.target.position.set(0, 0.1, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);
    scene.add(spotLight.target);

    // Under-bounce light (simulating warm light bounced off the cream table/floor)
    const underLight = new THREE.DirectionalLight(0xedd6b8, 1.2);
    underLight.position.set(0, -2, 2);
    scene.add(underLight);

    // Interactive mouse-following candlelight
    const mouseLight = new THREE.PointLight(0xffe0be, 1.2, 8);
    mouseLight.position.set(0, 2, 3.5);
    scene.add(mouseLight);

    // ─── 5. Environment Map for Silky Highlights ───
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envScene = new THREE.Scene();
    const envGeo = new THREE.SphereGeometry(10, 32, 32);
    const envMat = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      color: 0x6e523e,
    });
    envScene.add(new THREE.Mesh(envGeo, envMat));
    const envLight1 = new THREE.PointLight(0xfff0d4, 4, 20);
    envLight1.position.set(3, 5, 3);
    envScene.add(envLight1);
    const envLight2 = new THREE.PointLight(0xf5d3aa, 3, 20);
    envLight2.position.set(-4, 3, -2);
    envScene.add(envLight2);

    const envMap = pmremGenerator.fromScene(envScene, 0.04).texture;
    scene.environment = envMap;

    envGeo.dispose();
    envMat.dispose();
    pmremGenerator.dispose();

    // ─── 6. Root Group for Model (Rotation & Floating Bob) ───
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // ─── 7. Load GLTF & Remove Plastic Stem at Geometry Level ───
    const loader = new GLTFLoader();

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        // Traverse mesh and filter out stem & calyx triangles completely
        model.traverse((child) => {
          if (child instanceof THREE.Mesh && child.geometry) {
            const geo = child.geometry;
            const pos = geo.attributes.position;
            const index = geo.index;
            if (index && pos) {
              const oldIndices = index.array;
              const newIndices: number[] = [];
              for (let i = 0; i < oldIndices.length; i += 3) {
                const a = oldIndices[i];
                const b = oldIndices[i + 1];
                const c = oldIndices[i + 2];
                const z0 = pos.getZ(a);
                const z1 = pos.getZ(b);
                const z2 = pos.getZ(c);
                // Completely eliminate all stem & calyx comb triangles
                // (kept only if all 3 vertices are strictly within petal crown: z <= -51.0)
                if (Math.max(z0, z1, z2) <= -51.0) {
                  newIndices.push(a, b, c);
                }
              }
              geo.setIndex(newIndices);
              geo.computeVertexNormals();
            }

            child.castShadow = true;
            child.receiveShadow = true;

            if (child.material instanceof THREE.MeshStandardMaterial) {
              child.material.envMapIntensity = 1.0;
              child.material.roughness = 0.38;
              child.material.needsUpdate = true;
            }
          }
        });

        // Auto-center and scale pure lotus flower (balanced size: 2.1)
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetSize = 2.1; // Balanced, graceful proportions
        const scale = targetSize / maxDim;

        model.scale.setScalar(scale);
        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale + 0.05;
        model.position.z = -center.z * scale;

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

    // ─── 8. Floating Golden Zen Particles ───
    const particleCount = 35;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 1] = Math.random() * 4 - 1;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      particleSpeeds[i] = 0.2 + Math.random() * 0.4;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xC4924A,
      size: 0.038,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ─── 9. 360° Drag-to-Rotate Interaction with Inertia ───
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let velX = 0; // vertical rotation velocity
    let velY = 0; // horizontal rotation velocity
    let currentRotY = 0.3; // Initial 3/4 angle
    // Default tilt angle ~27.5° (0.48 rad) matching user's favored perspective in Image 2
    const DEFAULT_TILT_X = 0.48;
    let currentRotX = DEFAULT_TILT_X;
    let autoRotateActive = true;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsGrabbing(true);
      setHasInteracted(true);
      autoRotateActive = false;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
      velX = 0;
      velY = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Mouse-following subtle candlelight
      mouseLight.position.x = normX * 3.5;
      mouseLight.position.y = normY * 1.5 + 2.0;

      if (!isDragging) return;

      const deltaX = e.clientX - prevPointerX;
      const deltaY = e.clientY - prevPointerY;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;

      // Smooth, responsive turntable control
      velY = deltaX * 0.007;
      velX = deltaY * 0.004;

      currentRotY += velY;
      // Clamp vertical tilt between 0.15 and 0.72 rad (always showcases lotus heart & stamen)
      currentRotX = Math.max(0.15, Math.min(0.72, currentRotX + velX));
    };

    const onPointerUp = () => {
      if (isDragging) {
        isDragging = false;
        setIsGrabbing(false);
      }
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    // ─── 10. Resize Handler ───
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // ─── 11. Animation Loop ───
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Inertia & Auto-rotation Physics
      if (isDragging) {
        // Direct tracking handled in onPointerMove
      } else {
        // Inertia damping
        velY *= 0.94;
        velX *= 0.94;
        currentRotY += velY;
        currentRotX = Math.max(0.15, Math.min(0.72, currentRotX + velX));

        // When drag velocity dies down, resume slow graceful auto-rotation
        if (Math.abs(velY) < 0.0004 && Math.abs(velX) < 0.0004) {
          autoRotateActive = true;
        }

        if (autoRotateActive) {
          currentRotY += 0.0018; // Very tranquil continuous turntable
          // Gently return vertical tilt to favored Image 2 perspective (0.48 rad)
          currentRotX += (DEFAULT_TILT_X - currentRotX) * 0.02;
        }
      }

      rootGroup.rotation.y = currentRotY;
      rootGroup.rotation.x = currentRotX;

      // Gentle floating breathing bob
      rootGroup.position.y = 0.08 + Math.sin(elapsed * 0.8) * 0.04;

      // Animate particles (slow upward drift)
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i] * 0.004;
        positions[i * 3] += Math.sin(elapsed + i) * 0.0008;

        if (positions[i * 3 + 1] > 4) {
          positions[i * 3 + 1] = -1;
          positions[i * 3] = (Math.random() - 0.5) * 6;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;
      particleMat.opacity = 0.4 + Math.sin(elapsed * 1.5) * 0.15;

      // Render directly with transparent background
      renderer.render(scene, camera);
    };

    animate();

    // ─── 12. Cleanup ───
    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      envMap.dispose();
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
      className={`relative w-full select-none overflow-hidden touch-none ${
        isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
      } ${className}`}
      style={{ aspectRatio: '4/5' }}
    >
      {/* Three.js Transparent Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block relative z-10" />

      {/* Interactive 360° Drag Cue Badge (fades out gracefully after user touches/drags) */}
      <div
        className={`absolute top-4 left-4 z-20 pointer-events-none transition-all duration-700 ${
          hasInteracted ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/85 backdrop-blur-md text-spa-charcoal shadow-md border border-spa-bronze/30">
          <svg
            className="w-3.5 h-3.5 text-spa-bronze flex-shrink-0 animate-spin"
            style={{ animationDuration: '6s' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>Kéo xoay 360°</span>
        </span>
      </div>

      {/* Loading State */}
      {isLoading && !loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-spa-cream/60 backdrop-blur-sm z-20">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-spa-bronze/30 border-t-spa-bronze animate-spin" />
            <span className="text-spa-charcoal/80 text-xs font-sans tracking-wide">
              Đang tải hoa sen 3D...
            </span>
          </div>
        </div>
      )}

      {/* Error State */}
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-spa-cream/80 z-20">
          <div className="text-center px-6">
            <p className="text-spa-charcoal/80 text-sm font-sans mb-2">
              Không thể tải mô hình 3D
            </p>
            <p className="text-spa-wood text-xs font-sans">
              Vui lòng đặt file <code className="text-spa-bronze">lotus.glb</code> vào thư mục <code className="text-spa-bronze">public/models/</code>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
