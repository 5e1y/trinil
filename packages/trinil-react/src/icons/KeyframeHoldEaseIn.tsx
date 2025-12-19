import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const KeyframeHoldEaseIn: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12.088 4H4.002c-.89 0-1.337 1.077-.707 1.707l5.586 5.586a1 1 0 0 1 0 1.414l-5.586 5.586c-.63.63-.184 1.707.707 1.707h8.086m0-16v16m0-16h6.998a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6.998"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

KeyframeHoldEaseIn.displayName = 'KeyframeHoldEaseIn';
