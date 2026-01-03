import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Glass: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 12.75h-.147c-5.415 0-8.449-6.242-5.103-10.5h10.5c3.346 4.258.312 10.5-5.103 10.5zm0 0V21m0 0h4.5M12 21H7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Glass.displayName = 'Glass';
