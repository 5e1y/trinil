import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AnimalRabbit: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5 11v2.016M5 11l3-5c1-2 0-3-1-2.5-4 2-4 7.5-2 7.5Zm0 0h5m-5 2.016v1.234c0 .966 1 2.25 2.5 2.25s2.5-1.284 2.5-2.25V12.2m-5 .816a7.4 7.4 0 0 0-1.5 4.471V19.5a1 1 0 0 0 1 1H6m4-8.3V11m0 1.2 1.323-.265c3.573-.714 6.916 1.889 7.162 5.46M10 11l3-5c1-2 0-3-1-2.5-4 2-4 7.5-2 7.5Zm8.5 8.618a1.5 1.5 0 1 0-.015-2.223m.015 2.223v-1.8q0-.213-.015-.423m.015 2.223a.88.88 0 0 1-.882.882H11m0 0H8.5m2.5 0a2.5 2.5 0 0 1 2.5-2.5h1M6 20.5V19m0 1.5h2.5m0 0V19"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AnimalRabbit.displayName = 'AnimalRabbit';
