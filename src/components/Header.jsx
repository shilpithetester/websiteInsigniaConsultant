import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import logo from '../assets/ticLogo.png';
import logo from '../assets/logos/brandLogo.png';
import { Dropdown, Space, Typography } from 'antd';
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
  const navigate = useNavigate();
  const location = useLocation(); 

  const items = [
    {
      key: '1',
      label: (
        <div
          className={`font-18-500 ${
            location.pathname === '/marketing-stratergies' ? 'text-customSafron' : 'text-black'
          }`}
        >
          Marketing Strategies
        </div>
      ),
      onClick: () => {
        navigate('/marketing-stratergies')
        setMenuOpen(!menuOpen);
      },
    },
    {
      key: '2',
      label: (
        <div
          className={`font-18-500 ${
            location.pathname === '/branding' ? 'text-customSafron' : 'text-black'
          }`}
        >
          Branding
        </div>
      ),
      onClick: () =>{ 
        navigate('/branding')
        setMenuOpen(!menuOpen);
      },
    },
    {
      key: '3',
      label: (
        <div
          className={`font-18-500 ${
            location.pathname === '/business-automation' ? 'text-customSafron' : 'text-black'
          }`}
        >
          Business Automation
        </div>
      ),
      onClick: () => {
        navigate('/business-automation')
        setMenuOpen(!menuOpen);
      },
    },
    {
      key: '4',
      label: (
        <div
          className={`font-18-500 ${
            location.pathname === '/google-marketing' ? 'text-customSafron' : 'text-black'
          }`}
        >
          Google Marketing
        </div>
      ),
      onClick: () => {
        navigate('/google-marketing')
        setMenuOpen(!menuOpen);
      },
    },
  ];


  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex flex-wrap items-center justify-center custom-480px:justify-between py-4 w-11/12 custom-1450px:w-3/5 m-auto">
      {/* Logo Section */}
      <Link to={'/'} className="flex gap-2 items-center w-max px-5 border-customSafron border-r-4">
        <img src={logo} alt="TIC Logo" width={60} className='bg-white rounded-full'/>
        <p className="font-20-700 text-white">THE INSIGNIA CONSULTANT</p>
      </Link>

      {/* Hamburger Icon */}
      <div className="lg:hidden" onClick={toggleMenu}>
        {menuOpen ? (
          <MdClose className="text-white text-2xl cursor-pointer" />
        ) : (
          <MdMenu className="text-white text-2xl cursor-pointer" />
        )}
      </div>

      {/* Navigation Links */}
      <div className={`${menuOpen ? 'block' : 'hidden'} absolute top-28 right-14 custom-480px:top-16 custom-480px:right-10  bg-customDarkblue  max-lg:rounded-lg max-lg:px-5 max-lg:py-2 lg:bg-transparent lg:static lg:flex lg:gap-8 lg:items-center`}
      >
        <Link to={'/'} onClick={handleMenuClick}  className="block lg:inline font-18-500 text-white  max-lg:my-2 lg:py-0 hover:text-customSafron">
          Home
        </Link>

        <Dropdown
          menu={{
            items,
          }}
        >
          <Typography.Link>
            <Space className={`font-18-500 hover:text-customSafron lg:py-0 ${items.some(item => item.label.props.className.includes('text-blue-500')) ? 'text-blue-500' : 'text-white'} `}>
              Services
              <MdKeyboardArrowDown className='text-customSafron'/>
            </Space>
          </Typography.Link>
        </Dropdown>

        <Link to='/about-us' onClick={handleMenuClick} className="block  lg:inline font-18-500 text-white hover:text-customSafron  max-lg:my-2  lg:py-0">
          About Us
        </Link>
        <Link to='/contact-us' onClick={handleMenuClick}  className="block lg:inline font-18-500 text-white hover:text-customSafron   lg:py-0">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
