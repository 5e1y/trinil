import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SmileySmile: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m9.5 14.5.168.252a2.803 2.803 0 0 0 4.664 0l.168-.252M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm-5-9.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm8.5 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

SmileySmile.displayName = 'SmileySmile';
