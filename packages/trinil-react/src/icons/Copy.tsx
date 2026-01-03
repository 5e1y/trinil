import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Copy: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 4.5v-.75A1.5 1.5 0 0 1 9 2.25h6.129a1.5 1.5 0 0 1 1.06.44l5.122 5.12a1.5 1.5 0 0 1 .439 1.061v6.13a1.5 1.5 0 0 1-1.5 1.5l-.75-.001M2.25 9v11.25a1.5 1.5 0 0 0 1.5 1.5H15a1.5 1.5 0 0 0 1.5-1.5v-6.129a1.5 1.5 0 0 0-.44-1.06l-5.12-5.122A1.5 1.5 0 0 0 9.878 7.5H3.75A1.5 1.5 0 0 0 2.25 9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Copy.displayName = 'Copy';
