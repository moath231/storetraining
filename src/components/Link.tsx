import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  const baseStyles = 'text-gray-600 hover:text-indigo-600 transition-colors';
  return (
    <a href={href} className={`${baseStyles} ${className}`} {...props}>
      {children}
    </a>
  );
}