import React from 'react';
import Image from 'next/image';
import MartinImg from '../public/images/martin.jpg';
import ChristerImg from '../public/images/christer.jpg';
import NilsImg from '../public/images/nils.jpg';
import { AiOutlineMail } from 'react-icons/ai';

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
        className="w-[300px] h-[300px] relative mb-8  "
      >
        <Image
          src={imgUrl}
          alt="image of Contributer"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex gap-4 flex-col">
        <p className="text-gray-800">{title}</p>

        <h2 className="font-bold text-2xl">{name}</h2>
        <p className="text-gray-800">{description}</p>
        <div className="flex gap-3 items-center">
          <AiOutlineMail className="text-gray-800" />
          <a className="text-gray-800 hover:underline" href={`mailto:${mail}`}>
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
      <div className="bg-blue-100 min-h-screen">
        <h1 className="text-center text-5xl font-bold py-7">Vilka är vi?</h1>
        <div className="w-full flex items-center justify-center flex-wrap max-w-screen-2xl gap-8 mx-auto p-4">
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
            mail="alegherix@gmail.com"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo autem cumque voluptate! Nam, repellat? Accusamus totam dignissimos veritatis et. Laudantium quis aut doloribus sit, adipisci non hic provident illum tenetur, ex, ducimus impedit quae facere eum eveniet esse assumenda."
          />
        </div>
      </div>
    </>
  );
};

export default about;
