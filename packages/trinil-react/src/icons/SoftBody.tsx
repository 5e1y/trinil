import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SoftBody: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M5.5 16.323c1.4.422 3.486.793 6.5.793s5.1-.371 6.5-.793M12 3.5V8m0 0-2-2m2 2 2-2M3.39 17.908c.863.555 3.295 1.708 8.61 1.708s7.747-1.153 8.61-1.708c.26-.167.368-.471.33-.778l-.765-6.112c-.085-.684-.85-1.142-1.523-.988-1.205.275-3.307.586-6.652.586s-5.447-.311-6.652-.586c-.673-.154-1.438.304-1.523.988L3.06 17.13c-.039.307.069.61.328.778Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

SoftBody.displayName = 'SoftBody';
