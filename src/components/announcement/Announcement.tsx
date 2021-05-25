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
          <div className="container mx-auto">
            <div className="flex items-center">
              <div className="flex-grow">{children}</div>
              <button type="button" className="btn" onClick={closeButton}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Announcement;
