import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const RenderRegion: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M18.5 9.5V16m0-6.5-6.47-1.99a.1.1 0 0 0-.06 0L5.5 9.5m13 0-6.5 2m-6.5-2V16m0-6.5 6.5 2m0 0V16m0 0v1.125M12 16h6.5M12 16H5.5m13 0h2.4a.1.1 0 0 0 .1-.1V4.6a.1.1 0 0 0-.1-.1H3.1a.1.1 0 0 0-.1.1v11.3a.1.1 0 0 0 .1.1h2.4m.813 2.75-.742-.228a.1.1 0 0 1-.071-.096v-.488m5.688 2.312.783.241q.015.004.029.004m.813-.245-.784.241a.1.1 0 0 1-.029.004m5.688-1.745.741-.228a.1.1 0 0 0 .071-.096v-.488M8.14 19.313l1.22.375m5.28 0 1.22-.375m-3.86.062v1.12"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

RenderRegion.displayName = 'RenderRegion';
