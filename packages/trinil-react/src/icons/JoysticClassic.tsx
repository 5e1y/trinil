import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const JoysticClassic: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m9.613 8.892-5.869 3.424a1.5 1.5 0 0 0-.545.55m6.414-3.974a3.75 3.75 0 1 1 4.774 0m-4.774 0q.402.333.887.546m3.887-.546 5.869 3.424a1.5 1.5 0 0 1 .546.55m-6.415-3.974q-.402.333-.887.546M3.199 12.866l8.045 4.693c.234.136.495.204.756.204m-8.801-4.897A1.5 1.5 0 0 0 3 13.61v2.027a1.5 1.5 0 0 0 .744 1.296l7.5 4.375c.234.136.495.204.756.204m8.802-8.647a1.5 1.5 0 0 1 .198.745v2.027a1.5 1.5 0 0 1-.744 1.296l-7.5 4.375a1.5 1.5 0 0 1-.756.204m8.802-8.647-8.046 4.693a1.5 1.5 0 0 1-.756.204m0 0v3.75M10.5 9.438c.46.2.967.312 1.5.312s1.04-.111 1.5-.312m-3 0v2.446a1.5 1.5 0 1 0 3 0V9.438"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
JoysticClassic.displayName = 'JoysticClassic';
