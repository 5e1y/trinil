import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BrainSearch: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M17.87 7.629a3 3 0 0 0-3.46-2.07c-.52.104-1.098-.04-1.508-.377A2.98 2.98 0 0 0 11 4.5c-.705 0-1.353.243-1.866.65a1.63 1.63 0 0 1-1.055.351L8 5.5a3 3 0 0 0-2.871 2.129m12.741 0A3 3 0 0 1 20 10.579c-.011.38.113.758.35 1.055a2.99 2.99 0 0 1 .614 2.338M17.87 7.63c-1.258-.337-2.626.258-2.84 1.519-.034.192-.188.352-.384.352a.38.38 0 0 1-.253-.101c-1.4-1.255-3.547-.473-3.455 1.601m-6.436 5.096a3 3 0 0 0 4.12 2.686 1.7 1.7 0 0 1 1.257 0 2.984 2.984 0 0 0 3.126-.552m-8.503-2.134a2.995 2.995 0 0 1-1.338-3.57 1.6 1.6 0 0 0 0-1.052A3 3 0 0 1 5.129 7.63m-.627 8.467c0-.63.26-1.606 1.098-2.181M5.13 7.629C4.81 8.68 5.129 11 8 10.5M9 15c.5-1.5 2-1.667 3-1.5.78.209 1.28.572 1.587 1 .144.201.245.417.313.638M23 18a5 5 0 0 1-5 5m5-5a5 5 0 0 0-2.037-4.028M23 18a5 5 0 0 0-5-5m0 10a5 5 0 0 1-4.995-4.77M18 23a5 5 0 0 1-5-5m5-5c1.11 0 2.134.361 2.963.972M18 13a5 5 0 0 0-4.1 2.138M18 13a5 5 0 0 0-5 5m0 0c0-1.064.333-2.051.9-2.862M13 18q0 .116.005.23m5.91.684a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.827 2.828Zm0 0L20 20"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BrainSearch.displayName = 'BrainSearch';
