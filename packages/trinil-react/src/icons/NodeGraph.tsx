import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const NodeGraph: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m11.26 11.667 6.927 4m-6.928-4c.213-.368.252-.789.142-1.167m-.142 1.167c-.213.37-.561.614-.946.707m-1.103-.158a1.5 1.5 0 0 1-.549-2.05m.55 2.05-2.75 4.763m2.75-4.763c.347.2.74.246 1.102.159m.397-2.757a1.496 1.496 0 0 0-2.05.549m2.05-.55 1.5-2.598m-1.5 2.599c.35.201.587.523.691.882m-2.74-.333L6.066 8.668M12.21 7.02a1.5 1.5 0 1 0 1.5-2.598 1.5 1.5 0 0 0-1.5 2.598Zm-5.75 9.959a1.5 1.5 0 1 1-1.5 2.598 1.5 1.5 0 0 1 1.5-2.598Zm-.394-8.31a1.5 1.5 0 1 1-2.598-1.5 1.5 1.5 0 0 1 2.598 1.5Zm12.121 6.998a1.5 1.5 0 1 0 2.597 1.5 1.5 1.5 0 0 0-2.597-1.5ZM11.401 10.5 19 8.5m-8.687 3.874 1.093 3.563"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
NodeGraph.displayName = 'NodeGraph';
