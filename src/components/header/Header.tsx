import React from 'react';
import './header.css';

interface HeaderProps {
  backgroundUrl?: string;
  children: React.ReactNode;
  headerMinHeight?: number;
}

const Header = ({ backgroundUrl, children, headerMinHeight }: HeaderProps) => {
  return (
    <header
      className={backgroundUrl !== '' ? 'header-background' : ''}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        minHeight: `${headerMinHeight}px`,
      }}
    >
      <div>{children}</div>
    </header>
  );
};

Header.defaultProps = {
  backgroundUrl: '',
  headerMinHeight: '',
};

export default Header;
