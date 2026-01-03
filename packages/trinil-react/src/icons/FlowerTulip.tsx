import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FlowerTulip: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8.75 19.627a8.7 8.7 0 0 0 3.25.623c4.305 0 7.91-3.105 8.338-7.183l.231-2.2a10 10 0 0 1 .367-1.827l.796-2.651a.4.4 0 0 0 .018-.124.464.464 0 0 0-.475-.452c-.918 0-1.86.006-2.79.047-.78.033-1.553.091-2.296.19M8.75 19.627c-2.753-1.104-4.774-3.57-5.088-6.56l-.231-2.2a10 10 0 0 0-.367-1.827L2.268 6.39a.4.4 0 0 1-.018-.124c0-.25.213-.453.475-.452.918 0 1.86.006 2.79.047.78.033 1.553.091 2.296.19m.939 13.577s5.417 2.051 5.417-7.627c0-2.224-.84-3.648-2.167-4.56m0 0c1.12-.77 2.587-1.176 4.19-1.39M12 7.44c-.658-.454-1.437-.78-2.292-1.016-.6-.165-1.237-.286-1.897-.374m8.378 0c-.192-.518-.567-.983-1.073-1.356-.788-.582-1.893-.944-3.116-.944s-2.328.362-3.116.944c-.506.373-.881.838-1.073 1.356"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FlowerTulip.displayName = 'FlowerTulip';
