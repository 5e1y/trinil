import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Import3d: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M14 3.09V7a1 1 0 0 0 1 1h3.91M14 3.09a1 1 0 0 0-.414-.09H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8m0-17.91a1 1 0 0 1 .293.203l4.414 4.414A1 1 0 0 1 18.91 8m0 0a1 1 0 0 1 .09.414V13.1m-7 1.4 3.984-1.992M12 14.5l-3.984-1.992M12 14.5v3.988m3.984-5.98a.1.1 0 0 0-.04-.036l-3.9-1.95a.1.1 0 0 0-.089 0l-3.9 1.95a.1.1 0 0 0-.04.036m7.97 0a.1.1 0 0 1 .015.054v.854m-7.984-.908a.1.1 0 0 0-.016.054v3.876a.1.1 0 0 0 .055.09l3.9 1.95a.1.1 0 0 0 .045.01m0 0a.1.1 0 0 0 .045-.01L13 18m5-2.5v5m0 0-2-2m2 2 2-2m-7-.5a5 5 0 0 1 3-4.584M13 18c0 1.126.372 2.164 1 3m2-7.584a5.022 5.022 0 0 1 3-.316m0 0a5.002 5.002 0 0 1-1 9.9 5 5 0 0 1-4-2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Import3d.displayName = 'Import3d';
