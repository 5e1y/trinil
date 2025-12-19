import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Music: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M8 9V6.09c0-.05.04-.09.09-.09a60 60 0 0 0 10.733-.968.15.15 0 0 1 .177.148V8M8 9v7m0-7h.09a60 60 0 0 0 10.733-.968L19 8M8 16v1.75A1.75 1.75 0 1 1 6.25 16zm11-8v7m0 0v1.75A1.75 1.75 0 1 1 17.25 15z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Music.displayName = 'Music';
