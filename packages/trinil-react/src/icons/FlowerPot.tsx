import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FlowerPot: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 6.243V5.12m0 1.122a.997.997 0 0 0-1 1m1-1a.997.997 0 0 1 1 1M12 5.12a2.121 2.121 0 1 1 2.121 2.122M12 5.12a2.121 2.121 0 1 0-2.121 2.122m4.242 0H13m1.121 0A2.121 2.121 0 1 1 12 9.364m1-2.121a.997.997 0 0 1-1 1m0 0v1.121m0-1.121a.997.997 0 0 1-1-1m1 2.121a2.121 2.121 0 1 1-2.121-2.121M12 9.364V14m-1-6.757H9.879M12 14h3.4a.1.1 0 0 1 .1.1v.376a.1.1 0 0 1-.01.045l-.25.5a1 1 0 0 0 .025.944l.332.58a3.7 3.7 0 0 1-.32 4.146.87.87 0 0 1-.691.309H9.414a.87.87 0 0 1-.69-.309 3.7 3.7 0 0 1-.32-4.147l.33-.58a1 1 0 0 0 .027-.943l-.25-.5a.1.1 0 0 1-.011-.045V14.1a.1.1 0 0 1 .1-.1z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

FlowerPot.displayName = 'FlowerPot';
