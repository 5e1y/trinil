import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bevel: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 9v4.5M12 9l6.746-2.998M12 9 5.254 6.002M12 13.5 3.004 9.502M12 13.5l8.996-3.998M12 13.5v7.49m6.746-14.988-.023-.014-6.682-2.97a.1.1 0 0 0-.082 0l-6.682 2.97-.023.014m13.492 0a.1.1 0 0 1 .02.023l2.218 3.45q.008.012.012.027m-15.742-3.5a.1.1 0 0 0-.02.023l-2.218 3.45a.1.1 0 0 0-.012.027m0 0L3 9.529v7.406a.1.1 0 0 0 .06.091l8.9 3.956a.1.1 0 0 0 .04.008m8.996-11.488.004.027v7.406a.1.1 0 0 1-.06.091l-8.9 3.956a.1.1 0 0 1-.04.008"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Bevel.displayName = 'Bevel';
