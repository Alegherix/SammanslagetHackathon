import Head from 'next/head';

const Meta: React.FC = () => {
  return (
    <Head>
      <title>Små summor Stora skillnader</title>
      <meta
        property="og:title"
        content="Små summor, Stora skillnader"
        key="title"
      />
      <meta
        property="og:description"
        content="Små summor, Stora skillnader."
        key="description"
      />
      <meta name="description" content="Små summor, Stora skillnader."></meta>
    </Head>
  );
};

export default Meta;
