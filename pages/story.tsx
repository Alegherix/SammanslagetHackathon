import React, { useEffect, useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { useRouter } from 'next/dist/client/router';

const unityContext = new UnityContext({
  loaderUrl: './Build/Sammanslaget Builds.loader.js',
  dataUrl: './Build/Sammanslaget Builds.data',
  frameworkUrl: './Build/Sammanslaget Builds.framework.js',
  codeUrl: './Build/Sammanslaget Builds.wasm',
});

interface IData {
  text: string;
}

const data: IData[] = [
  {
    text: 'Genom donationer från livsmedelsbranschen tar vi hand om matsvinn på ett ekologiskt sätt',
  },
  {
    text: 'Sammanlagt driver vi SJU olika boende-program, bara i Göteborg',
  },
  {
    text: 'En del av din donation går till stöd och rådgivning',
  },
  {
    text: 'Cirka 3 700 personer i Göteborg kan räknas som hemlösa',
  },
  {
    text: 'Varje år kan man självklart också fira julafton på 35:an!',
  },
];

const Overlay = ({ setOverlay }) => {
  const [fadeToWhite, setFadeToWhite] = useState<boolean>(false);
  return (
    <motion.div
      key="headingContainer"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 gradient w-screen h-screen flex flex-col gap-4 items-center justify-center z-20"
    >
      <div>
        <h1 className="text-7xl text-[#E07D41] leading-relaxed">
          Räddnings<span className="text-white">missionen</span>
        </h1>
        <h2 className="text-5xl text-white text-center">Presenterar</h2>
      </div>

      <motion.div
        key="sumContainer"
        initial={{ opacity: 0 }}
        transition={{ duration: 4 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: -100 }}
        onAnimationComplete={() => setFadeToWhite(true)}
      >
        <p key="sumText" className="text-white text-lg">
          Små summor, stora skillnader
        </p>
      </motion.div>
      {fadeToWhite && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={() => setOverlay(false)}
          className="absolute h-screen w-screen inset-0 z-30 bg-white"
        ></motion.div>
      )}
    </motion.div>
  );
};

const InfoCol = ({ msg, setActivePopup, active }) => {
  return (
    <div className="absolute bottom-[5%] left-[5%] z-10">
      {!active && (
        <FaHeart
          onMouseEnter={() => setActivePopup(true)}
          className="text-red-500 text-3xl animate-pulse"
        />
      )}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="rounded-md p-4 max-w-sm bg-gray-300"
        >
          <p>{msg}</p>
        </motion.div>
      )}
    </div>
  );
};

export default function Story() {
  const [overlay, setOverlay] = useState<boolean>();
  const [currentPage, setCurrentPage] = useState<number>();
  const [activePopup, setActivePopup] = useState<boolean>();

  const router = useRouter();

  useEffect(() => {
    setOverlay(true);

    unityContext.on('TheEnd', () => router.push('/donate'));

    unityContext.on('PageNumber', (number) => {
      console.log(number);

      setCurrentPage(number);
      setActivePopup(false);
    });
  }, []);

  return (
    <>
      {overlay && <Overlay setOverlay={setOverlay} />}
      <div className="relative gradient">
        {data?.[currentPage]?.text && (
          <InfoCol
            msg={data[currentPage].text}
            setActivePopup={setActivePopup}
            active={activePopup}
          />
        )}
        <Unity className="h-screen w-screen" unityContext={unityContext} />
      </div>
    </>
  );
}
