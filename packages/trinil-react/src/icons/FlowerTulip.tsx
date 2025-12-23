import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FlowerTulip: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9 19.396a7.735 7.735 0 0 0 10.697-6.361l.213-2.135q.09-.9.339-1.77l.734-2.57a.438.438 0 0 0-.422-.56c-.847.001-1.716.007-2.575.046M9 19.396a7.74 7.74 0 0 1-4.697-6.361L4.09 10.9Q4 10 3.751 9.13l-.734-2.57A.44.44 0 0 1 3.439 6c.847.001 1.716.007 2.575.046M9 19.396s5 1.989 5-7.396c0-2.156-.775-3.538-2-4.423m0 0c1.034-.746 2.388-1.14 3.867-1.347M12 7.577c-.608-.439-1.326-.755-2.116-.984a13 13 0 0 0-1.751-.363m6.743-1.315c.532-.693 1.228-1.05 1.87-.868.702.2 1.156.994 1.24 1.999m-3.11-1.131C14.149 4.351 13.129 4 12 4s-2.149.35-2.876.915m5.752 0c.467.362.814.813.991 1.315M9.124 4.915c-.532-.693-1.228-1.05-1.87-.868-.702.2-1.156.994-1.24 1.999m3.11-1.131c-.467.362-.814.813-.991 1.315m7.734 0a23 23 0 0 1 2.119-.184m-11.972 0c.72.032 1.433.088 2.119.184"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FlowerTulip.displayName = 'FlowerTulip';
