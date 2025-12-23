import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GitPull: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8m5-10h5a2 2 0 0 1 2 2v8M11 6l2.5-2.5M11 6l2.5 2.5M18 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
GitPull.displayName = 'GitPull';
