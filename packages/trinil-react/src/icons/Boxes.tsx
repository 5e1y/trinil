import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Boxes: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 13V8m0 5-4.5-2m4.5 2 4.5-2M12 13v5m0-5 4.5 2M12 13l-4.5 2M12 8 7.679 6.08M12 8l4.321-1.92M7.5 11V6.65a1 1 0 0 1 .179-.57M7.5 11l-3.906 1.736a1 1 0 0 0-.415.343M16.5 11V6.65a1 1 0 0 0-.179-.57M16.5 11l3.906 1.737c.171.076.313.196.415.343M12 18l4.094 1.82c.13.058.268.087.406.087M12 18l-4.094 1.82a1 1 0 0 1-.406.086m9-4.906v4.906m0-4.906 4.321-1.92M7.5 15v4.906M7.5 15l-4.321-1.92M7.5 19.905a1 1 0 0 1-.406-.087l-3.5-1.555A1 1 0 0 1 3 17.35v-3.7a1 1 0 0 1 .179-.57M16.5 19.905a1 1 0 0 0 .406-.087l3.5-1.555A1 1 0 0 0 21 17.35v-3.7a1 1 0 0 0-.179-.57m-13.142-7a1 1 0 0 1 .415-.344l3.5-1.556a1 1 0 0 1 .812 0l3.5 1.556a1 1 0 0 1 .415.343"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Boxes.displayName = 'Boxes';
