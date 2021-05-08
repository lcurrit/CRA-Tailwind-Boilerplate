import React from 'react';
import './header.css';

interface HeaderProps {
  children: React.ReactNode;
  subtitle?: string;
}

const Header = ({ children, subtitle }: HeaderProps) => {
  return (
    <header>
      <h1>{children}</h1>
      {subtitle !== '' && <div>{subtitle}</div>}
    </header>
  );
};

Header.defaultProps = {
  subtitle: '',
};

export default Header;
