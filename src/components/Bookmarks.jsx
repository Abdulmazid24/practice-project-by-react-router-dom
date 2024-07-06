import { useEffect, useState } from 'react';
import { getBlogs } from '../utils';
import BlogCard from './BlogCard';

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-4 lg:grid-cols-6 py-8">
      {blogs.slice(1, 19).map(blog => (
        <BlogCard deletable={true} key={blog.id} blog={blog}></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
