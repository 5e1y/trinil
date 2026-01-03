import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Lungs: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M11.98 7.127h1.475c.487 0 .911-.322 1.03-.781l.6-2.338c.142-.551.725-.879 1.287-.723 1.681.467 1.95 1.793 2.859 3.324.177.299.845 1.55 1.054 2.31.633 2.296.715 3.844.715 6.462 0 3.057-2.02 5.036-4.691 5.555-1.394.271-2.569-1.064-2.041-2.347a5.09 5.09 0 0 0-.183-4.273l-.11-.213a8 8 0 0 1-.623-1.637l-.085-.334a1.186 1.186 0 0 0-1.157-.878c-.658 0-1.192.519-1.192 1.159 0 0 .006.551 0 .905-.039 2.323-.759 5.904-.759 5.904-.159 1.235-1.413 2.041-2.644 1.7l-.11-.032C4.532 20.093 3 17.412 3 14.508c0-2.221.42-3.769.86-5.367.314-1.137.605-2.013.98-2.859.772-1.733 1.086-2.527 2.542-2.999a.96.96 0 0 1 1.193.553l1.011 2.623c.155.402.551.67.994.67zm0 0V3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Lungs.displayName = 'Lungs';
