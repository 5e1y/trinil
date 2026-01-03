import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const VideoOff: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 5.25h.75a.75.75 0 0 0-1.029-.696zm-8.25 4.5a.75.75 0 0 0 1.5 0h-1.5M9.75 4.5a.75.75 0 0 0 0 1.5V4.5M2.78 1.72a.75.75 0 0 0-1.06 1.06l.53-.53zm18.44 20.56a.75.75 0 1 0 1.06-1.06l-.53.53zM21 17.25a.75.75 0 0 0 1.5 0H21M2.25 6.75H1.5v10.5H3V6.75zm1.5 12v.75h9V18h-9zm10.5-10.5H15v-1.5h-1.5v1.5zm0 0 .278.696 7.5-3-.278-.696-.279-.696-7.5 3zm0 9H15v-1.5h-1.5v1.5zm-1.5-12V6a.75.75 0 0 1 .75.75H15a2.25 2.25 0 0 0-2.25-2.25zm0 13.5v.75A2.25 2.25 0 0 0 15 17.25h-1.5a.75.75 0 0 1-.75.75zm-10.5-1.5H1.5a2.25 2.25 0 0 0 2.25 2.25V18a.75.75 0 0 1-.75-.75zm0-10.5H3A.75.75 0 0 1 3.75 6V4.5A2.25 2.25 0 0 0 1.5 6.75zm12 3H15v-1.5h-1.5v1.5zm-1.5-4.5V4.5h-3V6h3zm-7.5 0V4.5h-1.5V6h1.5zm-3-3-.53.53 3 3 .53-.53.53-.53-3-3zm3 3-.53.53 9 9 .53-.53.53-.53-9-9zm9 10.5H15v-1.5h-1.5v1.5zm0-1.5-.53.53 2.5 2.5.53-.53.53-.53-2.5-2.5zm2.5 2.5-.53.53 5 5 .53-.53.53-.53-5-5zm0 0 .279-.696-2.5-1-.279.696-.278.696 2.5 1zm5-11.5H21v12h1.5v-12z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
VideoOff.displayName = 'VideoOff';
