import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CloudDownload: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M6.03 10.556C4.36 11.082 3 12.586 3 14.68A4.32 4.32 0 0 0 7.32 19h5.78m-7.07-8.444a5 5 0 1 1 9.954-.155m-9.953.155A4.4 4.4 0 0 1 8 10.399a4.17 4.17 0 0 1 2 .884m5.984-.882c2.216-.345 4.57 1.1 4.96 3.557m-4.96-3.557a4.17 4.17 0 0 0-1.984.882m4 4.217v5m0 0 2-2m-2 2-2.016-2m4.96-4.542A5 5 0 0 0 13.1 19m7.844-5.042A5 5 0 1 1 13.1 19"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

CloudDownload.displayName = 'CloudDownload';
