import { BarLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center text-3xl min-h-[calc(100vh-116px)]">
      <BarLoader></BarLoader>
    </div>
  );
};

export default Spinner;
