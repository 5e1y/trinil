import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Gear: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m13.112 4.397-.133-.643c-.219-1.064-1.74-1.064-1.958 0l-.133.643a1 1 0 0 1-1.727.463l-.436-.49c-.722-.813-2.038-.053-1.696.979l.207.623A1 1 0 0 1 5.97 7.236l-.622-.207c-1.032-.342-1.792.974-.98 1.696l.49.437a1 1 0 0 1-.462 1.726l-.643.133c-1.064.219-1.064 1.74 0 1.959l.643.132a1 1 0 0 1 .463 1.727l-.49.436c-.813.722-.053 2.039.979 1.696l.622-.206a1 1 0 0 1 1.265 1.264l-.207.623c-.342 1.03.974 1.791 1.696.979l.436-.49a1 1 0 0 1 1.727.462l.133.643c.219 1.064 1.74 1.064 1.958 0l.133-.643a1 1 0 0 1 1.727-.463l.436.491c.722.812 2.038.052 1.696-.98l-.207-.622a1 1 0 0 1 1.265-1.264l.622.206c1.032.343 1.792-.974.98-1.696l-.49-.436a1 1 0 0 1 .462-1.727l.643-.132c1.064-.22 1.064-1.74 0-1.96l-.643-.132a1 1 0 0 1-.463-1.726l.49-.437c.813-.722.053-2.038-.979-1.696l-.622.207a1 1 0 0 1-1.265-1.264l.207-.623c.342-1.032-.974-1.792-1.696-.98l-.436.49a1 1 0 0 1-1.727-.462Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Gear.displayName = 'Gear';
