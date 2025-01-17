import gooleMarketing from "../assets/logos/google-marketing.png";
import Strategies from "../assets/logos/marketing-strategies.png";
import business from "../assets/logos/business-automation.png";
import branding from "../assets/logos/branding.png";
import { Link } from "react-router-dom";

const Clients = () => {
  const marketing = [
    { logo: gooleMarketing, text: "Google Marketing" ,to:'/google-marketing'},
    { logo: Strategies, text: "Marketing Strategies and Analysis",to:'/marketing-stratergies' },
    { logo: business, text: "Business Automation",to:'/business-automation' },
    { logo: branding, text: "Branding" ,to:'/branding'},
  ];

  return (
    <>
      {marketing?.map((item,index) => {
        return (
          <Link to={item?.to} key={index} className="p-5 flex flex-col items-center rounded-lg  text-black hover:bg-[#D54A1C] hover:text-white text-center sm:w-[40%]">
            <img src={item?.logo} alt="images"  />
            <p  className="text-center  block mt-4 font-20-700 max-w-80 m-auto">{item?.text}</p>
          </Link>
        );
      })}
    </>
  );
};

export default Clients;
