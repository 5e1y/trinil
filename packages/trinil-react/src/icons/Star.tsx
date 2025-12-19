import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Star: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M11.104 5.302a1 1 0 0 1 1.791 0l1.886 3.794 4.202.606a1 1 0 0 1 .553 1.709L16.5 14.349l.718 4.159a1 1 0 0 1-1.448 1.056L12 17.596l-3.77 1.968a1 1 0 0 1-1.448-1.056l.718-4.159-3.036-2.938a1 1 0 0 1 .553-1.709l4.202-.606z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Star.displayName = 'Star';
