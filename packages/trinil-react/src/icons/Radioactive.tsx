import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Radioactive: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15.94 20.254a9.83 9.83 0 0 1-7.88 0c-.552-.242-.73-.916-.428-1.438l1.637-2.837c.302-.523.97-.686 1.551-.522a4.35 4.35 0 0 0 2.359 0c.58-.164 1.249-.001 1.55.521l1.639 2.838c.302.522.124 1.196-.428 1.438M12 12.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M8.95 8.126a4.36 4.36 0 0 0-1.183 2.044c-.149.584-.624 1.08-1.227 1.08H3.264c-.603 0-1.098-.49-1.031-1.09a9.83 9.83 0 0 1 3.94-6.823c.485-.358 1.157-.174 1.459.348l1.639 2.838c.3.522.11 1.182-.322 1.603M17.827 3.337a9.82 9.82 0 0 1 3.94 6.824c.067.6-.428 1.09-1.03 1.09H17.46c-.603 0-1.078-.497-1.227-1.081a4.36 4.36 0 0 0-1.183-2.044c-.431-.421-.623-1.081-.321-1.603l1.639-2.838c.302-.522.974-.706 1.46-.348"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Radioactive.displayName = 'Radioactive';
