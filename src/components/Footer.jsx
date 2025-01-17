import { Link } from "react-router-dom";
// import Button from "./Button"
import logo from '../assets/logos/brandLogo.png';
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {

  // const location = useLocation();
  // const hideButtons = location.pathname === '/book-consultant' || location.pathname === '/contact-us';
  return (
    <div>
      {/* {!hideButtons && (
        <div className="flex flex-wrap gap-5 justify-center items-center py-10 bg-[#FFE765] ">
          <Button lable={"Contact Us"} link='/contact-us' />
          <Button lable={"Book Consultation"} link='/book-consultant' />
        </div>
      )} */}
      <div className="py-10 px-2 bg-customlightGreen ">
        <div className="page-container flex flex-wrap gap-5 justify-center md:justify-between">
          <div>
            <Link to={'/'} className="flex gap-2 items-center w-max px-5 border-customPurple border-r-4">
              <img src={logo} alt="TIC Logo" width={60} />
              <p className="font-20-700 text-customPurple">THE INSIGNIA CONSULTANT</p>
            </Link>
            <div className="flex gap-3 mt-5 justify-end ">
              <a href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer">
                <CiInstagram size={50} className="text-white border border-white rounded-full p-2 hover:text-customPurple hover:border-customPurple" />
              </a>
              <a href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebookF size={50} className="text-white border border-white rounded-full p-2 hover:text-customPurple hover:border-customPurple" />
              </a>
              <a href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer">
                <CiTwitter size={50} className="text-white border border-white rounded-full p-2 hover:text-customPurple hover:border-customPurple" />
              </a>
              <a href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn size={50} className="text-white border border-white rounded-full p-2 hover:text-customPurple hover:border-customPurple" />
              </a>

            </div>
          </div>

          <div className="max-sm:my-4">
            <p className="font-20-700 text-white mb-2">Our Services</p>
            <Link to={'/google-marketing'} className="block text-black font-16-500 mb-2 hover:text-customPurple">Google Marketing</Link>
            <Link to={'/marketing-stratergies'} className="block text-black font-16-500 mb-2 hover:text-customPurple">Marketing Strategies</Link>
            <Link to={'/business-automation'} className="block text-black font-16-500 mb-2 hover:text-customPurple">Business Automation</Link>
            <Link to={'/branding'} className="block text-black font-16-500 hover:text-customPurple">Branding</Link>

          </div>
          <div className=" max-sm:my-4">
            <p className="font-20-700 text-white mb-2">Get In Touch</p>
            <p className=" text-black font-16-500">
              <a href="tel:+919881076668" className="block hover:text-customPurple">Phone: 9881076668</a>
              <a href="mailto:abhishek@theinsigniac.com" className="hover:text-customPurple">
                Email: abhishek@theinsigniac.com
              </a>
            </p>

          </div>
        </div>

        {/* <p className="text-center text-white font-24-600">
          Call or email to book an appointment :{" "}
          <a href="tel:+919881076668">9881076668</a> or{" "}
          <a href="mailto:abhishek@theinsigniac.com">
            abhishek@theinsigniac.com
          </a>
        </p> */}
      </div>
    </div>
  )
}

export default Footer
