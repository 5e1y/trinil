import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const StomachSearch: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M11.5 3.5v1.257a3 3 0 0 0 .879 2.122c.606.606.522 1.619-.25 1.99a9.5 9.5 0 0 1-4.611.922l-.316-.017c-2.601-.137-4.605 2.262-4.009 4.797l.085.358c.16.68.481 1.29.92 1.792.182.21.302.47.302.749v3.03m10-17v.672a2 2 0 0 0 .586 1.414c.548.548 1.353.713 2.124.782a3.6 3.6 0 0 1 2.653 1.545l.241.349c1.076 1.554.89 3.667-.403 5.035M7.518 20.5v-1.297c0-.566.47-1.017 1.036-1.033a16.2 16.2 0 0 0 4.482-.774M23 18a5 5 0 0 1-10 0m10 0a5 5 0 0 0-3.3-4.703M23 18a5 5 0 0 0-5-5m-5 5q0-.306.036-.604M13 18a5 5 0 0 1 5-5m-4.964 4.397A5 5 0 0 1 18 13m0 0c.597 0 1.17.105 1.7.297m-.786 5.617a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.828 2.828Zm0 0L20 20"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

StomachSearch.displayName = 'StomachSearch';
