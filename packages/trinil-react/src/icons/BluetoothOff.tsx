import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BluetoothOff: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m12 12 3.93-3.93a.1.1 0 0 0 0-.14l-.73-.73M12 12l3.93 3.93a.1.1 0 0 1 0 .14l-3.76 3.76a.1.1 0 0 1-.17-.071zm0 0 3.2-4.8M12 12l-5.667 8.5M15.2 7.2l2.467-3.7M10 10 7.5 7.5m4.5 0V4.241a.1.1 0 0 1 .17-.07L13 5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BluetoothOff.displayName = 'BluetoothOff';
