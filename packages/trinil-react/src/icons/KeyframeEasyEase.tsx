import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const KeyframeEasyEase: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 4h8.084c.89 0 1.337 1.077.707 1.707l-5.586 5.586a1 1 0 0 0 0 1.414l5.586 5.586c.63.63.184 1.707-.707 1.707H12m0-16h-.002M12 4v16m-.002-16v16m0-16H3.914c-.89 0-1.337 1.077-.707 1.707l5.586 5.586a1 1 0 0 1 0 1.414l-5.586 5.586c-.63.63-.184 1.707.707 1.707h8.084m0 0H12"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

KeyframeEasyEase.displayName = 'KeyframeEasyEase';
