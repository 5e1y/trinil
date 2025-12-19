import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Gardeing: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m20.5 9.5-.293.293a1 1 0 0 1-1.414 0L18 9m-3.5-5.5-.293.293a1 1 0 0 0 0 1.414L15 6m0 0 1-1m-1 1 1.5 1.5m0 0 1-1m-1 1L18 9m-1.5-1.5L12 12m6-3 1-1m-7 4-7.5 7.5M12 12l4.5 4.5M12 12 8.5 8.5m8 8h2.459a.1.1 0 0 1 .07.03l.9.9a.1.1 0 0 1 0 .14l-2.358 2.36a.1.1 0 0 1-.142 0l-.9-.9a.1.1 0 0 1-.029-.072zm-8-8 1.293-1.293a1 1 0 0 0 0-1.414L8.586 4.586A2 2 0 0 0 7.172 4H6a2 2 0 0 0-2 2V7.17a2 2 0 0 0 .586 1.415l1.207 1.207a1 1 0 0 0 1.414 0z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Gardeing.displayName = 'Gardeing';
