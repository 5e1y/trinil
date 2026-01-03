import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MedalStar: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 15.57a2.26 2.26 0 0 0 1.622-.017c.286-.115.688.052.81.335a2.25 2.25 0 0 0 4.136 0c.122-.283.524-.45.81-.335a2.26 2.26 0 0 0 1.622.017m-9 0a2.25 2.25 0 0 1-1.303-2.942c.114-.286-.052-.688-.335-.81a2.25 2.25 0 0 1 0-4.136c.283-.122.45-.524.335-.81a2.25 2.25 0 0 1 2.925-2.925c.286.115.688-.052.81-.335a2.25 2.25 0 0 1 4.136 0c.122.283.524.45.81.335a2.25 2.25 0 0 1 2.925 2.925c-.114.286.052.688.335.81a2.25 2.25 0 0 1 0 4.136c-.283.122-.45.524-.335.81A2.25 2.25 0 0 1 16.5 15.57m-9 0v6.18l4.5-1.5 4.5 1.5v-6.18m-4.36-8.922.831 1.685a.08.08 0 0 0 .063.046l1.993.29c.07.01.097.094.047.143l-1.442 1.406a.08.08 0 0 0-.024.074l.34 1.985a.084.084 0 0 1-.122.088l-1.782-.937a.08.08 0 0 0-.078 0l-1.783.937a.084.084 0 0 1-.122-.088l.34-1.985a.08.08 0 0 0-.023-.075L8.935 8.813a.084.084 0 0 1 .047-.143l1.993-.29a.08.08 0 0 0 .063-.046l.832-1.686a.15.15 0 0 1 .27 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MedalStar.displayName = 'MedalStar';
