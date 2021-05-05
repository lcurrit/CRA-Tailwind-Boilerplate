import React from 'react';
import './button.css';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button type="button" className="btn">
      {children}
    </button>
  );
};

export default Button;
