import Head from 'next/head';
import React from 'react';

const HeadTitle = ({ title }) => {
  title = title ? `${title} - Madar Farms` : 'Madar Farms';

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default HeadTitle;