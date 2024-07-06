import toast from 'react-hot-toast';
export const getBlogs = () => {
  let blogs = [];
  let storedBlog = localStorage.getItem('blog');

  if (storedBlog) {
    blogs = JSON.parse(storedBlog);
  }
  return blogs;
};

// save
export const saveBlog = blog => {
  let blogs = getBlogs();
  const isExist = blogs.find(b => b.id === blogs.id);
  if (isExist) {
    return toast.error('Already Bookmarked');
  }
  blogs.push(blog);
  localStorage.setItem('blogs', JSON.stringify(blogs));
  toast.success('Blog Bookmarked Successfully!');
};
