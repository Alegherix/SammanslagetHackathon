import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';

const CustomI: React.FC = ({}) => {
  return (
    <>
      <span className="inline-block relative m-0 leading-[18px] lg:leading-7">
        {/* <span className="block animate-bounce">.</span> */}
        <AiFillHeart className="block text-red-500 text-xs lg:text-lg " />
        <span className="block">ı</span>
      </span>
    </>
  );
};

export default CustomI;
