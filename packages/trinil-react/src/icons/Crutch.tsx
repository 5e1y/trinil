import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Crutch: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.25 8.25H3.75m16.5 0a1.5 1.5 0 0 0 0-3H8.844c-.38 0-.745-.151-1.014-.42l-.64-.64a1.5 1.5 0 0 0-1.061-.44H3.75a1.5 1.5 0 0 0-1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5m16.5 0L12 13.357M3.75 8.25 12 13.357m5.587 3.459L12 13.357m5.587 3.459a2.25 2.25 0 1 0 3.827 2.369 2.25 2.25 0 0 0-3.827-2.37M12 13.357l-5.587 3.459m0 0a2.25 2.25 0 1 1-3.827 2.369 2.25 2.25 0 0 1 3.827-2.37"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Crutch.displayName = 'Crutch';
