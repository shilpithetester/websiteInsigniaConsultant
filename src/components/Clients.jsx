// import gooleMarketing from "../assets/logos/image 8.svg";
// import gooleMarketing from "../assets/logos/google.png";
import Strategies from "../assets/logos/image 9.svg";
import business from "../assets/logos/image 10.svg";
import branding from "../assets/logos/image 11.svg";
// import gooleMarketing from "../assets/logos/google-marketing.png";
// import Strategies from "../assets/logos/marketing-strategies.png";
// import business from "../assets/logos/business-automation.png";
// import branding from "../assets/logos/branding.png";

import socialMedia from '../assets/BannerImages/icons/service.webp' 
import seo from '../assets/BannerImages/icons/seo.webp' 
import ppc from '../assets/BannerImages/icons/ppc.webp' 
import contentMarketing from '../assets/BannerImages/icons/contentmarketing.webp' 
import digitalStratergy from '../assets/BannerImages/icons/digitalStratergy.webp' 

import Button from "./Button";

const Clients = () => {
  const marketing = [
    { logo: socialMedia, heading: "Social Media",text:"Maximize your social media presence with our expert strategies. We help you build strong relationships with your followers, increase brand loyalty, and achieve your marketing objectives.", to: '/google-marketing' },
    { logo: seo, heading: "Seo",text:"Boost your online visibility with expert SEO services. We help businesses of all sizes increase organic traffic, improve search engine rankings, and achieve their digital marketing goals.", to: '/marketing-stratergies' },
    { logo: ppc, heading: "Ppc", text:"Drive targeted traffic and conversions with our expert PPC management. We create high-performing campaigns on Google Ads and more to deliver measurable results.",to: '/business-automation' },
    { logo: contentMarketing, heading: "Content Marketing",text:"Attract, engage, and convert your target audience with compelling content. Our expert team creates high-quality content that drives traffic, builds brand awareness, and generates leads.", to: '/branding' },
    { logo: digitalStratergy, heading: "Digital strategy",text:"Develop and execute winning digital strategies that drive growth. We help businesses achieve their online marketing goals through data-driven insights and integrated campaigns.", to: '/branding' },
    { logo: branding, heading: "Branding",text:"Unlock the power of your brand. Our expert branding services help you differentiate yourself from the competition, increase brand loyalty, and drive business growth.", to: '/branding' },
    { logo: branding, heading: "Digital PR",text:"Get your brand noticed with our data-driven Digital PR strategies. We identify and leverage relevant media opportunities to build credibility, generate leads, and enhance your reputation online.", to: '/branding' },
    { logo: branding, heading: "Web Design", to: '/branding' },
  ];

  return (
    <>
      {marketing?.map((item, index) => {
        return (
          <div key={index} className="px-5 py-8 flex flex-wrap flex-col items-center rounded-lg  text-black hover:bg-customSafron hover:text-white group text-center w-full md:w-[47%] xl:w-[25%]">
            <img src={item?.logo} alt="images" className="group-hover:invert   w-16 h-16" />
            <h2 className="text-center  block my-4 font-24-900 max-w-80 m-auto ">{item?.heading}</h2>
            <p className="mb-5 font-16-400">{item?.text}</p>
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
