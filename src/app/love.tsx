// pages/love.tsx
import Head from 'next/head';
import InfiniteScroll from './infinitescroll';

const Love: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 flex flex-col items-center justify-center">
      <Head>
        <title>Para Minha Amada</title>
        <meta name="description" content="Uma mensagem especial para minha amada esposa." />
      </Head>

      <div className="bg-white p-10 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600">Eu te amo!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Beatriz minha querida, você é a luz da minha vida. Cada momento ao seu lado é precioso, e eu sou eternamente grato por ter você.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Com todo o meu amor,
        </p>
        <p className="mt-4 text-2xl text-pink-600">Alan Ramalho</p>
      </div>

      <InfiniteScroll />
    </div>
  );
};

export default Love;
