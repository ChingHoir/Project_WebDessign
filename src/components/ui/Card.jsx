const Card = ({ 
  children, 
  className = '', 
  shadow = 'md',
  padding = 'md',
  hover = false 
}) => {
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const baseClasses = `
    bg-white rounded-lg border border-gray-200 transition-all duration-200
    ${shadowClasses[shadow]}
    ${paddingClasses[padding]}
    ${hover ? 'hover:shadow-lg hover:-translate-y-1' : ''}
    ${className}
  `;

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

export default Card;