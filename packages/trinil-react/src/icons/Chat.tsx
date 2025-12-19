import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Chat: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M16.924 13.221c.674.405 1.563.718 2.723.771a.34.34 0 0 0 .353-.346.4.4 0 0 0-.1-.253c-.9-1.018-.9-2.734-.9-2.734 0-.12.064-.23.165-.295A4 4 0 0 0 17 3h-6a4 4 0 0 0-2.646 7m8.57 3.221Q17 13.6 17 14a4 4 0 0 1-4 4H9.72c-.43 0-.815.276-1.04.643-.521.843-1.761 2.231-4.326 2.349A.34.34 0 0 1 4 20.646c0-.093.038-.183.1-.253.9-1.018.9-2.734.9-2.734 0-.12-.065-.23-.165-.295A4 4 0 0 1 7 10h1.354m8.57 3.221A4 4 0 0 0 13 10H8.354"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Chat.displayName = 'Chat';
