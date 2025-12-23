import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cheer: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 0V15m0-6.5 2.316.772a1 1 0 0 0 1.116-.349L17.626 6M12 8.5l-2.776.793A1 1 0 0 1 8.1 8.862L6.312 6M12 15l-.949 2.846a1 1 0 0 0-.051.316V21.5m1-6.5 2.09.836a1 1 0 0 1 .565.577l1.158 3.087"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cheer.displayName = 'Cheer';
