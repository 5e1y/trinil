import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BluetoothPaired: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m12 12 4.875-4.875L12 2.25zm0 0-4.875 4.875M12 12l4.875 4.875L12 21.75zm0 0L7.125 7.125M20.25 12h-4.5m-12 0h4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BluetoothPaired.displayName = 'BluetoothPaired';
