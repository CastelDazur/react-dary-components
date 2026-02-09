import React from 'react';
import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  children,
  className = '',
  style,
}) => {
  const baseClass = 'dary-button';
  const variantClass = `${baseClass}--${variant}`;
  const sizeClass = `${baseClass}--${size}`;
  const disabledClass = disabled || loading ? `${baseClass}--disabled` : '';
  
  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      style={style}
    >
      {loading ? (
        <span className="dary-button__spinner">Loading...</span>
      ) : (
        children
      )}
    </button>
  );
};
