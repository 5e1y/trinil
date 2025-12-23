import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Radioactive: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16 18.428c.276.478.114 1.096-.392 1.317a9 9 0 0 1-7.216 0c-.506-.221-.668-.839-.392-1.317l1.5-2.598c.276-.479.888-.628 1.42-.478a4 4 0 0 0 2.16 0c.531-.15 1.143 0 1.42.478zM9.5 7.171c.276.478.101 1.082-.294 1.468a4 4 0 0 0-1.083 1.871c-.136.536-.57.99-1.123.99H4c-.552 0-1.006-.449-.944-.998a9 9 0 0 1 3.607-6.249c.445-.327 1.06-.16 1.337.32zM16 4.572c.276-.478.892-.646 1.336-.319a9 9 0 0 1 3.609 6.25c.06.548-.393.997-.945.997h-3c-.552 0-.987-.454-1.124-.99a4 4 0 0 0-1.083-1.871c-.395-.386-.57-.99-.294-1.468zM10.5 11.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Radioactive.displayName = 'Radioactive';
