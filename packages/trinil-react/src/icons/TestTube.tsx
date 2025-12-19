import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TestTube: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M14.5 18a3 3 0 1 1-6 0V5.303a1 1 0 0 0-.168-.555l-.768-1.151A.384.384 0 0 1 7.884 3h7.232a.384.384 0 0 1 .32.597l-.768 1.151a1 1 0 0 0-.168.555V9m0 9h-2m2 0v-3m0 0h-2m2 0v-3m0 0h-2m2 0V9m0 0h-2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

TestTube.displayName = 'TestTube';
