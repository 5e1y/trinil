import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BoxExpedition: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M2.5 8.5h3m-3 3.5h2m-2 3.5h1m7.75-5.25L14.5 12m-3.25-1.75 6.5-3.5m-6.5 3.5L8.145 8.578M14.5 12l6.355-3.422M14.5 12v6.864M17.75 6.75l-2.776-1.495a1 1 0 0 0-.948 0l-5.5 2.962a1 1 0 0 0-.38.361M17.75 6.75l2.724 1.467a1 1 0 0 1 .38.361m0 0a1 1 0 0 1 .146.52v5.805a1 1 0 0 1-.526.88l-5.5 2.962a1 1 0 0 1-.474.12M8.145 8.577a1 1 0 0 0-.145.52v5.805a1 1 0 0 0 .526.88l5.5 2.962a1 1 0 0 0 .474.12"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BoxExpedition.displayName = 'BoxExpedition';
