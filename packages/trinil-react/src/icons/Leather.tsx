import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Leather: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8.081 15.5c.166-.533.546-1.06.762-2 .067-.29.118-.62.142-1m6.934 3c-.166-.533-.546-1.06-.762-2a6 6 0 0 1-.142-1M15.93 8c-.11.427-.327.901-.525 1.5M8.07 8c.11.427.327.901.525 1.5M10.5 6.952c.428-.228.77-.527.971-.897a.1.1 0 0 1 .09-.055h.886c.033 0 .064.017.083.044.317.467.636.784.97 1m-3 9.172c.456.143.938.373 1.44.74a.1.1 0 0 0 .12 0 5 5 0 0 1 1.44-.74m-1.415 4.16c1.013-1.412 2.923-2.326 4.843-1.411.042.02.093.01.123-.026l2.39-2.869a.1.1 0 0 0-.004-.135C18.479 14.915 18 12.957 18 11c0-1.94.942-2.94 1.911-3.454a.1.1 0 0 0 .044-.135l-1.41-2.822a.105.105 0 0 0-.136-.047c-1.072.453-3.912.402-5.378-1.502A.1.1 0 0 0 12.95 3h-1.9a.1.1 0 0 0-.08.04C9.503 4.944 6.663 4.995 5.59 4.542a.105.105 0 0 0-.135.047l-1.41 2.822a.1.1 0 0 0 .044.135C5.059 8.06 6 9.059 6 11c0 1.957-.479 3.915-1.437 4.935a.1.1 0 0 0-.005.135l2.391 2.87c.03.035.08.045.123.025 1.92-.915 3.83-.001 4.843 1.412a.105.105 0 0 0 .17 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Leather.displayName = 'Leather';
