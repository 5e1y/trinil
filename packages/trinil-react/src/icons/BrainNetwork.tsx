import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BrainNetwork: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M4.25 7.376v5.694a2 2 0 0 0 2 2h.562M4.25 7.376a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM19.75 5.5V17a2 2 0 0 1-2 2h-1.916M19.75 5.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-5.5 1.876a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm0 0v1.77M9.75 5.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 0v3.645M12 20.32c.367.417.902.681 1.5.681a2 2 0 0 0 1.938-1.505.79.79 0 0 1 .396-.495M12 20.32a2 2 0 0 1-3.438-.824.79.79 0 0 0-.557-.558 2 2 0 0 1-1.193-3.008.82.82 0 0 0 0-.86M12 20.32V9.68m-5.188 5.39A2 2 0 0 1 8.5 12c.115 0 .2-.126.155-.232A2 2 0 0 1 9.75 9.145M12 9.68a1.99 1.99 0 0 0-2.25-.535M12 9.68a1.99 1.99 0 0 1 2.25-.535M15.834 19a.7.7 0 0 1 .16-.062 2 2 0 0 0 1.194-3.008.82.82 0 0 1 0-.86A2 2 0 0 0 15.5 12c-.115 0-.2-.126-.155-.232a2 2 0 0 0-1.095-2.623"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BrainNetwork.displayName = 'BrainNetwork';
