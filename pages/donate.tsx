import React from 'react';
import Navbar from '../src/components/Navbar';
import Image from 'next/image';
import girl from '../public/images/raddningsmissionen.png';

const Donate: React.FC = ({}) => {
  return (
    <>
      <main className="min-h-screen gradient flex items-center justify-center flex-col ">
        <Navbar />
        <h1 className="text-white text-3xl font-bold p-2 md:text-4xl lg:text-5xl text-center  leading-relaxed mb-2 mt-6">
          Gåvan som gör skillnad
        </h1>
        <div className="separator mx-auto max-w-[350px] h-1 mb-8" />
        <div className="flex flex-col gap-8 text-gray-300 leading-relaxed text-lg max-w-screen-sm px-4">
          <p>
            Om du blir månadsgivare så är du med och sprider kärlek varje månad.
            Du bestämmer beloppet själv, och att sätta upp ett gåvogiro hos oss
            är enkelt och snabbt!
          </p>
          <p>
            Sätt upp ett gåvogiro{' '}
            <a
              className="font-bold border-b-2 border-red-500"
              href="https://gava.raddningsmissionen.se/pfs/donation/dar_det_behovs_bast"
            >
              Här
            </a>
            .
          </p>
        </div>
        <div className="w-full flex justify-end mx-auto max-w-screen-md">
          <Image
            src={girl}
            layout="intrinsic"
            width={500}
            height={500}
            alt="a homeless girl"
          />
        </div>
      </main>
    </>
  );
};

export default Donate;
