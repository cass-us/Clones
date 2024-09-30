import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import CloseIcon from '@mui/icons-material/Close';
import logo from "./assets/flm-green-favicon.png";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <section className="relative bg-[#00723f] h-[180px]  md:h-[250px] p-0 m-0">
      <nav className='flex bg-white h-[120px] md:h-[180px]'>
        <div className='md:w-full w-full flex justify-between items-center p-4'>
          
          <div onClick={toggleMenu} className='md:hidden cursor-pointer'>
            <MenuIcon className="text-[#00723f]" style={{ fontSize: '2.5rem' }} />
          </div>
          
          <div>
            <a href="/">
              <img src={logo} alt="Logo" className='w-20 m-4 md:w-32 md:ml-64' />
            </a>
          </div>

          <div className='hidden md:flex justify-center flex-grow'>
            <ul className='flex space-x-16 md:text-center'>
              <li><a href="#" className='md:text-2xl font-bold roboto-regular sm:font-semibold text-[#00723f]'>SPECIALS</a></li>
              <li><a href="#" className='md:text-2xl font-bold roboto-regular sm:font-semibold text-[#00723f]'>RECIPES</a></li>
              <li><a href="#" className='md:text-2xl font-bold  sm:font-semibold text-[#00723f]'>EARTH LOVERS</a></li>
              <li><a href="#" className='md:text-2xl font-bold  sm:font-semibold text-[#00723f]'>FRESH NEWS</a></li>
              <li><a href="#" className='md:text-2xl font-bold  sm:font-semibold text-[#00723f]'>SUBSCRIBE</a></li>
              <li><a href="#" className='md:text-2xl font-bold  sm:font-semibold text-[#00723f]'>CONTACT</a></li>
              <SearchSharpIcon 
                style={{ fontSize: '2rem' }} 
                className='text-[#00723f] md:block hidden md:mr-20 cursor-pointer'
                onClick={toggleSearch} 
              />
            </ul>
          </div>

          <div className='md:hidden flex items-center'>
            <SearchSharpIcon 
              style={{ fontSize: '2.5rem' }} 
              className='text-[#00723f] md:block hidden md:mr-20 cursor-pointer'
              onClick={toggleSearch} 
            /> 
          </div>
        </div>
      </nav>

      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 sm:w-2/3 max-w-md relative">
            <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleSearch}>
              <CloseIcon style={{ fontSize: '2.5rem', color: '#00723f' }} />
            </div>
            <h2 className='text-center font-bold text-xl p-2 mb-8 mt-20'>Quick Search</h2>
            <p className='text-center mb-8'>Looking for a specific recipe, store, post or page? Use this quick search form</p>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 focus:outline-none"
              />
              <SearchSharpIcon 
                style={{ fontSize: '2.5rem' }} 
                className='bg-[#00723f] text-white w-[100px]' 
              />
            </div>
          </div>
        </div>
      )}

      <div className={`fixed inset-0 bg-[#00723f] p-4 z-50 transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}>
          <CloseIcon className="text-white" style={{ fontSize: '2.5rem' }} />
        </div>

        <section className="flex flex-col items-start justify-center h-full">
          <div className='mt-3 mb-4'>
            <h2 className='font-bold text-xl text-white'>FOOD LOVER'S MARKET</h2>
          </div>
          <ul className='ml-4'>
            {["ABOUT", "SPECIALS", "RECIPES", "FIND A STORE", "EARTH LOVERS", "FRESH NEWS", "SIGN UP FOR OUR NEWSLETTER", "CONTACT"].map((item, index) => (
              <div key={index}>
                <li className='font-bold text-white pb-2 cursor-pointer'>{item}</li>
                <div className='border-b border-white mb-2' />
              </div>
            ))}
          </ul>
        </section>
      </div>

      <div className='sm:ml-2 flex md:ml-48 md:m-1'>
        <p className='sm:ml-2 text-white ml-20 m-2 gap-4 md:text-xl '>
          Viewing deals at <a className='underline font-semibold' href="#">Food Lover’s Market Lynnwood Lane</a>
          <span className='font-bold'>Open</span> | Closes at 19:00 
          <a href="#" className='underline font-bold'>View deals at a different store</a>
        </p> 
      </div>
    </section>
  );
}

export default Hero;
