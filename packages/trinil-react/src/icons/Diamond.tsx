import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Diamond: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 5H7.48a1 1 0 0 0-.44.102M12 5h4.52a1 1 0 0 1 .44.102M12 5l-3 5m3-5 3 5m-6 0h6m-6 0L7.04 5.102M9 10H3.312M9 10l2.848 9.494M15 10l1.96-4.898M15 10h5.688M15 10l-2.848 9.494M7.04 5.102a1 1 0 0 0-.341.273L3.53 9.337a1 1 0 0 0-.218.663m13.647-4.898a1 1 0 0 1 .341.273l3.17 3.962c.155.194.227.43.218.663m0 0a1 1 0 0 1-.256.63l-7.689 8.544a1 1 0 0 1-.591.32M3.312 10a1 1 0 0 0 .256.63l7.689 8.544c.161.18.372.286.591.32m0 0q.151.023.304 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Diamond.displayName = 'Diamond';
