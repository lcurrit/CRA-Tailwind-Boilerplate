import React, { useState } from 'react';
import './announcement.css';

interface AnnouncementProps {
  children: React.ReactNode;
}

const Announcement = ({ children }: AnnouncementProps) => {
  const [showAlert, setShowAlert] = useState(true);
  const closeButton = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div className="announcement">
          {children}
          <button type="button" onClick={closeButton}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Announcement;
