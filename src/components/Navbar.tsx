import React from 'react';
import Link from 'next/link';

interface INavigate {
  path: string;
  text: string;
}

const NavButton: React.FC<INavigate> = ({ path, text }) => {
  return (
    <Link href={path}>
      <a className="text-white opacity-50 hover:opacity-100 duration-100">
        {text}
      </a>
    </Link>
  );
};

const Navbar: React.FC = ({}) => {
  return (
    <>
      <nav className="absolute top-2 right-2 flex gap-2">
        <NavButton path="/" text="Start" />
        <NavButton path="/donate" text="Donera" />
        <NavButton path="/about" text="Om oss" />
      </nav>
    </>
  );
};

export default Navbar;
