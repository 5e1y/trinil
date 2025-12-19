import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PiggyBank: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M5 11.5a2.162 2.162 0 0 1-2.051-2.846L3 8.5m2 3c0-2.416 1-6 7.5-6 .76 0 1.519.07 2.242.207.17.032.344.024.509-.027l3.343-1.052a.312.312 0 0 1 .372.439l-.578 1.144c-.223.443-.074.971.25 1.345.401.46.68 1.029.798 1.698.073.407.4.746.814.746a.75.75 0 0 1 .75.75v3.188c0 .31-.251.562-.561.562a.63.63 0 0 0-.576.416c-.183.478-.564 1.26-1.227 1.75-.346.256-.636.624-.636 1.055V18a1 1 0 0 1-1 1h-2.25a.75.75 0 0 1-.75-.75.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75.75.75 0 0 1-.75.75H8a1 1 0 0 1-1-1v-.5a1.1 1.1 0 0 0-.39-.814C5 15.286 5 13.826 5 11.5ZM10 8a6.73 6.73 0 0 1 5 0"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

PiggyBank.displayName = 'PiggyBank';
