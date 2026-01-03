import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Boat: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M21.75 18.75h-.129a1.5 1.5 0 0 0-1.06.44l-.622.62a1.5 1.5 0 0 1-1.06.44h-.258a1.5 1.5 0 0 1-1.06-.44l-.286-.285M2.25 19.5l.31-.31a1.5 1.5 0 0 1 1.061-.44h.258a1.5 1.5 0 0 1 1.06.44l.622.62a1.5 1.5 0 0 0 1.06.44h.258a1.5 1.5 0 0 0 1.06-.44l.622-.62a1.5 1.5 0 0 1 1.06-.44h.258a1.5 1.5 0 0 1 1.06.44l.622.62a1.5 1.5 0 0 0 1.06.44h.258a1.5 1.5 0 0 0 1.06-.44l.622-.62a1.5 1.5 0 0 1 1.06-.44h.258a1.5 1.5 0 0 1 1.06.44l.336.335M2.25 9.75H15m0 0h5.242a1.5 1.5 0 0 1 1.305 2.24l-4.272 7.535M15 9.75l-3.31-3.31A1.5 1.5 0 0 0 10.628 6H8.87a1.5 1.5 0 0 1-1.06-.44L6.439 4.19a1.5 1.5 0 0 0-1.06-.44H2.25m0 9v.75m3-.75v.75m3-.75v.75m3-.75v.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Boat.displayName = 'Boat';
