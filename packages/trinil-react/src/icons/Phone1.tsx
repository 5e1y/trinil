import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Phone1: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.104 5.56a1.215 1.215 0 0 1-.13 1.58l-.861.853a.25.25 0 0 0-.035.314 24.6 24.6 0 0 0 7.584 7.51c.1.064.232.05.317-.034l.858-.85a1.245 1.245 0 0 1 1.599-.126l2.825 2.024c.451.323.627.906.37 1.395-.32.609-.834 1.441-1.537 2.137-1.279 1.268-3.174 1.781-4.828 1.054-5.305-2.335-9.7-6.714-12.587-12.545-.856-1.727-.383-3.774.99-5.134a6.6 6.6 0 0 1 2.152-1.419c.448-.181.936.008 1.219.397z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Phone1.displayName = 'Phone1';
