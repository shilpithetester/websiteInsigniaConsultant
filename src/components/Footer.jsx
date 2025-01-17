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
      <div className="py-10 px-2 bg-customDarkblue ">
        <div className="page-container flex flex-wrap gap-5 justify-center md:justify-between">
          <div>
            <Link to={'/'} className="flex gap-2 items-center w-max px-5 border-customSafron border-r-4">
              <img src={logo} alt="TIC Logo" width={60} className='bg-white rounded-full' />
              <p className="font-20-700 text-white">THE INSIGNIA CONSULTANT</p>
            </Link>
            <div className="flex gap-3 mt-5 justify-center ">
              <a href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer">
                <CiInstagram size={50} className="text-white border border-white rounded-full p-2 hover:text-customSafron hover:border-customSafron" />
              </a>
              <a href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebookF size={50} className="text-white border border-white rounded-full p-2 hover:text-customSafron hover:border-customSafron" />
              </a>
              <a href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer">
                <CiTwitter size={50} className="text-white border border-white rounded-full p-2 hover:text-customSafron hover:border-customSafron" />
              </a>
              <a href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn size={50} className="text-white border border-white rounded-full p-2 hover:text-customSafron hover:border-customSafron" />
              </a>

            </div>
          </div>

          <div className="max-sm:my-4">
            <p className="font-22-700 text-white mb-2">Our Services</p>
            <ul className="list-disc marker:text-customSafron mt-5 pl-5">
              <li>
                <Link to={'/google-marketing'} className="block text-white font-16-500 mb-2 hover:text-customSafron">Google Marketing</Link>
              </li>
              <li>
                <Link to={'/marketing-stratergies'} className="block text-white font-16-500 mb-2 hover:text-customSafron">Marketing Strategies</Link>
              </li>
              <li>
                <Link to={'/business-automation'} className="block text-white font-16-500 mb-2 hover:text-customSafron">Business Automation</Link>

              </li>
              <li>
                <Link to={'/branding'} className="block text-white font-16-500 hover:text-customSafron">Branding</Link>

              </li>
            </ul>

          </div>
          <div className=" max-sm:my-4">
            <p className="font-22-700 text-white mb-2">Get In Touch</p>
            <p className=" text-white font-16-500">
              <a href="tel:+919881076668" className="block hover:text-customSafron">Phone: 9881076668</a>
              <a href="mailto:abhishek@theinsigniac.com" className="hover:text-customSafron">
                Email: abhishek@theinsigniac.com
              </a>
            </p>

          </div>
        </div>

        <hr className="text-[#6d6a6b] bg-[#6d6a6b] mt-5" />
        <div className="page-container text-end pt-4 ">
          <p className="text-white">© TIC. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
