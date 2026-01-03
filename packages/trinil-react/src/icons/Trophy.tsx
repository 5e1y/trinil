import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Trophy: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6.75 3.812V2.25h10.5v1.562m-10.5 0V10.5c0 .803.18 1.563.502 2.243m-.502-8.93a4.501 4.501 0 0 0 .502 8.93m9.998-8.93V10.5a5.2 5.2 0 0 1-.502 2.243m.502-8.93a4.501 4.501 0 0 1-.502 8.93M12 15.75v6m0-6a5.25 5.25 0 0 0 4.748-3.007M12 15.75a5.25 5.25 0 0 1-4.748-3.007M12 21.75h5.25m-5.25 0H6.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Trophy.displayName = 'Trophy';
