import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PerspectiveView: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m3.857 14-.82 2.873a.1.1 0 0 0 .096.127H7.5m-3.643-3H7.93m-4.072 0 .714-2.5M20.143 14l.82 2.873a.1.1 0 0 1-.096.127H16.5m3.643-3H16.07m4.072 0-.714-2.5M7.929 14H12m-4.071 0 .357-2.5M7.929 14 7.5 17m4.5-3h4.071M12 14v-2.5m0 2.5v3m4.071-3-.357-2.5m.357 2.5.429 3m2.929-5.5h-3.715m3.715 0L18.714 9M4.571 11.5h3.715m-3.715 0L5.286 9m10.428 2.5H12m3.714 0L15.357 9M12 11.5H8.286m3.714 0V9m-3.714 2.5L8.643 9M5.286 9h3.357M5.286 9l.693-2.427a.1.1 0 0 1 .096-.073h11.85a.1.1 0 0 1 .096.072L18.714 9m0 0h-3.357M8.643 9H12M8.643 9 9 6.5M12 9h3.357M12 9V6.5M15.357 9 15 6.5M12 17h4.5M12 17H7.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

PerspectiveView.displayName = 'PerspectiveView';
