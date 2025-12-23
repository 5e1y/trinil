import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Peace: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 13 5.156 6.156M12 13l6.844-6.844M12 13v8M5.156 6.156A8.98 8.98 0 0 1 12 3a8.98 8.98 0 0 1 6.844 3.156m-13.688 0A9 9 0 0 0 12 21m6.844-14.844A9 9 0 0 1 12 21"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Peace.displayName = 'Peace';
