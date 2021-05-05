import React from 'react';
import './button.css';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button type="button" className="btn">
      {text}
    </button>
  );
};

export default Button;
