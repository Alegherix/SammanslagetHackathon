import React from 'react';
import Meta from './Meta';
import Navbar from './Navbar';

const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <main className="gradient min-h-screen">{children}</main>
    </>
  );
};

export default Wrapper;
