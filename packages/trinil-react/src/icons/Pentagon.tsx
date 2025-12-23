import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Pentagon: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M11.412 3.741a1 1 0 0 1 1.176 0l7.86 5.71a1 1 0 0 1 .363 1.119l-3.003 9.239a1 1 0 0 1-.95.691H7.142a1 1 0 0 1-.951-.691l-3.003-9.24a1 1 0 0 1 .364-1.117z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Pentagon.displayName = 'Pentagon';
