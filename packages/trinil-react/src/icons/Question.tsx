import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Question: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M9 10.5V10a3 3 0 0 1 3-3h.394a2.606 2.606 0 0 1 1.446 4.774L13.5 12c-.937.625-1.5 1.374-1.5 2.5m0 2v.5m0 4a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Question.displayName = 'Question';
