import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white md:px-20">
        <div className="container mx-auto py-8 px-4">

          <div className="flex flex-col md:flex-row justify-between md:gap-4">

            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold">Anime Blog</h2>
              <p className="mt-2">A blog dedicated to anime and everything otaku!</p>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-10">
                <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
                <p className="mt-2">Get updates on the latest anime news, reviews, and more.</p>
              </div>

              <div className="flex  md:flex-row items-center mt-4 md:mt-0 gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-200 px-4 py-2 text-black rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md  bg-gradient-to-r from-pink-400 to-red-500 rounded-r-lg"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <p className="text-center">© 2023 Anime Blog. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  