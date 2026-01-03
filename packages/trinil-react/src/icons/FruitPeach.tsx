import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FruitPeach: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 7.884A6.753 6.753 0 0 0 8.637 18M12 7.884q.345-.122.704-.206M12 7.884a6.75 6.75 0 1 0 0 12.732 6.75 6.75 0 1 0 .704-12.938M12 7.884l-.122-.306m.122.306a3 3 0 0 1-.122-.306m.122.306q.372-.093.704-.206m0 0c3.794-1.28 3.755-4.241 3.046-5.428-4.24 0-4.485 3.555-3.872 5.328m0 0L9.75 2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FruitPeach.displayName = 'FruitPeach';
