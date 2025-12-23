import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BoxReturn: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.5 12a9.5 9.5 0 1 0 1.873-5.664m0 0L4 3m.373 3.336h3.35M14.5 7.885l1.985 1.099a1 1 0 0 1 .374.363M14.5 7.885l-2.015-1.117a1 1 0 0 0-.97 0l-4 2.216a1 1 0 0 0-.374.363M14.5 7.885l-5 2.769m0 0 2.5 1.385m-2.5-1.385L7.14 9.347M12 12.04l4.86-2.692M12 12.04v5.356M7.14 9.347A1 1 0 0 0 7 9.86v4.32a1 1 0 0 0 .516.876l4 2.215a1 1 0 0 0 .484.125m4.86-8.048a1 1 0 0 1 .14.512v4.32a1 1 0 0 1-.515.876l-4 2.215a1 1 0 0 1-.485.125"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BoxReturn.displayName = 'BoxReturn';
