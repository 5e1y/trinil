import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FruitCherry: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 15c3.5-3 4-5 5.031-11.407M7.501 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.03-11.407C12.502 10 15.002 11.5 17.5 13m-4.969-9.407c-.61 3.087-4.87 5.57-7.872 4.62a.096.096 0 0 1-.065-.113c.678-3.076 4.959-5.522 7.937-4.507ZM17.5 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FruitCherry.displayName = 'FruitCherry';
