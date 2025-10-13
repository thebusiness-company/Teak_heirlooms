import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();

    const truncateText = (text,wordLimit) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

  return (
    <>
      <div 
      className="bg-[#FFF] overflow-hidden mx-auto w-11/12 sm:w-3/4 md:w-3/5 lg:w-3/4 shadow-lg p-4 mb-8 cursor-pointer"
      onClick={() => navigate(`/blogs/${blog.id}`)}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-left">
          <h1 className="text-lg font-semibold text-[#3B493F]">{blog.title}</h1>
          <p className="mt-2">{truncateText(blog.content, 15)}</p>
          {blog.content.split(" ").length > 15 && (
            <button
              onClick={() => navigate(`/blogs/${blog.id}`)}
              className="text-[#9C0300] mt-2 cursor-pointer"
            >
              Read More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogCard;
