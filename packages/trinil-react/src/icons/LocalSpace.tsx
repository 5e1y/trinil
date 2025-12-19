import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LocalSpace: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M3.018 16.711 2.5 18.643m0 0 1.932.517M2.5 18.644l3.5-2M8 15.5l-2 1.143m0 0v-5.569a1 1 0 0 1 .125-.484M6 16.643v.281a1 1 0 0 0 .498.865l5 2.904a1 1 0 0 0 .502.135m8.982-4.117.518 1.932m0 0-1.932.517m1.932-.517-3.5-2M16 15.5l2 1.143m0 0v.281a1 1 0 0 1-.498.865l-4.999 2.904a1 1 0 0 1-.503.135m6-4.185v-5.569a1 1 0 0 0-.125-.484M12 3l-1.5 1.5M12 3l1.5 1.5M12 3v7m0 4-3-1.75-2.875-1.66M12 14l3-1.75 2.875-1.66M12 14v6.828M6.125 10.59a1 1 0 0 1 .371-.38l5-2.916a1 1 0 0 1 1.008 0l5 2.917a1 1 0 0 1 .37.38"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LocalSpace.displayName = 'LocalSpace';
