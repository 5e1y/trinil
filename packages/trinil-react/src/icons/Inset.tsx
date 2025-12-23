import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Inset: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m12 11 8.982-3.992M12 11v9.99M12 11 3.018 7.008m17.964 0a.1.1 0 0 0-.041-.035l-8.9-3.955a.1.1 0 0 0-.082 0l-8.9 3.955a.1.1 0 0 0-.041.035m17.964 0a.1.1 0 0 1 .018.057v9.87a.1.1 0 0 1-.06.091l-8.9 3.956a.1.1 0 0 1-.04.008M3.018 7.008A.1.1 0 0 0 3 7.065v9.87a.1.1 0 0 0 .06.091l8.9 3.956a.1.1 0 0 0 .04.008m-.04-15.473L8.715 6.908a.1.1 0 0 0 0 .184l3.247 1.391a.1.1 0 0 0 .078 0L15.285 7.1a.1.1 0 0 0 0-.183L12.04 5.517a.1.1 0 0 0-.08 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Inset.displayName = 'Inset';
