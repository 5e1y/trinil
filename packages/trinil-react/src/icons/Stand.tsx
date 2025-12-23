import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Stand: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 0V15m0-6.5 1.868 3.27a1 1 0 0 1 .132.496V14.5m-2-6-1.868 3.27a1 1 0 0 0-.132.496V14.5m2 .5-.949 2.846a1 1 0 0 0-.051.316V21.5m1-6.5.949 2.846a1 1 0 0 1 .051.316V21.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Stand.displayName = 'Stand';
