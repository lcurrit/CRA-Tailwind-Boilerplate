import React from 'react';
import './announcement.css';

// https://learnersbucket.com/examples/react/create-alert-box-in-react/
interface AnnouncementProps {
  children: React.ReactNode;
}

const Header = ({ children }: AnnouncementProps) => {
  return <div className="announcement">{children}</div>;
};

export default Header;
