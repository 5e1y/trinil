import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FileStl: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14 3.09V7a1 1 0 0 0 1 1h3.91M14 3.09a1 1 0 0 0-.414-.09H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.414A1 1 0 0 0 18.91 8M14 3.09a1 1 0 0 1 .293.203l4.414 4.414A1 1 0 0 1 18.91 8M11 14.5h1m0 0h1m-1 0v4m3-4v3.9a.1.1 0 0 0 .1.1h1.4m-7.5-4h-.523a.977.977 0 0 0-.542 1.79l.63.42a.977.977 0 0 1-.542 1.79H7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FileStl.displayName = 'FileStl';
