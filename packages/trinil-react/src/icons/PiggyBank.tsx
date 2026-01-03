import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PiggyBank: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5.25 12.375C5.25 17.25 7.5 18 7.5 18v.75a1.5 1.5 0 0 0 1.5 1.5h.75a1.5 1.5 0 0 0 1.5-1.5h3a1.5 1.5 0 0 0 1.5 1.5h.75a1.5 1.5 0 0 0 1.5-1.5V18s2.25 0 2.25-2.25a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5c0-2.992-2.25-3.843-2.25-3.843V3.75l-.377.094a7 7 0 0 0-2.982 1.586c-.504-.115-1.4-.19-1.891-.19-.982 0-1.27.012-2.25.19q-.371.067-.75.195c-2.223.748-4.5 3.045-4.5 6.75m0 0c-1.683.51-3.301-.96-2.957-2.684L2.432 9m8.068-.423c1.462-.704 3.75-.214 3.75-.214"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
PiggyBank.displayName = 'PiggyBank';
