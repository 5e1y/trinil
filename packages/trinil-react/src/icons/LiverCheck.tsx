import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LiverCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m12 14.5-4 3.707a2.977 2.977 0 0 1-5-2.184v-5.34a4.59 4.59 0 0 1 5.412-4.517L13 7m-1 7.5h1.208c.502 0 .995-.08 1.462-.23M12 14.5c-1.2-3.2.167-6.333 1-7.5m0 0 4.378-.438a3.3 3.3 0 0 1 1.223.11l1.258.359a1.851 1.851 0 0 1 .41 3.387l-2.274 1.3a3 3 0 0 0-.85.727l-.213.265a5 5 0 0 1-.51.544M16 18l1.43 1.43a.1.1 0 0 0 .14 0L20 17m-3.578-3.746a5 5 0 1 1-1.753 1.017m1.753-1.017a5 5 0 0 0-1.752 1.017"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LiverCheck.displayName = 'LiverCheck';
