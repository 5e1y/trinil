import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Liver: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m11.905 15.052-4.279 4.32a3.05 3.05 0 0 1-2.163.925c-1.758 0-3.183-1.553-3.183-3.47v-6.224c0-2.508 1.598-4.68 3.844-5.223a4.5 4.5 0 0 1 1.944-.041l4.906.972m-1.07 8.741h1.293c1.549 0 3.014-.768 3.982-2.086l.227-.31c.252-.342.56-.63.91-.847l2.432-1.515c.497-.31.846-.838.959-1.45.202-1.102-.406-2.188-1.398-2.497l-1.344-.419a3.2 3.2 0 0 0-1.309-.128l-4.682.51m-1.07 8.742c-1.283-3.73.179-7.382 1.07-8.741"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Liver.displayName = 'Liver';
