import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FlowerSunflower: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.568 5.8c.93-1.113 2.688-1.271 3.796-.164s.95 2.866-.165 3.796m-3.631-3.631C14.698 4.355 13.566 3 12 3S9.302 4.355 9.432 5.8m5.136 0-.654 1.58M9.432 18.2c-.93 1.113-2.689 1.271-3.796.164-1.107-1.108-.95-2.866.165-3.796m3.631 3.631C9.302 19.644 10.434 21 12 21s2.698-1.355 2.568-2.8m-5.136 0 .654-1.58m8.113-2.052c1.114.93 1.272 2.688.165 3.796-1.108 1.107-2.866.95-3.796-.165m3.631-3.631C19.644 14.698 21 13.566 21 12s-1.355-2.698-2.8-2.568m0 5.136-1.58-.654M5.8 9.432c-1.113-.93-1.271-2.689-.164-3.796s2.866-.95 3.796.165M5.801 9.432C4.355 9.302 3 10.434 3 12s1.355 2.698 2.8 2.568m0-5.136 1.58.654m7.188 8.113-.654-1.578m4.285-7.189-1.578.654M9.432 5.801l.654 1.578m-4.285 7.189 1.578-.654m9.242-3.828c.244.59.379 1.236.379 1.914s-.135 1.324-.38 1.914m0-3.828a5.02 5.02 0 0 0-2.706-2.707m0 0A5 5 0 0 0 12 7c-.678 0-1.324.135-1.914.38m0 0a5.02 5.02 0 0 0-2.707 2.706m0 0A5 5 0 0 0 7 12c0 .678.135 1.324.38 1.914m0 0a5.02 5.02 0 0 0 2.706 2.707m0 0c.59.244 1.236.379 1.914.379s1.324-.135 1.914-.38m0 0a5.02 5.02 0 0 0 2.707-2.706"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FlowerSunflower.displayName = 'FlowerSunflower';
