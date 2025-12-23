import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bank: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 17V8.5m0 8.5H9m3 0h3m-3-8.5H9m3 0h3m3 0h.5a1 1 0 0 0 1-1v-.232a1 1 0 0 0-.742-.966l-6.5-1.733a1 1 0 0 0-.516 0l-6.5 1.733a1 1 0 0 0-.742.966V7.5a1 1 0 0 0 1 1H6m12 0V17m0-8.5h-3m3 8.5h.382a1 1 0 0 1 .894.553l.681 1.362a.404.404 0 0 1-.361.585H4.405a.405.405 0 0 1-.362-.585l.68-1.362A1 1 0 0 1 5.619 17H6m12 0h-3M6 8.5V17m0-8.5h3M6 17h3m0-8.5V17m6-8.5V17"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bank.displayName = 'Bank';
