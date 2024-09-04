import React from 'react';

export function Button({ children, className, variant = 'default', size = 'md', ...props }) {
  const baseStyles = `
    inline-block rounded-full text-white font-semibold uppercase transition-all duration-300 
    focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-purple-300
    hover:shadow-lg active:scale-95 
  `;

  const variants = {
    default: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-400',
    outline: 'border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
