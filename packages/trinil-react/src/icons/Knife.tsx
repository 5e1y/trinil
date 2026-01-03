import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Knife: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M20.802 7.616a1.5 1.5 0 0 1 .198.746v7.277a1.5 1.5 0 0 1-.744 1.295l-7.5 4.375a1.5 1.5 0 0 1-.756.204m8.802-13.897a1.5 1.5 0 0 0-.546-.55L14.25 3.563m6.552 4.053L12 12.75M3.199 7.616a1.5 1.5 0 0 1 .545-.55l7.5-4.375a1.5 1.5 0 0 1 1.512 0l1.494.872M3.199 7.616c-.128.223-.199.48-.199.746v7.277a1.5 1.5 0 0 0 .744 1.295L8.47 19.69M3.2 7.617l6.941 4.05M12 21.513c-.261 0-.522-.069-.756-.205L8.47 19.69M12 21.514V12.75m0 0-1.86-1.085m4.11-8.102-4.11 8.102m0 0L6 13.5l2.47 6.19"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Knife.displayName = 'Knife';
