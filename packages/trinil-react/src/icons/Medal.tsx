import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Medal: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 15.57a2.26 2.26 0 0 0 1.622-.017c.286-.115.688.052.81.335a2.25 2.25 0 0 0 4.136 0c.122-.283.524-.45.81-.335a2.26 2.26 0 0 0 1.622.017m-9 0a2.25 2.25 0 0 1-1.303-2.942c.114-.286-.052-.688-.335-.81a2.25 2.25 0 0 1 0-4.136c.283-.122.45-.524.335-.81a2.25 2.25 0 0 1 2.925-2.925c.286.115.688-.052.81-.335a2.25 2.25 0 0 1 4.136 0c.122.283.524.45.81.335a2.25 2.25 0 0 1 2.925 2.925c-.114.286.052.688.335.81a2.25 2.25 0 0 1 0 4.136c-.283.122-.45.524-.335.81A2.25 2.25 0 0 1 16.5 15.57m-9 0v6.18l4.5-1.5 4.5 1.5v-6.18"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Medal.displayName = 'Medal';
