import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MessageDots: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 11.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7.75 11.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM16.25 11.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

MessageDots.displayName = 'MessageDots';
