import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const RenderRegion: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.75 9.75 12 6 5.113 9.75m13.637 0L12 13.5m6.75-3.75v4.5M12 13.5 5.113 9.75M12 13.5v.75m-6.887-4.5v4.5m13.637 0H12m6.75 0h1.5a1.5 1.5 0 0 0 1.5-1.5V4.5a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v8.25a1.5 1.5 0 0 0 1.5 1.5h1.363m13.637 0V15M12 14.25H5.113m6.887 0V15m-6.887-.75V15M12 17.868v.366m4.219 1.172-.422.235M18.75 18l-.422.234m-4.64 2.578-.422.235m-2.557 0-.43-.235m-2.153-1.171-.43-.235m-2.153-1.172L5.113 18"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
RenderRegion.displayName = 'RenderRegion';
