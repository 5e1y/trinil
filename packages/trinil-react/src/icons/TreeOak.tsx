import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TreeOak: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5.527 8.26a5.25 5.25 0 1 0 6.269 8.361.2.2 0 0 1 .204-.038M5.527 8.26a4.75 4.75 0 0 1 8.207-3.74m-8.207 3.74A5.2 5.2 0 0 1 8 7.506m4 9.077c.698.27 1.457.417 2.25.417h.5a6.25 6.25 0 1 0 0-12.5h-.5q-.261 0-.516.021M12 16.583V21m0-4.417V15.5m1.734-10.979a6.2 6.2 0 0 0-2.734.89M12 15.5h1a2 2 0 0 0 2-2V13m-3 2.5V13m0 0v-1.5m0 1.5H9.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TreeOak.displayName = 'TreeOak';
