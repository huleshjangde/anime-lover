import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>

    <nav className="bg-slate-200  fixed top-0 left-0 w-screen flex z-20 backdrop-blur-sm  capitalize font-medium  items-center">
      <div className="container mx-auto px-5 md:px-10 py-3 flex items-center justify-between">
        <div className="">
          <Link href="/" className="text-1xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 mb-4 animate-gradient">
            Anime-Lover
          </Link>
        </div>
        <p>huleshjangde1@gmail.com</p>
        <ul className="md:flex items-center hidden ">
          <li className="ml-4">
            <Link href="/" className="hover:text-blue-500">
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/Blognav" className="hover:text-blue-500">
              Blog
            </Link>
          </li>
          <li className="ml-4" >
            <Link href="/Sread" className="hover:text-blue-500">
              Shorts
            </Link>
          </li>
          <li className="ml-4">
            <Link className="hover:text-blue-500" href="/Treading">
            Trending
            </Link>
          </li>
        </ul> 
        <button
        className="text-2xl font-bold md:hidden"
        onClick={toggleMenu}
      >
        { isMenuOpen ? <div>x</div> : <div>=</div>}
      </button>
      </div>

    </nav>
   <div className={`flex items-center w-screen h-screen  ${isMenuOpen ? '' : 'hidden'}`}   >
    <ul className={`flex items-center w-screen  gap-5 text-2xl uppercase font-bold flex-col relative top-0  left-0 z-10  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 mb-4 animate-gradient`}>
        <li className="ml-4">
          <Link href="/" className="hover:text-blue-500" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className="ml-4">
          <Link href="/Blognav" className="hover:text-blue-500" onClick={toggleMenu}>
            Blog
          </Link>
        </li>
        <li className="ml-4">
          <Link href="/Sread" className="hover:text-blue-500" onClick={toggleMenu}>
            Shorts
          </Link>
        </li>
        <li className="ml-4">
          <Link className="hover:text-blue-500" href="/Treading" onClick={toggleMenu}>
            Trending
          </Link>
        </li>
      </ul>
      </div>
    </>
  );
};

export default Navbar;
