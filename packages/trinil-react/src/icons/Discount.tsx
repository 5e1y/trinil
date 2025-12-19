import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Discount: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m16 8-8 8m.56-11.745-.522-.074a2 2 0 0 0-2.25 1.635l-.091.519a2 2 0 0 1-1.033 1.42l-.465.248a2 2 0 0 0-.86 2.645l.232.474a2 2 0 0 1 0 1.756l-.232.474a2 2 0 0 0 .86 2.645l.465.247a2 2 0 0 1 1.033 1.421l.09.52a2 2 0 0 0 2.25 1.634l.523-.074a2 2 0 0 1 1.67.543l.38.367a2 2 0 0 0 2.78 0l.38-.367a2 2 0 0 1 1.67-.543l.522.074a2 2 0 0 0 2.25-1.634l.091-.52a2 2 0 0 1 1.033-1.42l.465-.248a2 2 0 0 0 .86-2.645l-.232-.474a2 2 0 0 1 0-1.756l.232-.474a2 2 0 0 0-.86-2.645l-.465-.247a2 2 0 0 1-1.033-1.421l-.09-.52a2 2 0 0 0-2.25-1.634l-.523.074a2 2 0 0 1-1.67-.543l-.38-.367a2 2 0 0 0-2.78 0l-.38.367a2 2 0 0 1-1.67.543ZM9 7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Discount.displayName = 'Discount';
