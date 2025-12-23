import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Skull: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10 21H9a1 1 0 0 1-1-1 1 1 0 0 0-1-1h-.882a1 1 0 0 1-.894-1.447 1 1 0 0 0-.095-1.047l-.603-.805A2.63 2.63 0 0 1 4 14.124v-.434c0-.776.23-1.534.66-2.18.215-.322.263-.724.164-1.098C3.365 4.869 8.617 3 12 3s8.635 1.869 7.176 7.412c-.099.374-.05.776.164 1.098.43.646.66 1.404.66 2.18v.434c0 .569-.184 1.122-.526 1.577l-.603.805a1 1 0 0 0-.095 1.047A1 1 0 0 1 17.882 19H17a1 1 0 0 0-1 1 1 1 0 0 1-1 1h-1m-4 0v-1.5m0 1.5h2m2 0v-1.5m0 1.5h-2m0 0v-1.5m1-2-.5-.5a.707.707 0 0 0-1 0l-.5.5m-4.5-3.765v.203a2 2 0 0 0 1.515 1.94l.265.067a2 2 0 0 0 2.473-1.72l.026-.237a2 2 0 0 0-1.767-2.209l-.291-.032A2 2 0 0 0 6.5 13.735Zm6.72.253.027.238a2 2 0 0 0 2.473 1.719l.265-.066a2 2 0 0 0 1.515-1.94v-.204a2 2 0 0 0-2.22-1.988l-.292.032a2 2 0 0 0-1.767 2.209Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Skull.displayName = 'Skull';
