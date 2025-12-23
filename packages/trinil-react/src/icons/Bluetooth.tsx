import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bluetooth: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m12 12 3.93-3.93a.1.1 0 0 0 0-.14l-3.76-3.76a.1.1 0 0 0-.17.071zm0 0-4.5 4.5M12 12l3.93 3.93a.1.1 0 0 1 0 .14l-3.76 3.76a.1.1 0 0 1-.17-.071zm0 0L7.5 7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bluetooth.displayName = 'Bluetooth';
