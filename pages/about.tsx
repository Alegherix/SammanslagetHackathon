import React from 'react';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import Navbar from '../src/components/Navbar';
import persons, { IPerson } from '../src/data';

const PersonCard: React.FC<IPerson> = ({
  description,
  name,
  mail,
  title,
  imgUrl,
}) => {
  return (
    <div className="max-w-md">
      <div
        style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%, 0 30%)' }}
        className="w-[300px] h-[300px] relative mb-6  "
      >
        <Image
          src={imgUrl}
          alt="image of Contributer"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex gap-2 flex-col text-gray-300 ">
        <p
          style={{ textShadow: '#ec1313 0px 1px 3px' }}
          className="text-accent"
        >
          {title}
        </p>

        <h2 className="font-bold text-2xl text-white tracking-wider mb-2">
          {name}
        </h2>
        <p className="leading-relaxed">{description}</p>
        <div className="flex gap-3 items-center text-accent text-sm">
          <AiOutlineMail />
          <a className="hover:underline tracking-wide " href={`mailto:${mail}`}>
            {mail}
          </a>
        </div>
      </div>
    </div>
  );
};

const about = ({}) => {
  return (
    <>
      <main className="gradient min-h-screen flex flex-col">
        <h1 className="text-center text-5xl font-bold text-white pt-12">
          Vilka är vi?
        </h1>
        <div className="separator mx-auto max-w-[150px] mt-2 mb-7 h-1" />

        <div className="w-full flex  flex-wrap gap-12 p-4 pb-8 justify-center mx-auto flex-1">
          {persons.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>
        <footer className="text-gray-300 bg-white w-full h-20 bg-opacity-5 flex items-center justify-center mt-2">
          <a href="https://www.yrgo.se">Yrgo &copy; 2021</a>
        </footer>
      </main>
    </>
  );
};

export default about;
