import React from 'react';

interface TitleProps {
  title: string;
  subtitle?: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">{title}</h1>
      {subtitle !== '' && <h2 className="text-2xl">{subtitle}</h2>}
    </div>
  );
};

Title.defaultProps = {
  subtitle: '',
};

export default Title;
