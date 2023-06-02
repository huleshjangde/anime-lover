import React from "react";
import "./style.css";
import { data } from '../data';

const BlogSection = (rev) => {
  const classes = `w-full md:flex md:px-10 ${rev.rev}`;

  const blogData = data[rev.pnum]; // data num

  return (
    <>
      <section className={classes}>
        <div
          className="left w-full md:w-1/2 h-72 bg-cover bg-center"
          style={{ backgroundImage: `url("${blogData.image}")` }}
        ></div>

        <div className="right w-full md:w-1/2 flex items-center px-5 md:px-10 bg-red-400 bg-opacity-10 relative">
          <div
            className="bg-cover bg-center w-full h-full absolute left-0 opacity-25 -z-0"
            style={{ backgroundImage: 'url("./imgs/blogbg.png")' }}
          ></div>
          <div className="w-full h-full absolute left-0 bg-white opacity-70"></div>

          <div className="h-auto w-full flex-col flex z-30">
            <div className="flex gap-4 my-4 md:my-1">
              <p className="font-medium">{blogData.category}</p>
              <p>{blogData.postDate}</p>
            </div>

            <p className="title my-1 text-2xl font-bold">{blogData.title}</p>

            <div className="desc my-4 text-gray-500 line-clamp-3">
              {blogData.post}
            </div>

            <div className="flex gap-4 items-center my-4 justify-between">
              <p className="font-normal text-gray-600">{blogData.readTime}</p>
              <button className="text-white bg-sky-500 p-2 rounded-md hover:bg-sky-600">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
