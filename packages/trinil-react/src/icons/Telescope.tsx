import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Telescope: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.154 11.347a2.251 2.251 0 0 1 .636 3.997m-.636-3.997L18.31 7.19a1.5 1.5 0 0 0 0-2.121L15.931 2.69a1.5 1.5 0 0 0-2.12 0L7.5 9a1.06 1.06 0 0 0 0 1.5m6.654.847L12 13.5a1.06 1.06 0 0 1-.729.31m-.771-.31-1.94 1.94a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 1 0-2.12L7.5 10.5m3 3-3-3m3 3c.213.213.493.316.771.31m0 0a2.25 2.25 0 0 0 .939 1.534m1.29.406v6m0-6c-.48 0-.925-.15-1.29-.406m1.29.406c.48 0 .925-.15 1.29-.406m-2.58 0L8.25 21m6.54-5.656L18.75 21"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Telescope.displayName = 'Telescope';
