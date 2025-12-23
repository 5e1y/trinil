import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TextBolt: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path fill-rule="evenodd" d="M7.1 20h6.4a4 4 0 0 0 1.38-7.756c-.088-.032-.097-.161-.014-.205A4 4 0 0 0 13 4.5H7.1a.1.1 0 0 0-.1.1v15.3a.1.1 0 0 0 .1.1Zm6.4-7.5H7.6a.1.1 0 0 0-.1.1v6.8a.1.1 0 0 0 .1.1h5.9a3.5 3.5 0 1 0 0-7ZM13 5H7.6a.1.1 0 0 0-.1.1v6.8a.1.1 0 0 0 .1.1H13a3.5 3.5 0 1 0 0-7Z" clip-rule="evenodd"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TextBolt.displayName = 'TextBolt';
