import React from 'react';

interface IActionButton {
  text: string;
}

const ActionButton: React.FC<IActionButton> = ({ text }) => {
  return <button className="border-2 rounded-md">{text}</button>;
};

const Index = ({}) => {
  return (
    <>
      <main className="w-screen h-screen">
        <h1 className="text-5xl text-center mt-4 font-bold">
          Hundra kronor för en dag
        </h1>
        <div className="flex h-full w-full mt-12 justify-center">
          <div className="w-[600px] h-[400px] bg-gray-300">
            <ActionButton text="Skänk en hundring" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
