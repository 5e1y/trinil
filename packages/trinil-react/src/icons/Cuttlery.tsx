import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cuttlery: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.5 18.5V13m0 0V6.1c0-.055-.045-.098-.099-.086-.409.092-1.957.784-2.134 5.982A.98.98 0 0 0 19.25 13zM3 6v3.5A1.5 1.5 0 0 0 4.5 11M6 6v3.5A1.5 1.5 0 0 1 4.5 11m0 7.475V11M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cuttlery.displayName = 'Cuttlery';
