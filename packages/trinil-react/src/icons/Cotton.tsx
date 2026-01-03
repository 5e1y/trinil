import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cotton: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M17.203 6.797a5.251 5.251 0 0 1 2.518 9.35m-2.518-9.35a5.23 5.23 0 0 0-2.953.459m2.953-.46a5.251 5.251 0 0 0-10.406 0m0 0a5.251 5.251 0 0 0-2.518 9.35m2.518-9.35q.345-.046.703-.046a5.2 5.2 0 0 1 2.25.505m-.633 7.51a5.87 5.87 0 0 0-4.58-.477 6 6 0 0 0-.258 1.858m4.838-1.381A5.87 5.87 0 0 1 12 11.25a5.87 5.87 0 0 1 2.883 3.515m-5.766 0c-.757 2.532.185 5.496 2.825 6.953m0 0 .058.032.058-.032m-.116 0 .02-.006m-.02.006c-3.91 1.16-7.588-1.821-7.663-5.572m10.604-1.381a5.87 5.87 0 0 1 4.58-.477c.188.63.27 1.254.258 1.858m-4.838-1.381c.757 2.532-.185 5.496-2.825 6.953m0 0-.02-.006m.02.006c3.91 1.16 7.588-1.821 7.663-5.572"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cotton.displayName = 'Cotton';
