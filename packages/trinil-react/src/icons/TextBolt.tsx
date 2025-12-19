import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TextBolt: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M13.5 20H7.1a.1.1 0 0 1-.1-.1V4.6a.1.1 0 0 1 .1-.1H13a4 4 0 0 1 1.866 7.54c-.083.043-.074.172.013.204A4.002 4.002 0 0 1 13.5 20Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

TextBolt.displayName = 'TextBolt';
