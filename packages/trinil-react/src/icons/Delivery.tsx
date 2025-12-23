import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Delivery: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.5 18.25a1.75 1.75 0 1 1 3.5 0m-3.5 0a1.75 1.75 0 1 0 3.5 0m-3.5 0h-2m-5 0a1.75 1.75 0 1 1-3.5 0m3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0h5m-8.5 0H3.669a1 1 0 0 1-.988-1.155l.72-4.595M20 18.25h.5a1 1 0 0 0 1-1v-2.447a1 1 0 0 0-.168-.555l-1.535-2.303a1 1 0 0 0-.832-.445h-3.427m-10.636-6h10.425a1 1 0 0 1 .987 1.158l-.776 4.842M14.5 18.25l1.038-6.75M8 8H3.402M7 10.5H2.402"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Delivery.displayName = 'Delivery';
