import googleMarketing from "../assets/BannerImages/googleMarketing.jpg";
import seoImg from '../assets/GoogleList/seo.jpg' ;
import ppc from '../assets/GoogleList/pay-per-click.jpg';
import displayAdvertising from '../assets/GoogleList/display-ads.png';
import shoppingAds from '../assets/GoogleList/shopping-ads.jpg';
import videoAds from '../assets/GoogleList/video-ad.jpg';
import appPromotion from '../assets/GoogleList/promotion.jpg';
import localAds from '../assets/GoogleList/google-ads.png';
import googleBusiness from '../assets/GoogleList/GMB.jpg';
import leadGeneration from '../assets/GoogleList/lead-generation.jpg'
import { Link } from "react-router-dom";

const GooglMarketing = () => {

    const Lists=[
        {logo:seoImg, link:'Search engine optimization (SEO)',to:'/seo' ,text:'SEO, or search engine optimization, is the process of improving the visibility and ranking of a website or web page in search engine results pages (SERPs). The goal of SEO is to increase the amount of organic traffic to a website, which can lead to more leads, sales, and brand awareness. '},
        {logo:ppc, link:'Pay -Per-Click (PPC)',to:'/paytopay' ,text:'Pay-per-click (PPC) is a type of internet marketing where advertisers pay a fee each time one of their ads is clicked. PPC is a popular way to drive traffic to websites and generate leads and sales.  '},
        {logo:displayAdvertising, link:'Display Advertising ',to:'/display-advertising' ,text:'Display advertising is a type of online advertising that uses visually appealing content, such as images, videos, and GIFs, to promote products or services. Display ads can be placed on a variety of websites and apps, and can be targeted to specific audiences based on their interests, demographics, and online behavior. '},
        {logo:shoppingAds, link:'Shopping Ads',to:'/shoping-ads' ,text:'Shopping ads, also known as product listing ads (PLAs), are a type of online advertising that allows merchants to showcase their products in search results. Shopping ads typically include a product image, title, price, and merchant name. They can also include additional information such as reviews, shipping information, and promotions. '},
        {logo:videoAds, link:'Video Ads ',to:'/video-ads' ,text:'Video ads are short videos that are used to promote products or services. They can be played before, during, or after other videos, or they can be displayed on websites and other online platforms. Video ads can be very effective in capturing people\'s attention and communicating a message in a short amount of time.'},
        {logo:appPromotion, link:'App Promotion Ads ',to:'/promotion-ads' ,text:'App promotion ads are a type of online advertising that is used to promote mobile apps to potential users. App promotion ads can be displayed on a variety of platforms, including search engines, social media, and other websites and apps. '},
        {logo:localAds, link:'Local Service Ads (LSAs)  ',to:'/local-service-ads' ,text:'Local Service Ads (LSAs) are a type of online advertising that helps businesses connect with potential customers who are searching for their services in their local area. LSAs appear at the top of Google Search results and Google Maps, and they include a business\'s name, address, phone number, and reviews.  '},
        {logo:googleBusiness, link:'Google My Business (GMB) ',to:'/google-my-business' ,text:'GMB is a free tool that allows businesses to manage their online presence on Google Search and Maps. With GMB, businesses can create and verify their business listing, add information about their business, such as hours of operation, contact information, and photos, and respond to customer reviews. '},
        {logo:leadGeneration, link:'Lead Generation ',to:'/lead-generation' ,text:'Lead generation is an important part of the sales process, as it helps businesses to identify and connect with potential customers. There are many different ways to generate leads, such as through content marketing, social media marketing.'},
    ]
  return (
    <div>
      <div className="relative">
        <img src={googleMarketing} alt="googleMarketing"  className=" w-full h-[55vh] object-cover" />
        <div className="absolute top-1/2 right-1/4">
            <p className="font-72-500 text-white">Google Marketing</p>
        </div>
      </div>
      <div className="w-[90%] 2xl:w-[80%] m-auto my-10">

          <div className="flex flex-wrap gap-12 justify-center mt-5">
            {
                Lists?.map((item,index)=>{
                    return(
                        <div key={index} className=" items-center my-4 w-full md:w-[40%] xl:w-[25%]">
                          <div className="flex items-center gap-2 md:gap-4">
                            <div className="max-w-20 h-20 rounded-full overflow-hidden "> 
                                <img src={item?.logo} alt="Logo" className="w-full h-full object-fill" />
                            </div>
                                <Link className="font-20-700 underline decoration-2 text-[#270048]" to={item?.to}>{item?.link}</Link>
                          </div>
                            <div >
                                <p className="mt-4 font-16-400">{item?.text}</p>
                            </div>
                        </div>
                    )
                })
            }
          </div>
      </div>

    </div>
  );
};

export default GooglMarketing;
