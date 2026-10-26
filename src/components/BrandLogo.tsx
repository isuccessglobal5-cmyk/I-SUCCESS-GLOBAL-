import React from 'react';

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'banner' | 'card';
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  className = '',
  onClick
}) => {
  const isFooter = variant === 'footer';
  const isBanner = variant === 'banner';

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col items-center justify-center cursor-pointer select-none group text-center ${className}`}
    >
      {/* Monogram Crest Emblem matching mockup */}
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 100 90"
          className={`${
            isBanner ? 'w-16 h-14 md:w-20 md:h-18' : isFooter ? 'w-12 h-11' : 'w-10 h-9'
          } transition-transform duration-300 group-hover:scale-105 drop-shadow-md`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Glow Shield / Ribbon */}
          <path
            d="M50 5 L82 22 V60 C82 74 50 85 50 85 C50 85 18 74 18 60 V22 Z"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />

          {/* Inner Geometric Shield Accent */}
          <path
            d="M50 14 L75 27 V56 C75 66 50 75 50 75 C50 75 25 66 25 56 V27 Z"
            fill="url(#crestFill)"
            stroke="url(#goldGradientLight)"
            strokeWidth="1.2"
          />

          {/* Stylized Interlocking Monogram: iS & T-Cross */}
          {/* Vertical pillar / 'i' stem */}
          <line x1="50" y1="23" x2="50" y2="67" stroke="url(#goldGradientLight)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="19" r="2.5" fill="#FDF3CF" />

          {/* Dynamic 'S' flow across stem */}
          <path
            d="M62 32 C62 27 57 26 50 26 C41 26 38 31 38 36 C38 43 47 44 54 47 C61 50 63 54 63 59 C63 66 56 68 50 68 C41 68 37 63 37 57"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow"
          />

          {/* Accent Crossbar */}
          <line x1="33" y1="36" x2="67" y2="36" stroke="url(#goldGradientLight)" strokeWidth="2" strokeLinecap="round" />

          {/* Small Decorative Stars / Laurel points */}
          <circle cx="32" cy="48" r="1.5" fill="#F8D479" />
          <circle cx="68" cy="48" r="1.5" fill="#F8D479" />

          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="100" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="50%" stopColor="#E5A83B" />
              <stop offset="100%" stopColor="#C4881A" />
            </linearGradient>
            <linearGradient id="goldGradientLight" x1="20" y1="10" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF2C6" />
              <stop offset="50%" stopColor="#F5D061" />
              <stop offset="100%" stopColor="#D89A29" />
            </linearGradient>
            <radialGradient id="crestFill" cx="50" cy="45" r="35" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6E0913" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2A0205" stopOpacity="0.95" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text Lockup matching the mockup */}
      <div className="mt-1 flex flex-col items-center">
        <span
          className={`font-black tracking-[0.22em] text-[#F7D272] uppercase ${
            isBanner ? 'text-sm md:text-base' : isFooter ? 'text-xs' : 'text-[11px]'
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          GLOBAL
        </span>
        <span
          className={`font-semibold tracking-[0.28em] text-[#E8C582]/90 uppercase ${
            isBanner ? 'text-[9px] md:text-[10px]' : 'text-[7.5px]'
          }`}
        >
          ...CHRIST &amp; CLASS...
        </span>
      </div>
    </div>
  );
};
