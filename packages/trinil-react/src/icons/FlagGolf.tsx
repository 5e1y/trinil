import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FlagGolf: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 16.5a3.5 3.5 0 0 1 3.5 3.5 1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1 3.5 3.5 0 0 1 3.5-3.5Zm0 0c0-2.179-.165-4.352-.492-6.5m0 0c-.319-2.1-.793-4.177-1.42-6.213a.182.182 0 0 1 .208-.232l5.508 1.033c.85.16 1.11 1.248.426 1.775z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

FlagGolf.displayName = 'FlagGolf';
