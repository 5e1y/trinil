import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Like: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 19.5h9.882a1 1 0 0 0 .894-.553l1.382-2.764a12.7 12.7 0 0 0 1.303-4.684c.043-.55-.409-1-.96-1h-4.147a1 1 0 0 1-.956-1.293l.867-2.817a1.85 1.85 0 0 0-1.354-2.344c-.259-.058-.516.06-.704.248L7.5 10.5m0 9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3.5m0 9v-9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Like.displayName = 'Like';
