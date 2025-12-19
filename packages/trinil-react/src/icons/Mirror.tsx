import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Mirror: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 13.5V13m0 8v-.5m0-2V18m0-2v-.5m0-4.5v-.5m0-2V8m0-2v-.5m0-2V3m8.8 13h-5.7a.1.1 0 0 1-.1-.1V8.3a.1.1 0 0 1 .18-.06l5.7 7.6a.1.1 0 0 1-.08.16ZM3.2 16h5.7a.1.1 0 0 0 .1-.1V8.3a.1.1 0 0 0-.18-.06l-5.7 7.6a.1.1 0 0 0 .08.16Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Mirror.displayName = 'Mirror';
