import React from 'react';
import { Helmet } from 'react-helmet';

interface seoProps {
  pageTitle?: string;
}

const SEO = ({ pageTitle }: seoProps) => {
  let title = `CRA w/Tailwind`;
  if (pageTitle !== '') {
    title = `${title} | ${pageTitle}`;
  }
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

SEO.defaultProps = {
  pageTitle: '',
};

export default SEO;
