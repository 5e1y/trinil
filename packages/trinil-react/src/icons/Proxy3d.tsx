import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Proxy3d: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m5.484 5.542-2.47 6.422a.1.1 0 0 0 0 .072l2.47 6.423a.1.1 0 0 0 .058.057l6.422 2.47a.1.1 0 0 0 .072 0l6.423-2.47a.1.1 0 0 0 .057-.057l2.47-6.423a.1.1 0 0 0 0-.072l-2.47-6.422a.1.1 0 0 0-.057-.058l-6.423-2.47a.1.1 0 0 0-.072 0l-6.422 2.47a.1.1 0 0 0-.058.058Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Proxy3d.displayName = 'Proxy3d';
