import React, { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Link from 'next/link';

interface ISetChoice {
  setChoice: React.Dispatch<React.SetStateAction<Choice>>;
}

interface IActionButton extends ISetChoice {
  text: string;
  choice: Choice;
}

const HelpComponent: React.FC<ISetChoice> = ({ setChoice }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-3 text-gray-300 leading-relaxed text-xl max-w-screen-sm px-4"
    >
      <p>
        Det är inte alltid som man har pengar över att skänka, vi förstår! Men
        det finns andra sätt du kan hjälpa till på, till exempel kan du bidra
        som volontär på vårt frukostkafé, eller på något av våra jourboenden.
      </p>
      <p>
        Läs mer om hur du kan engagera dig{' '}
        <a
          className="font-bold hover:underline "
          href="https://raddningsmissionen.se/engagera-dig
"
        >
          Här.
        </a>
      </p>
      <div className="w-full flex items-center my-5">
        <div className="separator" />
        <p className="px-4">Eller</p>
        <div className="separator" />
      </div>
      <button
        className="rounded-md border-2 border-white p-2 duration-150 hover:bg-[#ffffff33]"
        onClick={() => setChoice('Donate')}
      >
        Se vad en gåva kan göra
      </button>
    </motion.div>
  );
};

const DonationComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      exit={{ opacity: 0 }}
      className="flex items-center flex-col gap-10"
    >
      <motion.p className="text-gray-300 leading-relaxed text-xl max-w-screen-sm px-2">
        Tack för att du väljer att donera, du vill ju såklart veta vad som
        händer med din gåva när den kommit fram till oss.
      </motion.p>

      <Link href="/unity">
        <a className="choiceButton">Se vad din gåva gör</a>
      </Link>
    </motion.div>
  );
};

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
      <main className="w-screen h-screen gradient flex items-center justify-center flex-col gap-5">
        <AnimateSharedLayout>
          <motion.h1
            layout
            className="text-white text-3xl font-bold p-2 md:text-4xl lg:text-5xl text-center pt-8 mb-4 leading-relaxed xl:mb-8"
          >
            Små medel <span className="border-b-4 border-[#15A2EF]">stora</span>{' '}
            skillnader
          </motion.h1>
          <AnimatePresence onExitComplete={() => setChosen(true)}>
            {!choice && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex justify-between max-w-lg mx-auto flex-col items-center gap-y-4 md:flex-row"
              >
                <ActionButton
                  text="Se vad en gåva kan göra"
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

          {chosen && choice === 'Help' && (
            <HelpComponent setChoice={setChoice} />
          )}
          {chosen && choice === 'Donate' && <DonationComponent />}
        </AnimateSharedLayout>
      </main>
    </>
  );
};

export default Index;
