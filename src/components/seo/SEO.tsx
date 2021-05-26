import React from 'react';
import { Helmet } from 'react-helmet';

interface seoProps {
  seoSiteName?: string;
  seoPageTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

const SEO = ({
  seoSiteName,
  seoPageTitle,
  seoDescription,
  seoKeywords,
}: seoProps) => {
  let title = seoSiteName;
  if (seoPageTitle !== '') {
    title = `${seoSiteName} | ${seoPageTitle}`;
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
    </Helmet>
  );
};

SEO.defaultProps = {
  seoSiteName: 'CRA w/Tailwind',
  seoPageTitle: '',
  seoDescription:
    'Test application built with Create React App using Tailwindcss and Typescript.',
  seoKeywords: 'CRA, React, TailwindCSS, Typescript',
};

export default SEO;
