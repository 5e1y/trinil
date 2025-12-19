import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const VideoOff: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M15 15v2a1 1 0 0 1-1 1H8m7-3V9m0 6 5.41 2.951a.4.4 0 0 0 .59-.35V6.399a.398.398 0 0 0-.59-.35L15 9m0 0V7.5M18 3l-3 4.5m0 0L8 18m0 0-2 3m-1-3H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h9"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

VideoOff.displayName = 'VideoOff';
