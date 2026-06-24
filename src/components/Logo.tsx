import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  // Determine dimensions based on size
  const sizes = {
    sm: { box: 'w-10 h-10', text: 'text-lg' },
    md: { box: 'w-16 h-16', text: 'text-2xl' },
    lg: { box: 'w-28 h-28', text: 'text-3xl' },
    xl: { box: 'w-48 h-48', text: 'text-4xl md:text-5xl' }
  };

  const selectedSize = sizes[size];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Animated SVG Coffee Cup made of blocks */}
      <div className={`relative ${selectedSize.box} rounded-full bg-berry flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-105 group`}>
        <svg
          viewBox="0 0 100 100"
          className="w-4/5 h-4/5 text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated Steam lines */}
          <g className="animate-pulse">
            {/* Steam Line 1 */}
            <path
              d="M45,26 C43,21 48,18 46,14 C44.5,11 41,13 42,9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              className="opacity-75 group-hover:animate-[bounce_2s_infinite]"
              style={{ animationDelay: '0s' }}
            />
            {/* Steam Line 2 */}
            <path
              d="M51,28 C49,22 54,19 52,15 C50.5,12 47,14 48,10"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
              className="opacity-90 group-hover:animate-[bounce_2.5s_infinite]"
              style={{ animationDelay: '0.4s' }}
            />
            {/* Steam Line 3 */}
            <path
              d="M57,27 C55,23 59,21 57,17 C55.5,14 52,16 53,12"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              className="opacity-60 group-hover:animate-[bounce_3s_infinite]"
              style={{ animationDelay: '0.8s' }}
            />
          </g>

          {/* Grid of Blocks representing the mug */}
          {/* Bottom row (Row 3): 3 blocks */}
          <rect x="34" y="55" width="8" height="8" rx="1.5" className="transition-all duration-300 group-hover:fill-berry-accent" />
          <rect x="43" y="55" width="8" height="8" rx="1.5" className="transition-all duration-300 group-hover:fill-berry-accent" />
          <rect x="52" y="55" width="8" height="8" rx="1.5" className="transition-all duration-300 group-hover:fill-berry-accent" />

          {/* Middle row (Row 2): 3 blocks */}
          <rect x="34" y="46" width="8" height="8" rx="1.5" className="transition-all duration-300 group-hover:fill-berry-accent" />
          <rect x="43" y="46" width="8" height="8" rx="1.5" className="transition-all duration-300 group-hover:fill-berry-accent" />
          <rect x="52" y="46" width="8" height="8" rx="1.5" className="transition-all duration-300 group-hover:fill-berry-accent" />

          {/* Top row (Row 1): 2 blocks (Left, Middle) */}
          <rect x="34" y="37" width="8" height="8" rx="1.5" className="transition-all duration-300 group-hover:fill-berry-accent" />
          <rect x="43" y="37" width="8" height="8" rx="1.5" className="transition-all duration-300 group-hover:fill-berry-accent" />

          {/* Mug Handle on the Right block of middle row */}
          <path
            d="M60,49 C64,49 66,51 66,53 C66,55 64,57 60,57"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-300 group-hover:stroke-berry-accent"
          />
        </svg>
      </div>

      {showText && (
        <span className={`font-display tracking-wide font-bold mt-2 text-berry select-none ${selectedSize.text}`}>
          блокић
        </span>
      )}
    </div>
  );
}
