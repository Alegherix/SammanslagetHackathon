import React from 'react';
import Navbar from './Navbar';

const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="gradient min-h-screen">{children}</main>
    </>
  );
};

export default Wrapper;
