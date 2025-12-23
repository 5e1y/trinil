import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Radio: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 0v9.5m2.5-7.669a5 5 0 0 0 2.5-4.33 5 5 0 0 0-2.5-4.332m-5 8.662A5 5 0 0 1 7 9.501a5 5 0 0 1 2.5-4.332m6.258-2.16A7.5 7.5 0 0 1 19.5 9.5a7.5 7.5 0 0 1-3.742 6.492m-7.516 0A7.5 7.5 0 0 1 4.5 9.5a7.5 7.5 0 0 1 3.742-6.492"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Radio.displayName = 'Radio';
