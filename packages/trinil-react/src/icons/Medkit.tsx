import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Medkit: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16 6h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3m8 0-.544-1.632A2 2 0 0 0 13.559 3h-3.117a2 2 0 0 0-1.898 1.368L8 6m8 0H8m2.1 2.5h3.8a.1.1 0 0 1 .1.1v2.3a.1.1 0 0 0 .1.1h2.3a.1.1 0 0 1 .1.1v3.8a.1.1 0 0 1-.1.1h-2.3a.1.1 0 0 0-.1.1v2.3a.1.1 0 0 1-.1.1h-3.8a.1.1 0 0 1-.1-.1v-2.3a.1.1 0 0 0-.1-.1H7.6a.1.1 0 0 1-.1-.1v-3.8a.1.1 0 0 1 .1-.1h2.3a.1.1 0 0 0 .1-.1V8.6a.1.1 0 0 1 .1-.1Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Medkit.displayName = 'Medkit';
