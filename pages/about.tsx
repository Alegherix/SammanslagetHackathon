import React from 'react';
import Image from 'next/image';
import MartinImg from '../public/images/martin.jpg';
import ChristerImg from '../public/images/christer.jpg';
import NilsImg from '../public/images/nils.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import Navbar from '../src/components/Navbar';

interface IPersonCard {
  title: string;
  name: string;
  mail: string;
  description: string;
  imgUrl: StaticImageData;
}

const PersonCard: React.FC<IPersonCard> = ({
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
          style={{ textShadow: '#0d79b3 0px 1px 3px' }}
          className="text-[#15A2EF]"
        >
          {title}
        </p>

        <h2 className="font-bold text-2xl text-white tracking-wider mb-2">
          {name}
        </h2>
        <p className="leading-relaxed">{description}</p>
        <div className="flex gap-3 items-center text-[#15A2EF] text-sm">
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
      <Navbar />
      <main className="gradient min-h-screen">
        <h1 className="text-center text-5xl font-bold pt-7 text-white ">
          Vilka är vi?
        </h1>
        <div className="separator mx-auto max-w-[150px] mt-2 mb-7 h-1" />

        <div className="w-full flex justify-center flex-wrap max-w-screen-2xl gap-12 mx-auto p-4 pb-8">
          <PersonCard
            name="Martin Hansson"
            title="Webbutvecklare"
            imgUrl={MartinImg}
            mail="alegherix@gmail.com"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo autem cumque voluptate! Nam, repellat? Accusamus totam dignissimos veritatis et. Laudantium quis aut doloribus sit, adipisci non hic provident illum tenetur, ex, ducimus impedit quae facere eum eveniet esse assumenda."
          />
          <PersonCard
            name="Christer Högberg"
            title="Game Creator Programmer"
            imgUrl={ChristerImg}
            mail="christersmail@gmail.com"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo autem cumque voluptate! Nam, repellat? Accusamus totam dignissimos veritatis et. Laudantium quis aut doloribus sit, adipisci non hic provident illum tenetur, ex, ducimus impedit quae facere eum eveniet esse assumenda."
          />{' '}
          <PersonCard
            name="Nils Alatalo"
            title="Manusförfattare"
            imgUrl={NilsImg}
            mail="Nils Mail..."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo autem cumque voluptate! Nam, repellat? Accusamus totam dignissimos veritatis et. Laudantium quis aut doloribus sit, adipisci non hic provident illum tenetur, ex, ducimus impedit quae facere eum eveniet esse assumenda."
          />
          <PersonCard
            name="Isak Alfredsson"
            title="Game Creator Artist"
            imgUrl={NilsImg}
            mail="Isaks Mail"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo autem cumque voluptate! Nam, repellat? Accusamus totam dignissimos veritatis et. Laudantium quis aut doloribus sit, adipisci non hic provident illum tenetur, ex, ducimus impedit quae facere eum eveniet esse assumenda."
          />
        </div>
        {/* <footer className="bg-white bg-opacity-10 h-20 text-center flex items-center justify-center text-white">
          Yrgo &copy; 2021
        </footer> */}
      </main>
    </>
  );
};

export default about;
