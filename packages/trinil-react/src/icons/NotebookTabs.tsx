import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const NotebookTabs: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M6 18v1a2 2 0 0 0 2 2h8M6 18v-3m0 3H4.5M6 18h1.5M6 15v-3m0 3H4.5M6 15h1.5M6 12V9m0 3h1.5M6 12H4.5M6 9V6m0 3H4.5M6 9h1.5M6 6V5a2 2 0 0 1 2-2h8M6 6h1.5M6 6H4.5M16 3h1a2 2 0 0 1 2 2v1m-3-3v3m0 15h1a2 2 0 0 0 2-2v-1m-3 3v-3m0-12h3m-3 0v3m3-3v3m-3 0h3m-3 0v3m3-3v3m-3 0h3m-3 0v3m3-3v3m-3 0h3m-3 0v3m3-3v3m-3 0h3"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

NotebookTabs.displayName = 'NotebookTabs';
