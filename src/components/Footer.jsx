import { useLocation } from "react-router-dom";
import Button from "./Button"

const Footer = () => {

  const location = useLocation();
  const hideButtons = location.pathname === '/book-consultant' || location.pathname === '/contact-us';
  return (
    <div>
      {!hideButtons && (
        <div className="flex flex-wrap gap-5 justify-center items-center py-10 bg-[#FFE765] ">
          <Button lable={"Contact Us"} link='/contact-us' />
          <Button lable={"Book Consultation"} link='/book-consultant' />
        </div>
      )}
      <div className="py-10 px-2 bg-[#262254]">
        <p className="text-center text-white font-24-600">
          Call or email to book an appointment :{" "}
          <a href="tel:+919881076668">9881076668</a> or{" "}
          <a href="mailto:abhishek@theinsigniac.com">
            abhishek@theinsigniac.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
