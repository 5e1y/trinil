import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Share: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.146 5a.35.35 0 0 0-.25.104l-5.189 5.189a1 1 0 0 0 0 1.414l5.19 5.19a.353.353 0 0 0 .603-.25V15a1 1 0 0 1 1-1h1.377a9 9 0 0 1 7.204 3.605l1.319 1.761a.333.333 0 0 0 .6-.2V17a9 9 0 0 0-9-9h-1.5a1 1 0 0 1-1-1V5.354A.354.354 0 0 0 9.146 5Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Share.displayName = 'Share';
