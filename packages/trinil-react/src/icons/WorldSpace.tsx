import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WorldSpace: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 20.25 21.423 18m.327 2.25-2.25.376m2.25-.376-4.091-3.068M2.25 20.25 2.577 18m-.327 2.25 2.25.376m-2.25-.376 4.091-3.068M12 2.25l1.5 1.5M12 2.25l-1.5 1.5m1.5-1.5v4.5m5.659 10.432A6.75 6.75 0 0 0 12 6.75m5.659 10.43A6.74 6.74 0 0 1 12 20.25a6.74 6.74 0 0 1-5.659-3.068m11.318 0-.955-.716M12 6.75a6.75 6.75 0 0 0-5.659 10.432M12 6.75v1.875m-5.659 8.557.955-.716"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
WorldSpace.displayName = 'WorldSpace';
