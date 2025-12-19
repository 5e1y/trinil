import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Message: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M9 4.5h6a6 6 0 0 1 0 12h-3.28c-.43 0-.815.276-1.04.643-.521.843-1.761 2.231-4.326 2.349A.34.34 0 0 1 6 19.146c0-.093.038-.183.1-.253.53-.6.748-1.44.837-2.031.064-.419-.208-.79-.588-.978A6 6 0 0 1 9 4.5Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Message.displayName = 'Message';
