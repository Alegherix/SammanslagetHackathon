import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface IActionButton {
  text: string;
  choice: Choice;
  setChoice: React.Dispatch<React.SetStateAction<Choice>>;
}

const ActionButton: React.FC<IActionButton> = ({ text, setChoice, choice }) => {
  return (
    <button className="choiceButton" onClick={() => setChoice(choice)}>
      {text}
    </button>
  );
};

type Choice = 'Donate' | 'Help';

const Index = ({}) => {
  const [choice, setChoice] = useState<Choice>();
  const [chosen, setChosen] = useState<boolean>();

  return (
    <>
      <main className="w-screen h-screen bg-gradient-to-r from-ocean to-ocean_floor flex items-center justify-center flex-col gap-5">
        <h1 className="text-white text-3xl font-bold p-2 md:text-4xl lg:text-5xl text-center pt-8 mb-4">
          Små medel stora skillnader
        </h1>
        <AnimatePresence onExitComplete={() => setChosen(true)}>
          {!choice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex justify-between max-w-md mx-auto flex-col items-center gap-y-4 md:flex-row"
            >
              <ActionButton
                text="Donera pengar"
                setChoice={setChoice}
                choice="Donate"
              />
              <ActionButton
                text="Hjälp till på andra sätt"
                setChoice={setChoice}
                choice="Help"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {chosen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center flex-col gap-10"
          >
            <motion.p className="text-gray-300 leading-relaxed text-2xl max-w-screen-sm">
              Tack för din gåva, du vill ju såklart veta vad som händer med din
              gåva när den kommit fram till oss
            </motion.p>
            <button className="choiceButton">Se vad gåvan gör</button>
          </motion.div>
        )}
      </main>
    </>
  );
};

export default Index;
