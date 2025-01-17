import gooleMarketing from "../assets/logos/image 8.svg";
import Strategies from "../assets/logos/image 9.svg";
import business from "../assets/logos/image 10.svg";
import branding from "../assets/logos/image 11.svg";
// import gooleMarketing from "../assets/logos/google-marketing.png";
// import Strategies from "../assets/logos/marketing-strategies.png";
// import business from "../assets/logos/business-automation.png";
// import branding from "../assets/logos/branding.png";
import Button from "./Button";

const Clients = () => {
  const marketing = [
    { logo: gooleMarketing, text: "Google Marketing", to: '/google-marketing' },
    { logo: Strategies, text: "Marketing Strategies and Analysis", to: '/marketing-stratergies' },
    { logo: business, text: "Business Automation", to: '/business-automation' },
    { logo: branding, text: "Branding", to: '/branding' },
  ];

  return (
    <>
      {marketing?.map((item, index) => {
        return (
          <div key={index} className="p-5 flex flex-col items-center rounded-lg  text-black hover:bg-customPurple hover:text-white group text-center md:w-[47%] lg:w-[40%]">
            <img src={item?.logo} alt="images" className="hover:text-white"  />
            <p className="text-center  block mt-4 font-20-700 max-w-80 m-auto mb-5">{item?.text}</p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button lable='Read More' link={item?.to}  className='border border-white'/>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Clients;
