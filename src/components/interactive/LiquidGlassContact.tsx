import React, { useState, useRef, useEffect } from 'react';
import { CONTACT_CONFIG } from '@/data/contact';
import { Phone, BookOpen } from 'lucide-react';
import { LIQUID_DISPLACEMENT_MAP_URI } from '@/data/liquidGlassFilterMap';

/**
 * LiquidGlassContact — Vadim Matveev Liquid Glass with Unified Bronze Outline Icons
 * 
 * Features:
 * - 100% authentic Vadim Matveev CSS box-shadow and SVG refraction filter
 * - Zero hover flicker: buttons do not scale bounding-box, icons scale smoothly
 * - Symmetrical cascade: unfolds smoothly upwards on hover, rolls smoothly downwards into (+) on leave
 * - Unified luxury aesthetic: All icons are bronze outline/stroke-only (Messenger, Zalo, Hotline, Menu, +)
 */
export default function LiquidGlassContact() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearTimer();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    clearTimer();
    // 300ms grace period so moving cursor naturally feels effortless
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleToggleClick = () => {
    clearTimer();
    setIsOpen((prev) => !prev);
  };

  // Close on outside click or Escape
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    document.addEventListener('keydown', handleKey);

    return () => {
      clearTimer();
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const contactButtons = [
    {
      id: 'facebook',
      title: 'Facebook Fanpage',
      subtitle: 'Tư vấn & Đặt lịch qua Fanpage',
      href: CONTACT_CONFIG.FACEBOOK_URL,
      isExternal: true,
      openDelay: '120ms',
      closeDelay: '0ms',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="liquid-icon w-6 h-6 text-spa-bronze"
          aria-hidden="true"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      id: 'zalo',
      title: 'Zalo Chat Trực Tiếp',
      subtitle: 'Gửi ảnh da & nhận phác đồ riêng',
      href: CONTACT_CONFIG.ZALO_URL,
      isExternal: true,
      openDelay: '80ms',
      closeDelay: '35ms',
      icon: (
        <svg
          width="32"
          height="18"
          viewBox="0 0 44 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="liquid-icon text-spa-bronze"
          aria-hidden="true"
        >
          {/* Z */}
          <path d="M4 4h9l-9 12h9" />
          {/* a */}
          <circle cx="19.5" cy="11.5" r="4.5" />
          <path d="M24 7v9" />
          {/* l */}
          <path d="M28.5 4v12" />
          {/* o */}
          <circle cx="37" cy="11.5" r="4.5" />
        </svg>
      ),
    },
    {
      id: 'hotline',
      title: `Hotline: ${CONTACT_CONFIG.HOTLINE_DISPLAY}`,
      subtitle: 'Gọi đặt lịch hẹn ngay tức thì',
      href: CONTACT_CONFIG.HOTLINE_TEL,
      isExternal: false,
      openDelay: '40ms',
      closeDelay: '70ms',
      icon: (
        <Phone
          className="liquid-icon w-5.5 h-5.5 text-spa-bronze"
          strokeWidth={1.8}
        />
      ),
    },
    {
      id: 'menu',
      title: 'Xem Menu Bảng Giá',
      subtitle: 'Toàn bộ gói dưỡng sinh & trị liệu',
      href: CONTACT_CONFIG.MENU_URL,
      isExternal: true,
      openDelay: '0ms',
      closeDelay: '105ms',
      icon: (
        <BookOpen
          className="liquid-icon w-5.5 h-5.5 text-spa-bronze"
          strokeWidth={1.8}
        />
      ),
    },
  ];

  return (
    <>
      {/* Exact Vadim Matveev SVG Filter Definition */}
      <svg
        style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
        aria-hidden="true"
      >
        <filter id="liquid-glass-filter" primitiveUnits="objectBoundingBox">
          <feImage
            result="map"
            width="100%"
            height="100%"
            x="0"
            y="0"
            href={LIQUID_DISPLACEMENT_MAP_URI}
          />
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.01" result="blur" />
          <feDisplacementMap
            id="disp"
            in="blur"
            in2="map"
            scale="0.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Floating Action Buttons Container */}
      <aside
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center select-none"
        aria-label="Kênh liên hệ nhanh Xile Spa"
      >
        {/* Child Liquid Glass Buttons */}
        <div
          className={`flex flex-col items-center gap-3 mb-3 ${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          {contactButtons.map((btn) => (
            <div
              key={btn.id}
              className="group relative flex items-center justify-center"
            >
              {/* Liquid Glass Capsule Tooltip */}
              <div
                className="absolute right-[calc(100%+14px)] px-4 py-2 rounded-full liquid-glass-pill opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden sm:flex flex-col gap-0.5"
              >
                <span className="text-xs font-semibold text-spa-charcoal tracking-tight">
                  {btn.title}
                </span>
                <span className="text-[11px] font-normal text-spa-charcoal/70">
                  {btn.subtitle}
                </span>
              </div>

              {/* Exact Vadim Matveev Liquid Glass Button */}
              <a
                href={btn.href}
                target={btn.isExternal ? '_blank' : undefined}
                rel={btn.isExternal ? 'noopener noreferrer' : undefined}
                aria-label={btn.title}
                className={`liquid-glass-button ${
                  isOpen
                    ? 'translate-y-0 scale-100 opacity-100'
                    : 'translate-y-6 scale-75 opacity-0'
                }`}
                style={{
                  transitionProperty: 'transform, opacity, background-color, box-shadow',
                  transitionDuration: isOpen ? '320ms' : '240ms',
                  transitionTimingFunction: isOpen
                    ? 'cubic-bezier(0.16, 1, 0.3, 1)'
                    : 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: isOpen ? btn.openDelay : btn.closeDelay,
                }}
              >
                <div className="flex items-center justify-center">
                  {btn.icon}
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Main Trigger Button (+) */}
        <button
          type="button"
          onClick={handleToggleClick}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Đóng kênh liên hệ' : 'Mở kênh liên hệ'}
          className="liquid-glass-button main-trigger-button cursor-pointer"
        >
          {/* Subtle Breathing Glow */}
          {!isOpen && (
            <span className="absolute -inset-1.5 rounded-full bg-spa-bronze/20 blur-md animate-pulse pointer-events-none" />
          )}

          {/* Morphing (+) to (×) Icon */}
          <div
            className={`transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen ? 'rotate-135 text-spa-bronze' : 'rotate-0 text-spa-bronze'
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="liquid-icon w-6 h-6 text-spa-bronze"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </button>
      </aside>

      {/* EXACT CSS FROM https://codepen.io/fooontic/pen/KwpRaGr (Optimized for Zero Flicker) */}
      <style>{`
        /* Vadim Matveev CSS Variables */
        :root {
          --c-glass: #bbbbbc;
          --c-light: #fff;
          --c-dark: #000;
          --glass-reflex-dark: 1;
          --glass-reflex-light: 1;
          --saturation: 150%;
        }

        /* The Exact Liquid Glass Button Specification */
        .liquid-glass-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          box-sizing: border-box;
          border: none;
          border-radius: 99em;
          background-color: color-mix(in srgb, var(--c-glass) 12%, transparent);
          backdrop-filter: blur(8px) url(#liquid-glass-filter) saturate(var(--saturation));
          -webkit-backdrop-filter: blur(8px) saturate(var(--saturation));
          box-shadow: 
            inset 0 0 0 1px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 10%), transparent),
            inset 1.8px 3px 0px -2px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 90%), transparent), 
            inset -2px -2px 0px -2px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 80%), transparent), 
            inset -3px -8px 1px -6px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 60%), transparent), 
            inset -0.3px -1px 4px 0px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 12%), transparent), 
            inset -1.5px 2.5px 0px -2px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 20%), transparent), 
            inset 0px 3px 4px -2px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 20%), transparent), 
            inset 2px -6.5px 1px -4px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 10%), transparent), 
            0px 1px 5px 0px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 10%), transparent), 
            0px 6px 16px 0px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 8%), transparent);
          will-change: transform, opacity, background-color;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* Hover State — Exact from Vadim Matveev Switcher Indicator */
        .liquid-glass-button:hover {
          background-color: color-mix(in srgb, var(--c-glass) 32%, transparent);
          box-shadow: 
            inset 0 0 0 1px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 10%), transparent),
            inset 2px 1px 0px -1px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 90%), transparent), 
            inset -1.5px -1px 0px -1px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 80%), transparent), 
            inset -2px -6px 1px -5px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 60%), transparent), 
            inset -1px 2px 3px -1px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 20%), transparent), 
            inset 0px -4px 1px -2px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 10%), transparent), 
            0px 3px 6px 0px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 8%), transparent),
            0px 8px 20px 0px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 12%), transparent);
        }

        /* Icon Hover Elastic Pop — Zero flicker because outer glass does not change bounding box */
        .liquid-icon {
          display: block;
          transition: transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: translateZ(0);
        }
        .liquid-glass-button:hover .liquid-icon {
          transform: scale(1.18);
        }

        /* Main Trigger Button */
        .main-trigger-button {
          width: 58px;
          height: 58px;
        }

        /* Pill Tooltip using matching Vadim Matveev glass style */
        .liquid-glass-pill {
          background-color: color-mix(in srgb, #ffffff 75%, transparent);
          backdrop-filter: blur(12px) saturate(var(--saturation));
          -webkit-backdrop-filter: blur(12px) saturate(var(--saturation));
          box-shadow: 
            inset 0 0 0 1px rgba(255, 255, 255, 0.8),
            inset 1.8px 3px 0px -2px rgba(255, 255, 255, 0.9),
            0px 4px 14px 0px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </>
  );
}
