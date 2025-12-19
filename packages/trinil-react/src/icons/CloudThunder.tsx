import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CloudThunder: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12.535 9a4.01 4.01 0 0 1 2.375-1.85M10 7.535a4.012 4.012 0 0 0-2.899-.434m7.809.05Q15.43 7 16 7a4 4 0 0 1 0 8h-1.5m.41-7.85A4.001 4.001 0 0 0 7.1 7.101m0 0A4.002 4.002 0 0 0 8 15h1.5m0 0-.945 2.363a.1.1 0 0 0 .093.137h1.69a.1.1 0 0 1 .09.145L9.5 19.5m0-4.5h5m0 0-1.428 2.855a.1.1 0 0 0 .09.145h2.161a.1.1 0 0 1 .086.151L14 20.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

CloudThunder.displayName = 'CloudThunder';
