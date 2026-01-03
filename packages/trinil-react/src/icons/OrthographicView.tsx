import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const OrthographicView: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9 21H4.5A1.5 1.5 0 0 1 3 19.5V15m6 6v-6m0 6h6M9 3H4.5A1.5 1.5 0 0 0 3 4.5V9m6-6v6m0-6h6M9 15V9m0 6h6m-6 0H3m6-6H3m6 0h6m0-6h4.5A1.5 1.5 0 0 1 21 4.5V9m-6-6v6m0 12h4.5a1.5 1.5 0 0 0 1.5-1.5V15m-6 6v-6m0-6v6m0-6h6m-6 6h6m0 0V9M3 15V9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
OrthographicView.displayName = 'OrthographicView';
