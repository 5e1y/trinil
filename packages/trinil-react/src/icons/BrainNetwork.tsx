import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BrainNetwork: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.25 19.5H21m-6.75 0a2.25 2.25 0 0 1-4.5 0m4.5 0A2.25 2.25 0 0 0 12 17.25M9.75 19.5H3m6.75 0A2.25 2.25 0 0 1 12 17.25m0 0v-3.142m4.892-9.269a2.5 2.5 0 0 0-2.883-1.713 1.55 1.55 0 0 1-1.258-.312 2.5 2.5 0 0 0-1.584-.564 2.5 2.5 0 0 0-1.555.538 1.37 1.37 0 0 1-.945.29 2.5 2.5 0 0 0-2.393 1.761m10.618 0a2.486 2.486 0 0 1 1.774 2.442c-.01.314.094.628.291.873.34.424.543.96.543 1.544a2.49 2.49 0 0 1-2.567 2.482 1.36 1.36 0 0 0-.88.29 2.5 2.5 0 0 1-2.604.307m3.443-7.938c-1.049-.279-2.188.214-2.368 1.257-.027.1-.304.288-.53.208-.844-.75-2.013-.62-2.567.159m2.022 6.314a2.5 2.5 0 0 1-3.217 1.292 1.42 1.42 0 0 0-1.048 0c-.288.117-.603.181-.934.181a2.49 2.49 0 0 1-2.498-2.404m7.697.93c.237-.543.405-1.513-.127-2.25m-7.57 1.32A2.48 2.48 0 0 1 4.5 9.698q.002-.425.136-.806a1.33 1.33 0 0 0 0-.87 2.4 2.4 0 0 1-.136-.806c0-1.12.747-2.068 1.774-2.377m-.522 7.007c0-.347.096-.822.367-1.241m.155-5.766c-.265.87 0 2.79 2.393 2.377m4.656 3.31c-.256-.354-.674-.655-1.323-.828-.777-.128-1.915-.017-2.404 1.004m3.726-.176c.279-1.339 1.423-2.136 2.732-1.735"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BrainNetwork.displayName = 'BrainNetwork';
