import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FlowerDaisy: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M14.568 5.8c.93-1.113 2.688-1.271 3.796-.164s.95 2.866-.165 3.796m-3.631-3.631C14.698 4.355 13.566 3 12 3S9.302 4.355 9.432 5.8m5.136 0-1.276 3.081M9.432 18.2c-.93 1.114-2.689 1.272-3.796.165-1.107-1.108-.95-2.866.165-3.796m3.631 3.631C9.302 19.644 10.434 21 12 21s2.698-1.355 2.568-2.8m-5.136 0 1.276-3.081m7.491-.551c1.114.93 1.272 2.688.165 3.796-1.108 1.107-2.866.95-3.796-.165m3.631-3.631C19.644 14.698 21 13.566 21 12s-1.355-2.698-2.8-2.568m0 5.136-3.081-1.276M5.8 9.432c-1.114-.93-1.272-2.689-.165-3.796s2.866-.95 3.796.165M5.801 9.432C4.355 9.302 3 10.434 3 12s1.355 2.698 2.8 2.568m0-5.136 3.081 1.276m5.687 7.491-1.276-3.08m4.907-5.687-3.08 1.276M9.432 5.801l1.276 3.08m-4.907 5.687 3.08-1.276m6.238-2.584c.165.398.256.834.256 1.292s-.091.894-.256 1.292m0-2.584a3.39 3.39 0 0 0-1.827-1.827m-4.41 1.827A3.4 3.4 0 0 0 8.624 12c0 .458.091.894.256 1.292m0-2.584a3.39 3.39 0 0 1 1.827-1.827m-1.827 4.41a3.39 3.39 0 0 0 1.827 1.828m0 0c.398.165.834.256 1.292.256s.894-.091 1.292-.256m0 0a3.39 3.39 0 0 0 1.827-1.827m-1.827-4.41A3.4 3.4 0 0 0 12 8.624c-.458 0-.894.091-1.292.256"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

FlowerDaisy.displayName = 'FlowerDaisy';
