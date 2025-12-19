import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ReceiptCheck: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M8.5 7h4m3 0h-1m-6 3h4m3 0h-1m-6 3h4m3 0h-1m3.5 0a5 5 0 0 0-4.29 7.57M18 13a5 5 0 1 1-4.29 7.57M18 13V3.139a.1.1 0 0 0-.132-.095l-1.336.445a.1.1 0 0 1-.064 0l-1.436-.478a.1.1 0 0 0-.064 0l-1.436.478a.1.1 0 0 1-.064 0l-1.436-.478a.1.1 0 0 0-.064 0l-1.436.478a.1.1 0 0 1-.064 0l-1.436-.478a.1.1 0 0 0-.064 0l-1.436.478a.1.1 0 0 1-.064 0l-1.336-.445A.1.1 0 0 0 6 3.139V20.86a.1.1 0 0 0 .132.095l1.336-.445a.1.1 0 0 1 .064 0l1.436.478a.1.1 0 0 0 .064 0l1.436-.479a.1.1 0 0 1 .064 0l1.436.48a.1.1 0 0 0 .064 0l1.436-.48a.1.1 0 0 1 .064 0l.178.06M16 18l1.43 1.43a.1.1 0 0 0 .14 0L20 17"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ReceiptCheck.displayName = 'ReceiptCheck';
