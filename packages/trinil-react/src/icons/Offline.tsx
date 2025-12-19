import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Offline: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 21a13.07 13.07 0 0 1-3.578-9M12 21a9 9 0 0 1-9-9m9 9q.677-.718 1.227-1.507M12 21q.959-.001 1.862-.193M8.422 12c0-3.237 1.193-6.474 3.578-9m-3.578 9h7.156m-7.156 0H3m9-9a9 9 0 0 0-9 9m9-9a9 9 0 0 1 9 9m-9-9a13.07 13.07 0 0 1 3.578 9M21 12h-5.422M21 12q-.001.959-.193 1.862M15.578 12q0 .846-.108 1.687M18 18l1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5m-1.03-2.813a5 5 0 0 0-2.243 5.806m2.243-5.806A5 5 0 0 1 18 13c1.04 0 2.007.318 2.807.862m-7.58 5.631c.147.472.363.914.635 1.314m0 0a5 5 0 1 0 6.945-6.945"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Offline.displayName = 'Offline';
