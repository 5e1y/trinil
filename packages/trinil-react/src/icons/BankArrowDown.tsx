import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BankArrowDown: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 17V8.5m0 8.5H9m3 0h1.1M12 8.5H9m3 0h3m3 0h.5a1 1 0 0 0 1-1v-.232a1 1 0 0 0-.742-.966l-6.5-1.733a1 1 0 0 0-.516 0l-6.5 1.733a1 1 0 0 0-.742.966V7.5a1 1 0 0 0 1 1H6m12 0h-3m3 0V13M6 8.5V17m0-8.5h3M6 17h-.382a1 1 0 0 0-.894.553l-.681 1.362a.404.404 0 0 0 .362.585h8.824M6 17h3m0-8.5V17m6-8.5V14m3-1a5 5 0 1 1-4.771 6.5M18 13a4.98 4.98 0 0 0-3 1m3 1.5v5m0 0-2-2m2 2 2-2M13.1 17a5 5 0 0 0 .129 2.5M13.1 17a5 5 0 0 1 1.9-3"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BankArrowDown.displayName = 'BankArrowDown';
