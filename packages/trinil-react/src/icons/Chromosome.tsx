import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Chromosome: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.25 6V4.5a2.25 2.25 0 0 1 4.5 0v.568q0 .47-.057.932M14.25 6a2.25 2.25 0 0 1-4.5 0V4.5a2.25 2.25 0 0 0-4.5 0v.568c0 2.037.81 3.991 2.25 5.432a7.68 7.68 0 0 0-2.25 5.432V19.5a2.25 2.25 0 0 0 4.5 0V15a2.25 2.25 0 0 1 4.5 0m0-9h4.443m-4.443 9v3m0-3h4.443m-4.443 3v1.5a2.25 2.25 0 0 0 4.5 0V18m-4.5 0h4.5m0 0v-2.068q0-.47-.057-.932m0 0a7.68 7.68 0 0 0-2.193-4.5A7.68 7.68 0 0 0 18.693 6"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Chromosome.displayName = 'Chromosome';
