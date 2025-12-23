import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WateringCan: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m17.286 16.145-.196 1.954a1 1 0 0 1-.995.901H8.643a.16.16 0 0 1-.157-.142 5 5 0 0 0-1.544-3.14l-3.628-3.422A1 1 0 0 1 3 11.569v-1.16a.41.41 0 0 1 .582-.371l3.047 1.413A1 1 0 0 0 8 10.523V10a1 1 0 0 1 1-1h.5m7.785 7.145.545-.315A6.34 6.34 0 0 0 21 10.34C21 7 18 5 15.36 5 12.507 5 9.784 6.162 9.5 9m7.785 7.145.605-6.03a1 1 0 0 0-.995-1.1h-.86a.7.7 0 0 0-.452.117 5.48 5.48 0 0 1-5.876 0L9.5 9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
WateringCan.displayName = 'WateringCan';
