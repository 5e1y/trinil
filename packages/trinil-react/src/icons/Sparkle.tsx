import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Sparkle: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m10.124 4.721-.528-1.878c-.027-.097-.165-.097-.192 0l-.528 1.878a6 6 0 0 1-4.155 4.155l-1.878.528c-.097.027-.097.165 0 .192l1.878.528a6 6 0 0 1 4.155 4.155l.528 1.878c.027.097.165.097.192 0l.528-1.878a6 6 0 0 1 4.155-4.155l1.878-.528c.097-.027.097-.165 0-.192l-1.878-.528a6 6 0 0 1-4.155-4.155ZM17.88 14.35l-.284-1.007c-.027-.097-.165-.097-.192 0l-.283 1.008a4 4 0 0 1-2.77 2.77l-1.008.283c-.097.027-.097.165 0 .192l1.008.283a4 4 0 0 1 2.77 2.77l.283 1.008c.027.097.165.097.192 0l.283-1.008a4 4 0 0 1 2.77-2.77l1.008-.283c.097-.027.097-.165 0-.192l-1.008-.283a4 4 0 0 1-2.77-2.77Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Sparkle.displayName = 'Sparkle';
