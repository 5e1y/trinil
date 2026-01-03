import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FlowerDaisy: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.03 4.828A3 3 0 0 0 4.827 9.03m4.201-4.2a3 3 0 0 1 5.942 0m-5.942 0 1.823 4.399m4.119-4.4a3 3 0 0 1 4.2 4.201m-4.2-4.2-1.823 4.399m6.024-.199a3 3 0 0 1 0 5.942m0-5.942-4.4 1.823m4.4 4.119a3 3 0 0 1-4.201 4.2m4.2-4.2-4.399-1.823m.199 6.024a3 3 0 0 1-5.942 0m5.942 0-1.823-4.4m-4.119 4.4a3 3 0 0 1-4.2-4.201m4.2 4.2 1.823-4.399m-6.024.199a3 3 0 0 1 0-5.942m0 5.942 4.4-1.823m-4.4-4.119 4.4 1.823m0 0A3 3 0 0 0 9 12c0 .407.081.795.228 1.148m0-2.296a3 3 0 0 1 1.624-1.624m0 0A3 3 0 0 1 12 9c.407 0 .795.081 1.148.228m0 0a3 3 0 0 1 1.624 1.624m0 0a2.993 2.993 0 0 1 0 2.297m0 0a3 3 0 0 1-1.624 1.623m0 0A3 3 0 0 1 12 15c-.407 0-.795-.081-1.148-.228m0 0a3 3 0 0 1-1.624-1.624"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FlowerDaisy.displayName = 'FlowerDaisy';
