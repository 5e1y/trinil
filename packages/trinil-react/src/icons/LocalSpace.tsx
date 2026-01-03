import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LocalSpace: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m12 15-6.75-4.5M12 15l6.75-4.5M12 15v6M5.25 10.5 12 6m-6.75 4.5v6l1.059.706M12 6l6.75 4.5M12 6v4.5M12 6V2.25m6.75 8.25v6l-1.059.706M12 21l5.691-3.794M12 21l-5.691-3.794m11.382 0L15.75 15.75m1.941 1.456 4.059 3.044M6.309 17.206 8.25 15.75m-1.941 1.456L2.25 20.25m19.5 0L21.423 18m.327 2.25-2.25.376M2.25 20.25 2.577 18m-.327 2.25 2.25.376M12 2.25l1.5 1.5M12 2.25l-1.5 1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LocalSpace.displayName = 'LocalSpace';
