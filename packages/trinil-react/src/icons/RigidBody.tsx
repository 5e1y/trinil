import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const RigidBody: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8 19H4a1 1 0 0 1-1-1v-7c0-.225.074-.433.2-.6M8 19l4-9m-4 9h8m-8 0-4.8-8.6M12 10h8c.327 0 .618.157.8.4M12 10H4a1 1 0 0 0-.8.4M12 10l4 9m0 0h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-.2-.6M16 19l4.8-8.6M12 3.5V8m0 0-2-2m2 2 2-2"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
RigidBody.displayName = 'RigidBody';
