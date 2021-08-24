import React, { useState } from 'react';

interface IActionButton {
  text: string;
}

const ActionButton: React.FC<IActionButton> = ({ text }) => {
  return (
    <button className="border-2 rounded-md text-white p-4 duration-150 hover:bg-[#ffffff33] w-[fit-content]">
      {text}
    </button>
  );
};

type Choice = 'Donate' | 'Help';

const Index = ({}) => {
  const [choice, setChoice] = useState<Choice>();

  return (
    <>
      <main className="w-screen h-screen bg-gradient-to-r from-ocean to-ocean_floor flex items-center justify-center flex-col gap-5">
        <h1 className="text-white text-3xl font-bold p-2 md:text-4xl lg:text-5xl text-center pt-8 mb-4">
          Små medel stora skillnader
        </h1>
        <div className="w-full flex justify-between max-w-md mx-auto flex-col items-center gap-y-4 md:flex-row">
          <ActionButton text="Donera pengar" />
          <ActionButton text="Hjälp till på andra sätt" />
        </div>
      </main>
    </>
  );
};

export default Index;
