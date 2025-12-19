import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LoopCut: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m12 11 8.982-3.992M12 11v9.99M12 11 7.509 9.004m13.473-1.996a.1.1 0 0 0-.041-.035l-4.45-1.977m4.491 2.012a.1.1 0 0 1 .018.057v9.87a.1.1 0 0 1-.06.091l-8.9 3.956a.1.1 0 0 1-.04.008M3.018 7.008a.1.1 0 0 1 .041-.035l8.9-3.955a.1.1 0 0 1 .082 0l4.45 1.978M3.018 7.008A.1.1 0 0 0 3 7.065v9.87a.1.1 0 0 0 .06.091l4.45 1.978M3.017 7.008l4.49 1.996M12 20.99a.1.1 0 0 1-.04-.008l-4.45-1.978m8.98-14.008L7.51 9.004m0 0v10"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LoopCut.displayName = 'LoopCut';
