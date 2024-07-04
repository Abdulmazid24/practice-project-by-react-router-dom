import { useLoaderData } from 'react-router-dom';
import placeholderImg from '../assets/404.jpg';

const Content = () => {
  const blogDetails = useLoaderData();

  const { cover_image, description, title, published_at, tags, body_html } =
    blogDetails;
  return (
    <div className=" mx-auto border border-opacity-30 p-2 ">
      <img
        role="presentation"
        className="object-cover w-full rounded-lg   "
        src={cover_image || placeholderImg}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
        {tags.map(tag => (
          <a
            key={tags.index}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className="font-medium space-y-2">
        <h3 className="text-2xl font-semibold ">{title}</h3>
        {body_html}
      </div>
    </div>
  );
};

export default Content;
