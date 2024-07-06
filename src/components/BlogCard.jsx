import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import placeholderImg from '../assets/404.jpg';
import { MdDeleteForever } from 'react-icons/md';
import { deleteBlog } from '../utils';
const BlogCard = ({ blog, deletable }) => {
  const { cover_image, description, title, published_at, id } = blog;
  const handleDelete = id => {
    deleteBlog(id);
  };
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary p-3 border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-50  "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500 "
          src={cover_image || placeholderImg}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs  dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDelete(blog.id)}
          className="absolute -top-5 -right-5 bg-primary p-3 rounded-full hover:scale-105"
        >
          <MdDeleteForever
            size={20}
            className="text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
};
export default BlogCard;
