import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cloud: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15.984 10.401C18.41 10.023 21 11.789 21 14.68A4.32 4.32 0 0 1 16.68 19H7.32A4.32 4.32 0 0 1 3 14.68c0-2.094 1.36-3.598 3.03-4.124m9.954-.155Q16 10.203 16 10a5 5 0 1 0-9.97.556m9.954-.155a4.17 4.17 0 0 0-1.984.882m-7.97-.727A4.4 4.4 0 0 1 8 10.399a4.17 4.17 0 0 1 2 .884"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cloud.displayName = 'Cloud';
