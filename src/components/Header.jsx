import { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/ticLogo.png';
import logo from '../assets/logos/brandLogo.png';
// import { Dropdown, Space, Typography } from 'antd';
import { MdMenu, MdClose } from "react-icons/md";
import Button from './Button';

const Header = ({ handelConsultant }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
  // const navigate = useNavigate();
  // const location = useLocation();

  // const items = [
  //   {
  //     key: '1',
  //     label: (
  //       <Link
  //         className={`font-18-500 ${location.pathname === '/marketing-stratergies' ? '!text-customSafron' : 'text-black'
  //           }`}
  //       >
  //         Marketing Strategies
  //       </Link>
  //     ),
  //     onClick: () => {
  //       navigate('/marketing-stratergies')
  //       setMenuOpen(!menuOpen);
  //     },
  //   },
  //   {
  //     key: '2',
  //     label: (
  //       <Link
  //         className={`font-18-500 ${location.pathname === '/branding' ? '!text-customSafron' : 'text-black'
  //           }`}
  //       >
  //         Branding
  //       </Link>
  //     ),
  //     onClick: () => {
  //       navigate('/branding')
  //       setMenuOpen(!menuOpen);
  //     },
  //   },
  //   {
  //     key: '3',
  //     label: (
  //       <Link
  //         className={`font-18-500 ${location.pathname === '/business-automation' ? '!text-customSafron' : 'text-black'
  //           }`}
  //       >
  //         Business Automation
  //       </Link>
  //     ),
  //     onClick: () => {
  //       navigate('/business-automation')
  //       setMenuOpen(!menuOpen);
  //     },
  //   },
  //   {
  //     key: '4',
  //     label: (
  //       <Link
  //         className={`font-18-500 ${location.pathname === '/google-marketing' ? '!text-customSafron' : 'text-black'
  //           }`}
  //       >
  //         Google Marketing
  //       </Link>
  //     ),
  //     onClick: () => {
  //       navigate('/google-marketing')
  //       setMenuOpen(!menuOpen);
  //     },
  //   },
  // ];


  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='w-full custom-1600px:w-[75%] m-auto p-1 px-2'>
      <div className='max-md:hidden flex justify-end items-center'>
        <Link to='/about-us' onClick={handleMenuClick} className="block  lg:inline font-12-500 text-white hover:text-customSafron  ">
          ABOUT US
        </Link>
        <span className='text-white px-2 mb-[5px]'>|</span>
        <Link to='/contact-us' onClick={handleMenuClick} className="block lg:inline font-12-500 text-white hover:text-customSafron   ">
          CARRERS
        </Link>
        <span className='text-white px-2 mb-[5px]'>|</span>

        <Link to='/about-us' onClick={handleMenuClick} className="block  lg:inline font-12-500 text-white hover:text-customSafron  ">
          INSIGHTS
        </Link>
        <span className='text-white px-2 mb-[5px]'>|</span>
        <Link to='/contact-us' onClick={handleMenuClick} className="block lg:inline font-12-500 text-white hover:text-customSafron  ">
          CONTACT
        </Link>
      </div>
      <div className="flex flex-wrap  items-center justify-between pb-4  ">
        {/* Logo Section */}
        {/* <Link to={'/'} className="flex gap-2 items-center w-max px-5 border-customSafron border-r-4 "> */}
        <Link to={'/'} className="relative flex gap-2 items-center w-max px-5 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-10 after:bg-customSafron">
          <img src={logo} alt="TIC Logo" width={60} className='bg-white rounded-full' />
          <p className="font-20-700 text-white">THE INSIGNIA CONSULTANT</p>
        </Link>

        {/* Hamburger Icon */}
        <div className="xl:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <MdClose className="text-white text-2xl cursor-pointer" />
          ) : (
            <MdMenu className="text-white text-2xl cursor-pointer" />
          )}
        </div>

        {/* Navigation Links */}
        <div className={`${menuOpen ? 'block' : 'hidden'} absolute top-20  right-10 md:top-24  md:right-80  bg-customDarkblue  max-xl:rounded-lg max-xl:px-5 max-lg:py-2 xl:bg-transparent xl:static xl:flex xl:gap-8 xl:items-center`}
        >
          {/* <Link to={'/'} onClick={handleMenuClick} className="block lg:inline font-18-500 text-white  max-lg:my-2 lg:py-0 hover:text-customSafron">
          Home
        </Link> */}
          <Link to={'/social-media'} onClick={handleMenuClick} className="block xl:inline font-14-700 text-white  max-xl:my-2 xl:py-0 hover:text-customSafron">
            SOCIAL
          </Link>
          <Link to={'/ppc'} onClick={handleMenuClick} className="block xl:inline font-14-700 text-white  max-xl:my-2 xl:py-0 hover:text-customSafron">
            PPC
          </Link>
          <Link to={'/seo'} onClick={handleMenuClick} className="block xl:inline font-14-700 text-white  max-xl:my-2 xl:py-0 hover:text-customSafron">
            SEO
          </Link>
          <Link to={'/stratergy'} onClick={handleMenuClick} className="block xl:inline font-14-700 text-white  max-xl:my-2 xl:py-0 hover:text-customSafron">
            STRATEGY
          </Link>
          <Link to={'/branding'} onClick={handleMenuClick} className="block xl:inline font-14-700 text-white  max-xl:my-2 xl:py-0 hover:text-customSafron">
            Branding
          </Link>
          <Link to={'/'} onClick={handleMenuClick} className="block xl:inline font-14-700 text-white  max-xl:my-2 xl:py-0 hover:text-customSafron">
            DESIGN + DEV
          </Link>
          <Link to={'/'} onClick={handleMenuClick} className="block xl:inline font-14-700 text-white  max-xl:my-2 xl:py-0 hover:text-customSafron">
            WORK
          </Link>
          <div className='hidden max-md:block'>
            <Link to='/about-us' onClick={handleMenuClick} className="block xl:inline font-14-700 text-white  max-xl:my-2 xl:py-0 hover:text-customSafron">
              ABOUT US
            </Link>
            <Link to='/contact-us' onClick={handleMenuClick} className="block xl:inline font-14-700 text-white  max-xl:my-2 xl:py-0 hover:text-customSafron">
              CARRERS
            </Link>
            <Link to='/about-us' onClick={handleMenuClick} className="block xl:inline font-14-700 text-white  max-xl:my-2 xl:py-0 hover:text-customSafron">
              INSIGHTS
            </Link>
            <Link to='/contact-us' onClick={handleMenuClick} className="block xl:inline font-14-700 text-white  max-xl:my-2 xl:py-0 hover:text-customSafron">
              CONTACT
            </Link>
          </div>
          <div className='my-3 hidden max-md:block'>
            <Button lable='FREE CONSULTATION' className='py-3 hover:bg-customSafron' handelConsultant={handelConsultant} />
          </div>

          {/* <Dropdown
          menu={{
            items,
          }}
        >
          <Typography.Link>
            <Space className={`font-18-500 hover:text-customSafron xl:py-0 ${items.some(item => item.label.props.className.includes('text-blue-500')) ? 'text-blue-500' : 'text-white'} `}>
              Services
              <MdKeyboardArrowDown className='text-customSafron'/>
            </Space>
          </Typography.Link>
        </Dropdown> */}
        </div>
        <div className='mt-3 max-md:hidden'>
          <Button lable='FREE CONSULTATION' className='py-3 hover:bg-customSafron' handelConsultant={handelConsultant} />
        </div>


      </div>
    </div>
  );
};

export default Header;
