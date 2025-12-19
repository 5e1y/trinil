import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const JoysticClassic: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M13 8.83a3 3 0 0 0 1-.594 3 3 0 1 0-3 .593m2 0a3 3 0 0 1-2 0m2 0V10.5m-2-1.67v1.67m2 0v3.141c0 .266-.099.536-.34.649a1.62 1.62 0 0 1-1.32 0c-.241-.113-.34-.383-.34-.649V10.5m2 0 7.406 3.292a1 1 0 0 1 .386.303M11 10.5l-7.406 3.292a1 1 0 0 0-.386.303M12 20.905a1 1 0 0 1-.406-.085l-8-3.556A1 1 0 0 1 3 16.35v-1.645a1 1 0 0 1 .208-.61M12 20.905a1 1 0 0 0 .406-.085l8-3.556A1 1 0 0 0 21 16.35v-1.645a1 1 0 0 0-.208-.61M12 20.905v-2.85m0 0-8.792-3.96M12 18.055l8.792-3.96"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

JoysticClassic.displayName = 'JoysticClassic';
