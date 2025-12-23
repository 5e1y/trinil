import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Defibrilator: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m13.5 9.5-2.858 3.335a.1.1 0 0 0 .075.165h2.566a.1.1 0 0 1 .075.165L10.5 16.5m2.018 3.688c12.872-7.892 8.669-15.61 3.983-15.609-2.576 0-4.045 1.784-4.41 2.289a.113.113 0 0 1-.18 0c-.365-.505-1.835-2.289-4.41-2.289-4.686 0-8.89 7.717 3.984 15.61.311.19.722.19 1.033 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Defibrilator.displayName = 'Defibrilator';
