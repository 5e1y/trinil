import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Dropper: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m9 18-1-1m1 1 2-2m-2 2-5.19 2.83a.472.472 0 0 1-.64-.64l2.761-5.064a1 1 0 0 1 .17-.228l5.106-5.105a1 1 0 0 0 .293-.707v-.843a3 3 0 0 1 .879-2.122L14.62 3.88a3.017 3.017 0 0 1 4.258 0L20.12 5.12a3.017 3.017 0 0 1 0 4.258L17.88 11.62a3 3 0 0 1-2.122.879h-.843a1 1 0 0 0-.707.293L13 14m-2 2 2-2m-2 2-1-1m3-1-1-1"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Dropper.displayName = 'Dropper';
