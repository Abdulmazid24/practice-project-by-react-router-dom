import wave from '../assets/wave (1).svg';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100svh-116px)]">
      <Hero></Hero>
      <img className="absolute bottom-0" src={wave} alt="" />
    </div>
  );
};

export default Home;
