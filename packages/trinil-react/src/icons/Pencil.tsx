import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Pencil: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10.923 20.577v-1.77a1.5 1.5 0 0 0-1.206-1.47l-1.564-.314a1.5 1.5 0 0 1-1.177-1.176l-.312-1.564a1.5 1.5 0 0 0-1.471-1.206h-1.77m7.5 7.5L19.5 12m-8.577 8.577-3.75.625m-3.75-8.125L12 4.5m-8.577 8.577-.625 3.75M12 4.5l1.814-1.815a1.5 1.5 0 0 1 2.121 0l5.38 5.38a1.5 1.5 0 0 1 0 2.12L19.5 12M12 4.5l7.5 7.5M7.173 21.202l-4.375-4.375m4.375 4.375-3.179.53a1.5 1.5 0 0 1-1.726-1.726l.53-3.179"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Pencil.displayName = 'Pencil';
