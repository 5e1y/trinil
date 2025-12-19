import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const HeartMedicalSearch: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M6.807 10.018a5.95 5.95 0 0 0-.443 5l.79 2.215a5.676 5.676 0 0 0 6.724 3.598m-7.07-10.813C5.356 9 4 9 4 9m2.807 1.018c.344-.6.79-1.138 1.317-1.59m0 0a3.5 3.5 0 0 1-.113-.645m.113.646c.731 2.663 3.63 0 5.5-2.032.262-.285.545-.537.84-.758M8.012 7.783a3.484 3.484 0 0 1 .619-2.287m-.619 2.287C5.921 6.5 4.001 6.5 4.001 6.5m11.895 1.247C15.106 8.413 14.5 9.5 15 11.5l.072.179c.266.667.363 1.375.298 2.068m.526-6C17.375 6.5 19 6.5 19 6.5m-3.104 1.247a6.03 6.03 0 0 1 3.094 5.351m-4.525-7.459C16.65 4 19 4 19 4m-4.535 1.64a3.5 3.5 0 0 0-1.775-1.432m-2.392.004c.374-.137.78-.212 1.202-.212.418 0 .819.073 1.19.208m-2.392.004A3.5 3.5 0 0 0 8.63 5.496m1.668-1.284L9.68 2.5m3.01 1.708.627-1.708M8.63 5.496 7 4.351m11.99 8.747a5.02 5.02 0 0 0-3.62.649m3.62-.649A5.002 5.002 0 0 1 18 23c-1.71 0-3.22-.86-4.122-2.17m0 0A4.98 4.98 0 0 1 13 18c0-1.797.948-3.372 2.37-4.253m3.544 5.167a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.828 2.828Zm0 0L20 20"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

HeartMedicalSearch.displayName = 'HeartMedicalSearch';
