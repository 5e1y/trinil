import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Pen: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m19.5 12 1.81-1.81a1.5 1.5 0 0 0 0-2.122l-5.378-5.379a1.5 1.5 0 0 0-2.122 0L12 4.5m7.5 7.5L12 4.5m7.5 7.5c.42 3.786-2.513 7.561-6.27 8.188L4 21.726a1.49 1.49 0 0 1-1.307-.42M12 4.5c-3.786-.42-7.561 2.513-8.188 6.27L2.274 20a1.49 1.49 0 0 0 .42 1.307m6.965-6.966a2.25 2.25 0 1 1 3.182-3.182 2.25 2.25 0 0 1-3.182 3.182m0 0-6.966 6.966"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Pen.displayName = 'Pen';
