import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Subdivide: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 11 7.509 9.004M12 11l4.491-1.996M12 11v4.995m8.982-8.987a.1.1 0 0 0-.041-.035l-4.45-1.977m4.491 2.012a.1.1 0 0 1 .018.057V12m-.018-4.992-4.49 1.996M3.017 7.008a.1.1 0 0 1 .041-.035l4.45-1.977M3.018 7.008A.1.1 0 0 0 3 7.065V12m.018-4.992 4.49 1.996M12 20.99a.1.1 0 0 1-.04-.008l-4.45-1.978M12 20.99a.1.1 0 0 0 .04-.008l4.45-1.978M12 20.99v-4.995m4.49-11-4.45-1.977a.1.1 0 0 0-.08 0L7.51 4.996m8.98 0L12 7M7.509 9.004 11.999 7M7.51 9.004v5m0 5-4.45-1.978A.1.1 0 0 1 3 16.935V12m4.51 7.004v-5M12 7l4.491 2.004M12 7 7.51 4.996m8.981 4.008v5m0 5 4.45-1.978a.1.1 0 0 0 .059-.091V12m-4.51 7.004v-5M12 15.995l-4.49-1.991M12 15.995l4.49-1.991m0 0L21 12M7.51 14.004 3 12"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Subdivide.displayName = 'Subdivide';
