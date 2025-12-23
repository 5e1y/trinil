import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Tooth: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M13.533 3.41c2.62-1.448 5.57 1.167 4.86 4.308l-1.105 3.369a18.7 18.7 0 0 0-.886 4.605l-.215 3.3c-.13.938-1.32 1.03-1.567.121-.227-.836-1.088-2.58-1.847-3.922-.357-.63-1.189-.63-1.546 0-.732 1.295-1.606 3.443-1.801 4.954-.15 1.167-1.687 1.127-1.788-.046l-.194-3.142s-.508-3.812-.911-5.147l-.926-4.092c-.71-3.14 2.24-5.756 4.86-4.308a3.14 3.14 0 0 0 3.066 0Zm0 0c-.965.533-3.355 2.086-3.355 4.445"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Tooth.displayName = 'Tooth';
