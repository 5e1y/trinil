import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cone: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 21c4.97 0 9-1.79 9-4 0-.383-.121-.754-.348-1.105L12.083 3.124a.1.1 0 0 0-.166 0l-8.569 12.77A2.02 2.02 0 0 0 3 17c0 2.21 4.03 4 9 4Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cone.displayName = 'Cone';
