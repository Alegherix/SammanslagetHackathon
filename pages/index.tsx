import React, { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../src/components/Navbar';

interface ISetChoice {
  setHelp: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IActionButton extends ISetChoice {
  text: string;
}

const HelpComponent: React.FC = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-3 text-gray-300 leading-relaxed text-lg max-w-screen-sm px-4 mt-8"
    >
      <div className="separator  mx-auto rounded-full my-2" />
      <p>
        Det är inte alltid som man har pengar över att skänka, vi förstår! Men
        det finns andra sätt du kan hjälpa till på, till exempel kan du bidra
        som volontär på vårt frukostkafé, eller på något av våra jourboenden.
      </p>
      <p>
        Läs mer om hur du kan engagera dig{' '}
        <a
          className="font-bold border-b-2 border-red-500"
          href="https://raddningsmissionen.se/engagera-dig
"
        >
          Här
        </a>
      </p>
    </motion.div>
  );
};

const ActionButton: React.FC<IActionButton> = ({ text, setHelp }) => {
  return (
    <button className={`choiceButton`} onClick={() => setHelp(true)}>
      {text}
    </button>
  );
};

const Index = ({}) => {
  const [help, setHelp] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen gradient flex items-center justify-center flex-col gap-5">
        <AnimateSharedLayout>
          <motion.h1
            layout
            className="text-white text-3xl font-bold p-2 md:text-4xl lg:text-5xl text-center pt-8 mb-4 leading-relaxed xl:mb-4"
          >
            Små summor <span className="border-b-4 border-accent">stora</span>{' '}
            skillnader
          </motion.h1>

          <motion.p
            layout
            className="text-gray-300 mx-auto max-w-screen-sm text-lg leading-relaxed mb-8"
          >
            Säg att du skänker en gåva till Räddningsmissionen. Tack!
            <br />
            Men ... du vill ju såklart veta vad som händer med dina pengar sen.{' '}
            <br />
            Här kan du se allt som din gåva hjälper till med under en dag.
          </motion.p>

          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex justify-between max-w-xl mx-auto flex-col items-center gap-y-4 md:flex-row"
            >
              <Link href="/story" passHref>
                <motion.button
                  layout
                  className={`choiceButton mx-auto ${help && 'w-full '}`}
                  transition={{ duration: 0.2 }}
                >
                  Se vad en gåva kan göra
                </motion.button>
              </Link>
              {!help && (
                <ActionButton
                  text="Hjälp till på andra sätt"
                  setHelp={setHelp}
                />
              )}
            </motion.div>
            {help && <HelpComponent />}
          </AnimatePresence>
        </AnimateSharedLayout>
      </main>
    </>
  );
};

export default Index;
