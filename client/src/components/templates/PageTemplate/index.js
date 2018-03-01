import React from 'react';

const PageTemplate = ({ className, children }) => {
  return (
    <main className={className}>{children}</main>
  )
};

export default PageTemplate;