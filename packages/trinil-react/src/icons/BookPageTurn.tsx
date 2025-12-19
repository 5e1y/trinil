import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BookPageTurn: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m12 20 .413-.184a9.48 9.48 0 0 1 8.001.142.404.404 0 0 0 .586-.362V7.48a.74.74 0 0 0-.439-.675A10 10 0 0 0 16 5.955M12 20l-.413-.184a9.48 9.48 0 0 0-8.001.142.405.405 0 0 1-.586-.362V7.48c0-.292.172-.556.439-.675a10 10 0 0 1 8.122 0L12 7m0 13V7m0 13 3.707-3.707a1 1 0 0 0 .293-.707v-9.63M12 7l3.397-3.883a.344.344 0 0 1 .603.227v2.612"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BookPageTurn.displayName = 'BookPageTurn';
