import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Factory: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3 18.9V4.1a.1.1 0 0 1 .1-.1h2.8a.1.1 0 0 1 .1.1v7.223a.1.1 0 0 0 .151.086l4.723-2.833a.1.1 0 0 1 .15.069l.45 2.702a.1.1 0 0 0 .155.067l4.242-2.828a.1.1 0 0 1 .154.067l.45 2.694a.1.1 0 0 0 .154.067l4.215-2.81a.1.1 0 0 1 .156.083V18.9a.1.1 0 0 1-.1.1H3.1a.1.1 0 0 1-.1-.1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Factory.displayName = 'Factory';
