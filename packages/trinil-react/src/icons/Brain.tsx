import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Brain: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.36 7.31c-.405-1.401-1.643-2.422-3.11-2.422a3 3 0 0 0-.638.066 1.94 1.94 0 0 1-1.635-.428 3.14 3.14 0 0 0-2.06-.776 3.14 3.14 0 0 0-2.021.74 1.7 1.7 0 0 1-1.143.4q-.044-.002-.086-.002c-1.467 0-2.706 1.02-3.11 2.422m13.802 0c1.335.425 2.308 1.727 2.308 3.268q0 .045-.002.09c-.011.432.123.863.38 1.2.441.583.705 1.32.705 2.123 0 1.886-1.455 3.414-3.25 3.414l-.087-.001a1.7 1.7 0 0 0-1.143.398 3.104 3.104 0 0 1-3.386.422M18.36 7.31c-1.363-.383-2.844.294-3.077 1.729-.036.219-.203.4-.415.4a.4.4 0 0 1-.274-.114c-1.389-1.307-3.454-.673-3.719 1.253m3.01 7.646c-.506 1.193-1.643 2.026-2.967 2.026-.43 0-.84-.089-1.215-.248a1.75 1.75 0 0 0-1.362 0c-.375.16-.785.248-1.215.248-1.76 0-3.193-1.47-3.248-3.305m10.007 1.28c.308-.748.526-2.082-.165-3.096m-9.842 1.816c-.971-.59-1.627-1.69-1.627-2.954 0-.388.063-.76.177-1.108a1.93 1.93 0 0 0 0-1.197 3.5 3.5 0 0 1-.177-1.108c0-1.541.972-2.843 2.306-3.268m-.679 9.635c0-.716.281-1.828 1.19-2.482m-.51-7.153c-.278.962-.11 2.858 1.585 3.268m7.577 4.551c-.332-.487-.875-.9-1.719-1.138-1.083-.19-2.708 0-3.25 1.707m4.97-.569c.412-2.097 2.284-3.228 4.27-2.057"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Brain.displayName = 'Brain';
