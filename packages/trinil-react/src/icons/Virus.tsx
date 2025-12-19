import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Virus: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m8.225 6.104-.468-.468a1.5 1.5 0 0 0-2.121 2.121l.468.468m2.121-2.121.8.8m-.8-.8a7 7 0 0 1 2.196-.925.1.1 0 0 0 .079-.098V4.5a1.5 1.5 0 0 1 3 0v.58c0 .048.033.088.079.099a7 7 0 0 1 2.196.925M6.904 9.025l-.8-.8m0 0a7 7 0 0 0-.925 2.196.1.1 0 0 1-.098.079H4.5a1.5 1.5 0 0 0 0 3h.58c.048 0 .088.033.099.079a7 7 0 0 0 .882 2.128c.025.04.02.091-.014.125l-.411.41a1.5 1.5 0 0 0 2.121 2.122l.411-.411a.1.1 0 0 1 .125-.014 7 7 0 0 0 2.128.882.1.1 0 0 1 .079.098v.581a1.5 1.5 0 0 0 3 0v-.58a.1.1 0 0 1 .079-.099 7 7 0 0 0 2.128-.882.1.1 0 0 1 .125.014l.41.41a1.5 1.5 0 1 0 2.122-2.12l-.411-.411a.1.1 0 0 1-.014-.125 7 7 0 0 0 .882-2.129.1.1 0 0 1 .098-.078h.58a1.5 1.5 0 1 0 0-3h-.58a.1.1 0 0 1-.098-.079 7 7 0 0 0-.925-2.196m0 0 .468-.468a1.5 1.5 0 0 0-2.121-2.121l-.468.468m2.121 2.121-.8.8m-2.121-2.121.8-.8M10.415 13A1.5 1.5 0 1 1 8.5 11.085m4.56 3.415A1.5 1.5 0 1 0 15 12.595"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Virus.displayName = 'Virus';
