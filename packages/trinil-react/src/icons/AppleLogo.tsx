import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AppleLogo: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15.71 6.965q.288 0 .98.088.695.087 1.519.503.837.402 1.518 1.345a6 6 0 0 1-.38.276q-.34.227-.759.68-.418.44-.733 1.13-.314.68-.314 1.623 0 1.081.393 1.835.405.755.929 1.22.537.453.942.666l.445.227q-.013.05-.34.892-.314.842-1.047 1.874-.641.893-1.387 1.646a2.37 2.37 0 0 1-1.766.755q-.694 0-1.139-.189a23 23 0 0 0-.916-.39q-.471-.2-1.269-.2-.772 0-1.295.2-.51.202-.982.403-.458.201-1.086.201-.955 0-1.675-.73a17 17 0 0 1-1.478-1.747q-.877-1.206-1.505-2.942a10.5 10.5 0 0 1-.615-3.52q0-1.899.746-3.18.746-1.296 1.91-1.95 1.178-.666 2.434-.666.668 0 1.256.214.59.2 1.1.415.522.213.941.213.406 0 .942-.226.537-.226 1.204-.44.667-.226 1.427-.226m-.72-1.597q-.51.591-1.282.993-.773.39-1.466.39-.144 0-.275-.025a1 1 0 0 1-.026-.138 2 2 0 0 1-.013-.214q0-.755.34-1.459.34-.716.772-1.181.55-.63 1.387-1.044t1.597-.44q.039.163.039.39 0 .755-.301 1.47-.3.705-.772 1.258"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AppleLogo.displayName = 'AppleLogo';
