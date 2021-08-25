import React from 'react';
import Navbar from '../src/components/Navbar';

const Donate: React.FC = ({}) => {
  return (
    <>
      <main className="min-h-screen gradient flex items-center justify-center flex-col ">
        <Navbar />
        <h1 className="text-white text-3xl font-bold p-2 md:text-4xl lg:text-5xl text-center  leading-relaxed mb-2">
          Gåvan som gör skillnad
        </h1>
        <div className="separator mx-auto max-w-[350px] h-1 mb-8" />
        <div className="flex flex-col gap-8 text-gray-300 leading-relaxed text-xl max-w-screen-sm px-4">
          <p>
            Tänk vad lite det krävs för att göra tillvaron bättre för människor.
            Och om du blir månadsgivare så kan du hjälpa Räddningsmissionen
            varje månad. Du bestämmer beloppet själv, och att sätta upp ett
            autogiro hos oss är enkelt och snabbt!
          </p>
          <p>
            Bli en månadsgivare och sätt upp ett autogiro{' '}
            <a
              className="movingUnderline"
              href="https://gava.raddningsmissionen.se/pfs/donation/dar_det_behovs_bast"
            >
              Här
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default Donate;
