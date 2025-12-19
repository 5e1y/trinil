import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Lungs: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 7.116h.72a1 1 0 0 0 .97-.758l.566-2.265a.974.974 0 0 1 1.212-.7c1.585.452 2.508 1.736 3.365 3.22.167.29.796 1.503.993 2.24.597 2.225.674 3.725.674 6.263 0 2.962-1.904 4.88-4.42 5.384-1.314.262-2.421-1.032-1.924-2.275a5.06 5.06 0 0 0-.172-4.141l-.103-.207a7.8 7.8 0 0 1-.587-1.587l-.081-.324A1.123 1.123 0 0 0 11 12.24s.006.534 0 .877c-.037 2.252-.715 5.722-.715 5.722a1.966 1.966 0 0 1-2.492 1.647l-.104-.03c-2.707-.773-4.15-3.37-4.15-6.187 0-2.152.396-3.652.81-5.202.296-1.101.57-1.95.924-2.77C6 4.616 6.808 3.846 8.18 3.389a.897.897 0 0 1 1.123.536l.954 2.542a1 1 0 0 0 .936.649zm0 0v-4"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Lungs.displayName = 'Lungs';
