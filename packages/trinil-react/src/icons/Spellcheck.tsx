import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Spellcheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21 21.52a2.6 2.6 0 0 1-.75-.52l-.22-.22a1.81 1.81 0 0 0-2.56 0l-.44.44a1.81 1.81 0 0 1-2.56 0l-.44-.44a1.81 1.81 0 0 0-2.56 0l-.44.44a1.81 1.81 0 0 1-2.56 0l-.44-.44a1.81 1.81 0 0 0-2.56 0l-.44.44a1.81 1.81 0 0 1-2.03.367M7.421 12l2.627-8.32a2.047 2.047 0 0 1 3.904 0L16.579 12M7.42 12 6 16.5M7.421 12h9.158m0 0L18 16.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Spellcheck.displayName = 'Spellcheck';
