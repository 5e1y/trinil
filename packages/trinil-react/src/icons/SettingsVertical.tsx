import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SettingsVertical: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M7 2v11.5m0 0a2 2 0 1 1 0 4m0-4a2 2 0 1 0 0 4m0 0V22M17 2v4.5m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0V22"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

SettingsVertical.displayName = 'SettingsVertical';
