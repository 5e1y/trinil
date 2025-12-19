import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Headphones: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m19 12 .06.015a2 2 0 0 1 1.455 2.425l-1.03 4.12a2 2 0 0 1-2.425 1.455l-.12-.03a2 2 0 0 1-1.455-2.425l1.03-4.12a2 2 0 0 1 2.425-1.455zm0 0c1.021-4.341-2.272-8.5-6.732-8.5h-.536C7.272 3.5 3.98 7.659 5 12m0 0-.06.015a2 2 0 0 0-1.455 2.425l1.03 4.12a2 2 0 0 0 2.425 1.455l.12-.03a2 2 0 0 0 1.455-2.425l-1.03-4.12a2 2 0 0 0-2.425-1.455z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Headphones.displayName = 'Headphones';
