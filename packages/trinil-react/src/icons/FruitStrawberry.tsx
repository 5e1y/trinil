import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FruitStrawberry: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m9 11-.5 1.5M15 11l.5 1.5M10.037 15l.5 1.5m3.5-1.5-.5 1.5M9.822 5.088 7.646 6.177C3 8.5 3.977 12.373 6.041 14.85l4.422 5.306a2 2 0 0 0 3.073 0l4.423-5.306c2.064-2.477 3.04-6.35-1.606-8.673l-2.176-1.089m-4.354 0-2.12 3.114a.436.436 0 0 0 .59.614l3.177-1.985a1 1 0 0 1 1.06 0l3.176 1.985a.436.436 0 0 0 .591-.614l-2.12-3.114m-4.354 0-.666-1.284a.467.467 0 0 1 .656-.616l1.672 1.003a1 1 0 0 0 1.03 0l1.672-1.003a.468.468 0 0 1 .656.616l-.666 1.284M12 11.5V13"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FruitStrawberry.displayName = 'FruitStrawberry';
