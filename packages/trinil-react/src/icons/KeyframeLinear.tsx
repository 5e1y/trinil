import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const KeyframeLinear: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 3.621c-.384 0-.768.147-1.06.44l-6.88 6.878a1.5 1.5 0 0 0 0 2.122l6.88 6.878c.292.293.676.44 1.06.44M12 3.62c.384 0 .768.147 1.06.44l6.88 6.878a1.5 1.5 0 0 1 0 2.122l-6.88 6.878c-.292.293-.676.44-1.06.44M12 3.62V20.38"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
KeyframeLinear.displayName = 'KeyframeLinear';
