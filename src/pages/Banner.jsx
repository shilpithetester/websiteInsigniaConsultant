import video from "../assets/video/bannerVideo.mp4";
import Clients from "../components/Clients";

const Banner = () => {
  const List = [
    {
      list: (
        <p>
          <b>Expertise: </b> Marketing consultants have a deep understanding of
          marketing principles and best practices. They can help you develop a
          comprehensive marketing strategy that aligns with your business goals.
        </p>
      ),
    },
    {
      list: (
        <p>
          {" "}
          <b>Objectivity: </b> Marketing consultants can provide an objective
          perspective on your marketing efforts. They can help you identify
          areas for improvement and develop strategies that are more likely to
          achieve your desired results.
        </p>
      ),
    },
    {
      list: (
        <p>
          {" "}
          <b>Time: </b> Marketing consultants can free up your time so that you
          can focus on other aspects of your business. They can handle the
          day-to-day tasks of marketing, such as creating content, managing
          social media, and running ad campaigns.
        </p>
      ),
    },
    {
      list: (
        <p>
          {" "}
          <b>Track record of success: </b> The Insignia Consultant has a proven
          track record of helping businesses achieve their marketing goals.
        </p>
      ),
    },
    {
      list: (
        <p>
          {" "}
          <b>Broad range of experience: </b> The Insignia Consultant has
          experience in a variety of industries, so they can tailor their
          approach to your specific needs.
        </p>
      ),
    },
    {
      list: (
        <p>
          {" "}
          <b>Client-centric approach:</b> The Insignia Consultant is committed
          to putting their clients first. They will work closely with you to
          develop a marketing strategy that is right for your business.
        </p>
      ),
    },
  ];

  return (
    <div className="mb-5">
      {/* <div className="absolute top-0 w-full z-50">
        <Header />
      </div> */}
      <div className="w-full h-[75vh] relative">
        <video
          src={video}
          autoPlay
          muted
          loop
          className="w-full h-full  object-cover"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-customDarkblue bg-opacity-50"></div>
        <div className="absolute top-1/3 left-[10%] md:left-[19%] ">
          <div className="max-w-[800px]">
            <h2 className="font-65-900 text-white  leading-tight after:content-[''] after:block after:w-1/4 after:h-[4px] after:bg-customSafron after:mt-2 "> Clever Ideas Captivating Results.</h2>
            <h3 className="font-25-800 text-white mt-5 ">SEO, Digital & Performance Marketing Agency</h3>
            <p className="font-22-500 text-white mt-5 ">Our Research First Approach generates great results for our Client</p>
          </div>
        </div>
      </div>
      {/* 
      <div className="py-10 bg-customPurple">
        <h4 className="text-center font-40-700 mb-5 text-white">The Insignia Consultant</h4>
        <p className="font-18-500 page-container text-center   text-white">
          In a world where businesses are constantly seeking ways to stand out
          from the crowd, effective marketing is no longer a luxury but a
          necessity. At The Insignia Consultant, we understand the power of
          marketing to transform businesses and propel them to new heights. We
          are a team of passionate marketing experts dedicated to helping
          businesses achieve their goals through innovative and strategic
          marketing solutions.
        </p>
      </div> */}

      <div className="mt-5 py-5  page-container">
        <h2 className=" max-w-full w-max m-auto font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">How TIC help our clients</h2>
        <p className="text-center font-24-600 py-1">
          "Your success is our passion."
        </p>
      </div>

      <div className="  page-container  my-5 flex flex-wrap justify-center md:justify-between  ">
        <Clients />
      </div>

      <div className="mt-5 py-5 page-container">
        <h2 className=" max-w-full w-max m-auto font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Why TIC</h2>

        {/* <h2 className="text-center font-40-700 ">Why TIC</h2> */}
        <ul className="list-disc marker:text-customSafron mt-5 pl-5">
          {List?.map((item, index) => {
            return (
              <li key={index} className="font-20-400 mt-3">
                {item?.list}
              </li>
            );
          })}
        </ul>
      </div>

    </div>
  );
};

export default Banner;
