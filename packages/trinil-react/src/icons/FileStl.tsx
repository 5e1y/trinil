import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FileStl: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.25 9.75h-6a1.5 1.5 0 0 1-1.5-1.5v-6m7.5 7.5-7.5-7.5m7.5 7.5v3m-7.5-10.5h-7.5a1.5 1.5 0 0 0-1.5 1.5V22.5m3.75-.75s.75.75 1.61.75a1.39 1.39 0 0 0 .621-2.634l-1.462-.732A1.39 1.39 0 0 1 8.89 16.5c.84 0 1.609.75 1.609.75m4.5-.75v6m0-6h-1.5m1.5 0h1.5m3 0v6h3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FileStl.displayName = 'FileStl';
