import { useLoaderData } from 'react-router-dom';

const Author = () => {
  const authorDetails = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl">{authorDetails.user.name}</h1>
    </div>
  );
};

export default Author;
