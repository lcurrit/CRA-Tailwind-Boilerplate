import React from 'react';
import './banner.css';

interface BannerProps {
  children: React.ReactNode;
}

function Banner({ children }: BannerProps) {
  return (
    <div className="banner-container">
      <div className="banner-content">{children}</div>
    </div>
  );
}

export default Banner;
