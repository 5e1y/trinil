import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Recycle: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7 18H4.766a1 1 0 0 1-.857-1.514l4.716-7.86m0 0-3.978.994m3.978-.995.994 3.978m8.006-.228.994-3.977m-.994 3.977-3.977-.994m3.977.994L12.857 4.43a1 1 0 0 0-1.715 0L10.2 6l-.2.333M9.75 18h9.484a1 1 0 0 0 .857-1.514l-.966-1.61M9.75 18l2.983 2.983M9.75 18l2.983-2.983"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Recycle.displayName = 'Recycle';
