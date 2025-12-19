import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const HourglassEnd: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M5 4v1.324a5 5 0 0 0 2.226 4.16l1.278.852a2 2 0 0 1 0 3.328l-1.277.852A5 5 0 0 0 5 18.676V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1.324a5 5 0 0 0-2.227-4.16l-1.277-.852a2 2 0 0 1 0-3.328l1.277-.852A5 5 0 0 0 19 5.324V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Zm11.409 15H7.225A.225.225 0 0 1 7 18.775c0-.163.108-.306.264-.35l2.257-.645a3.9 3.9 0 0 0 1.699-1l.402-.402c.7-.7 1.871-.556 2.38.293.324.54.807.965 1.383 1.218l1.265.557a.21.21 0 0 1 .123.189.365.365 0 0 1-.364.365Z" clip-rule="evenodd"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

HourglassEnd.displayName = 'HourglassEnd';
