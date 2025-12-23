import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const File: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14 3.09V7a1 1 0 0 0 1 1h3.91M6 21h12a1 1 0 0 0 1-1V8.414a1 1 0 0 0-.293-.707l-4.414-4.414A1 1 0 0 0 13.586 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
File.displayName = 'File';
