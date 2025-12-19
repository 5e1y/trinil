import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Gcode: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M14 3.09V7a1 1 0 0 0 1 1h3.91M14 3.09a1 1 0 0 0-.414-.09H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.414A1 1 0 0 0 18.91 8M14 3.09a1 1 0 0 1 .293.203l4.414 4.414A1 1 0 0 1 18.91 8M9.5 15h-.526c-.814 0-1.474.66-1.474 1.474V17.5A1.5 1.5 0 0 0 9 19h.5s.5 0 .5-1-.5-1-.5-1m5-2-.5 4m2-2.5.93.93a.1.1 0 0 1 0 .14l-.93.93M12.5 15l-.93.93a.1.1 0 0 0 0 .14l.93.93"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Gcode.displayName = 'Gcode';
