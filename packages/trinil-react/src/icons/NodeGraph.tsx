import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const NodeGraph: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m6.43 7.908 2.21 1.326M6.43 7.908A2.249 2.249 0 0 1 2.25 6.75a2.25 2.25 0 1 1 4.18 1.158m2.21 1.326a2.25 2.25 0 0 0 .788 3.245l.026.014m-.814-3.26a2.25 2.25 0 0 1 3.126-.593m.727 2.906 5.077 3.046m-5.077-3.046a2.24 2.24 0 0 0 .237-1.343m-.237 1.343c-.295.56-.819.98-1.447 1.137m6.524 1.91a2.25 2.25 0 1 0 3.86 2.315 2.25 2.25 0 0 0-3.86-2.316M11.766 8.64q.085.058.165.124c.428.353.723.861.8 1.439m-.965-1.563 1.326-2.21m-3.638 6.063a2.24 2.24 0 0 0 1.592.19m-1.592-.19L6.408 17.57m6.684-11.14a2.249 2.249 0 0 1 1.158-4.18 2.25 2.25 0 1 1-1.158 4.18M6.408 17.57a2.25 2.25 0 1 0-2.316 3.86 2.25 2.25 0 0 0 2.316-3.86m6.322-7.367L21.75 9m-10.704 3.683L12 16.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
NodeGraph.displayName = 'NodeGraph';
