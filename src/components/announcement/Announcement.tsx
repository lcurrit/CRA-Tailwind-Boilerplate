import React from 'react';
import './announcement.css';

interface AnnouncementProps {
  children: React.ReactNode;
}

const Header = ({ children }: AnnouncementProps) => {
  return <div className="announcement">{children}</div>;
};

export default Header;
