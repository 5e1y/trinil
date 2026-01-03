import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Contract: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 9.75H9M7.5 13.5h9M7.5 6H9m.75 12.75s-.299-.976.75-1.5c1.5-.75 2.25 1.5 2.25 1.5s.499-.75 1.5-.75c.944 0 1.5.75 1.5.75.45-.65.765-.93 1.5-1.226m3-7.774v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V3.75a1.5 1.5 0 0 1 1.5-1.5h7.5m7.5 7.5h-6a1.5 1.5 0 0 1-1.5-1.5v-6m7.5 7.5-7.5-7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Contract.displayName = 'Contract';
