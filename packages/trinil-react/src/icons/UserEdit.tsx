import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UserEdit: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 14.25a6 6 0 1 1 5.168-2.95M12 14.25H9.75a6 6 0 0 0-6 6 1.5 1.5 0 0 0 1.5 1.5h7.137M12 14.25q.2 0 .395-.013m7.105.013 3 3-4.06 4.06a1.5 1.5 0 0 1-1.061.44H15v-2.379c0-.397.158-.779.44-1.06z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
UserEdit.displayName = 'UserEdit';
