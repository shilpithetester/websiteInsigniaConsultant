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

       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="font-72-500 text-white"> Your Gateway to Sucess</p>
        </div>
      </div>

      <div className="py-10 bg-customlightGreen">
        <h4 className="text-center font-24-700 mb-5">The Insignia Consultant</h4>
        <p className="font-18-500 page-container   text-black">
          In a world where businesses are constantly seeking ways to stand out
          from the crowd, effective marketing is no longer a luxury but a
          necessity. At The Insignia Consultant, we understand the power of
          marketing to transform businesses and propel them to new heights. We
          are a team of passionate marketing experts dedicated to helping
          businesses achieve their goals through innovative and strategic
          marketing solutions.
        </p>
      </div>

      <div className="mt-5 py-5">
        <h2 className="text-center font-40-700">How we help our clients</h2>
        <p className="text-center font-24-400 py-1">
          "Your success is our passion."
        </p>
      </div>

      <div className="  page-container  my-5 flex flex-wrap justify-center md:justify-between  ">
        <Clients  />
      </div>

      <div className="mt-5 py-5 page-container">
        <h2 className="text-center font-40-700 ">Why TIC</h2>
        <ul className="list-disc marker:text-[#262254] mt-5 pl-5">
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
