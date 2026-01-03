import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Nfc: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M13.088 2.25A13.46 13.46 0 0 1 17.25 12c0 3.833-1.597 7.293-4.162 9.75M11.013 4.417A10.47 10.47 0 0 1 14.25 12a10.47 10.47 0 0 1-3.238 7.583m-2.074-13A7.48 7.48 0 0 1 11.25 12c0 2.13-.887 4.052-2.312 5.417M6.863 8.75A4.49 4.49 0 0 1 8.25 12c0 1.278-.532 2.43-1.387 3.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Nfc.displayName = 'Nfc';
