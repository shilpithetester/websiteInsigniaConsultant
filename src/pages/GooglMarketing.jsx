// import googleMarketing from "../assets/BannerImages/googleMarketing.jpg";
import googleMarketing from "../assets/BannerImages/search_hero_bg.jpg";
import seoImg from '../assets/logos/image 12.svg';
import ppc from '../assets/logos/image 13.svg';
import displayAdvertising from '../assets/logos/image 14.svg';
import shoppingAds from '../assets/logos/image 15.svg';
import videoAds from '../assets/logos/image 16.svg';
import appPromotion from '../assets/logos/image 17.svg';
import localAds from '../assets/logos/image 18.svg';
import googleBusiness from '../assets/logos/image 19.svg';
import leadGeneration from '../assets/logos/image 20.svg'
// import seoImg from '../assets/GoogleList/seo.jpg';
// import ppc from '../assets/GoogleList/pay-per-click.jpg';
// import displayAdvertising from '../assets/GoogleList/display-ads.png';
// import shoppingAds from '../assets/GoogleList/shopping-ads.jpg';
// import videoAds from '../assets/GoogleList/video-ad.jpg';
// import appPromotion from '../assets/GoogleList/promotion.jpg';
// import localAds from '../assets/GoogleList/google-ads.png';
// import googleBusiness from '../assets/GoogleList/GMB.jpg';
// import leadGeneration from '../assets/GoogleList/lead-generation.jpg'


const GooglMarketing = () => {
  const seotask = [
    { content: <p><b>Keyword research: </b> We can help you identify the right keywords to target for your SEO campaigns. We will take into account factors such as search volume, competition, and relevance to your business.</p> },
    { content: <p><b>On-page SEO:</b> We can help you optimize your website for your target keywords. This includes optimizing your title tags, meta descriptions, header tags, and content. We can also help you improve the overall structure and navigation of your website.</p> },
    { content: <p><b>Link building: </b> We can help you build high-quality backlinks to your website. Backlinks are important for SEO because they signal to search engines that your website is authoritative and trustworthy.</p> },
    { content: <p><b>Technical SEO:  </b>We can help you with the technical aspects of SEO, such as improving your website's loading speed, mobile-friendliness, and crawlability.</p> },
    { content: <p><b>SEO reporting and analytics:   </b>We can provide you with detailed reports on your SEO performance so that you can see what is working and what is not. We can also help you track your progress over time and identify areas for improvement.</p> },
    { content: <p><b>SEO copywriting:</b>We can help you write high-quality SEO-friendly content for your website and blog.</p> },
    { content: <p><b>Local SEO:</b>We can help you optimize your website for local search results. This is important for businesses that want to attract customers in their local area.</p> },
    { content: <p><b>E-commerce SEO: </b>We can help you optimize your e-commerce website for search engines so that you can attract more shoppers and increase your sales.</p> },
    { content: <p><b>SEO for competitive industries: </b>We can help you rank higher in search results for competitive industries. We have experience helping businesses in a variety of industries achieve success with SEO.</p> },
  ]

  const PpcTask = [
    { content: <p><b>Create and manage effective PPC campaigns:</b> We have a team of experienced PPC advertising professionals who can help you create and manage effective PPC campaigns that will reach your target audience and drive results. We will work with you to develop a campaign strategy, choose the right keywords, and write compelling ad copy.</p> },
    { content: <p><b>Optimize your PPC campaigns for performance: </b> We will monitor your PPC campaigns and make necessary adjustments to ensure that you are getting the most out of your budget. We will also help you to identify and fix any issues that are affecting your campaign performance.</p> },
    { content: <p><b>Track and measure your PPC results:  </b> We will provide you with detailed reports on your PPC performance, so that you can see what is working and what is not. We will also help you to identify areas for improvement.</p> },
    { content: <p><b>Improve your overall online presence:   </b>We can help you to improve your overall online presence through search engine optimization (SEO), social media marketing, and other digital marketing services. This will help you to reach more potential customers and increase the visibility of your brand.</p> },
    { content: <p><b>Keyword research: </b>We can help you to conduct keyword research and identify the right keywords to target for your PPC campaigns.</p> },
    { content: <p><b>Budgeting:</b>We can help you to set a budget for your PPC campaigns and track your spending to ensure that you are staying within your budget.</p> },
    { content: <p><b>Bidding:</b>We can help you to set the right bids for your PPC campaigns to maximize your visibility and results.</p> },
    { content: <p><b>Ad extensions:  </b>We can help you to create and use ad extensions, such as sitelink extensions, call extensions, and location extensions, to improve your ad performance.</p> },
    { content: <p><b>Conversion tracking: </b>We can help you to set up conversion tracking so that you can track how many people are converting into customers as a result of your PPC campaigns.</p> },
  ]
  return (
    <div>
      <div className="relative">
        <img src={googleMarketing} alt="googleMarketing" className=" w-full h-[60vh] object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="font-72-500 text-white">Google Marketing</p>
        </div>
      </div>
      <div className=" m-auto my-10">
        <div className=' py-10 '>
          <div className='flex flex-wrap items-center  page-container'>
            <div className='w-full xl:w-1/2 max-xl:m-auto '>
              <div className='xl:w-3/4'>
                <img src={seoImg} alt="seoImg" className='m-auto mb-2 rounded-lg' />
                <h3 className='font-36-700 text-center '>Search engine optimization (SEO)</h3>
                <h3 className='font-36-700 text-center '>Automate your marketing, and watch your business grow.</h3>
              </div>
            </div>
            <div className='w-full xl:w-1/2 max-xl:mt-5'>
              <p className='font-24-700 mb-5'>How can we help you with specific SEO tasks :</p>
              <ul className='list-disc  marker:text-[#262254]'>
                {
                  seotask?.map((item, index) => {
                    return (
                      <li key={index} className='font-18-400 my-3'>{item?.content}</li>
                    )
                  })
                }
              </ul>
              <div className='mt-10'>
                <p className='font-24-700 mb-5'>The benefits of SEO:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'>It can help you build brand awareness and trust.</li>
                  <li className='font-18-400 my-3'>It can improve your website's user experience.</li>
                  <li className='font-18-400 my-3'>It can help you generate leads and sales.</li>
                  <li className='font-18-400 my-3'>It can help you track your website's performance and results.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=' bg-customGrey py-10 '>
          <div className='flex flex-wrap items-center page-container'>
            <div className='w-full xl:w-1/2 max-xl:m-auto '>
              <div className='mt-10 '>
                <h3 className='font-24-700  mb-4'>Get your ads seen by the people who matter most.  </h3>
                <p className='font-18-400 '>PPC is a popular advertising model because it is very targeted and measurable. Advertisers only pay when someone clicks on their ad, which means that they are more likely to reach people who are interested in what they have to offer. PPC is also a very measurable platform, which means that advertisers can track their results and see how effective their campaigns are.</p>

                <p className='font-24-700 my-5'>How Can we help you with your (Pay-Per-Click) PPC advertising:</p>
                <ul className='list-disc  marker:text-[#262254]'>
                  {
                    PpcTask?.map((item, index) => {
                      return (
                        <li key={index} className='font-18-400 my-3'>{item?.content}</li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className='my-10'>
                <p className='font-24-700 mb-5'>The benefits of PPC advertising:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Targeted: </b>PPC ads are targeted to people who are already interested in what you have to offer, since they are searching for keywords related to your business</p></li>
                  <li className='font-18-400 my-3'><p><b>Measurable:</b>PPC results are very measurable, so you can see how effective your campaigns are and where your budget is going.</p></li>
                  <li className='font-18-400 my-3'><p><b>Flexible: </b>PPC campaigns can be very flexible, so you can adjust your budget, keywords, and targeting options at any time.</p></li>
                  <li className='font-18-400 my-3'><p><b>Cost-effective:  </b>PPC can be a very cost-effective way to advertise, since you only pay when someone clicks on your ad.</p></li>
                </ul>
              </div>
            </div>
            <div className='w-full xl:w-1/2 max-xl:m-auto '>

              <div className='xl:w-3/4 ms-auto'>
                <img src={ppc} alt="ppc-img" className='m-auto mb-2 rounded-lg' />
                <h3 className='font-36-700 text-center '>Pay-Per-Click (PPC)</h3>
                <h3 className='font-36-700 text-center '>The key to ranking higher and getting more traffic.</h3>
              </div>
            </div>
          </div>
        </div>

        <div className=' py-10 '>
          <div className='flex flex-wrap items-center  page-container'>
            <div className='w-full xl:w-1/2 max-xl:m-auto  '>
              <div className='xl:w-3/4'>
                <img src={displayAdvertising} alt="displayAdvertising" className='m-auto mb-2 rounded-lg' />
                <h3 className='font-36-700 text-center '>Display Advertising</h3>
                <h3 className='font-36-700 text-center '>Get your brand seen by the world.</h3>
              </div>
            </div>
            <div className='w-full xl:w-1/2 max-xl:mt-5'>
              <div className='mt-10 '>
                <p className='font-18-400 my-5'>Display ads can be very effective in reaching and engaging potential customers. They are also very flexible and can be used to create a variety of different ad formats and campaigns.</p>
                <p className='font-18-400 mb-5'>Display advertising can be used to achieve a variety of marketing goals, including:</p>
                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'>Increasing brand awareness</li>
                  <li className='font-18-400 my-3'>Driving traffic to a website or landing page</li>
                  <li className='font-18-400 my-3'>Generating leads</li>
                  <li className='font-18-400 my-3'>Promoting new products or services</li>
                  <li className='font-18-400 my-3'>Increasing sales</li>

                </ul>
              </div>
              <div className='my-10'>
                <p className='font-24-700 mb-5'>We can help you with your display advertising:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Retargeting: </b>We can help you to retarget potential customers who have already visited your website or interacted with your brand online. This is a great way to stay top-of-mind with potential customers and encourage them to return to your website and make a purchase.</p></li>
                  <li className='font-18-400 my-3'><p><b>Programmatic advertising:</b>We can help you to use programmatic advertising to reach your target audience at scale. Programmatic advertising uses data and algorithms to automatically buy and place ads on a variety of websites and apps.</p></li>
                  <li className='font-18-400 my-3'><p><b>Native advertising: </b>We can help you to create and place native ads, which are ads that are designed to blend in with the surrounding content on a website or app. Native ads are often more effective than traditional display ads because they are less intrusive and more likely to be clicked on by users.</p></li>
                </ul>
              </div>
              <div className='my-10'>
                <p className='font-24-700 mb-5'>The benefits of display advertising:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Visual:  </b>Display ads are visual, which makes them more likely to catch people's attention than text-based ads.</p></li>
                  <li className='font-18-400 my-3'><p><b>Targeted: </b>Display ads can be targeted to specific audiences based on demographics, interests, and online behavior. This means that advertisers can reach the people who are most likely to be interested in their products or services.</p></li>
                  <li className='font-18-400 my-3'><p><b>Measurable: </b>Display ad results are very measurable, so advertisers can track how effective their campaigns are and where their budget is going.</p></li>
                  <li className='font-18-400 my-3'><p><b>Flexible: </b>Display ads can be created in a variety of different formats, including images, videos, and GIFs. This means that advertisers can create ads that are tailored to their specific target audience and marketing goals.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=' bg-customGrey py-10 '>
          <div className='flex flex-wrap items-center page-container'>
            <div className='w-full xl:w-1/2 max-xl:m-auto '>
              <div className='my-10'>
                <p className='font-24-700 mb-5'>How we can help you with your shopping ads:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Create and manage your shopping ad campaigns. </b>We will work with you to create and manage your shopping ad campaigns on Google Ads. We will also help you to choose the right products to promote, set your budget, and write effective ad copy.</p></li>
                  <li className='font-18-400 my-3'><p><b>Optimize your shopping ad campaigns for performance.</b>We will monitor your shopping ad campaigns and make necessary adjustments to ensure that you are getting the most out of your budget. We will also help you to identify and fix any issues that are affecting your campaign performance.</p></li>
                  <li className='font-18-400 my-3'><p><b>Track and measure your shopping ad results.</b>We will provide you with detailed reports on your shopping ad performance, so that you can see what is working and what is not. We will also help you to identify areas for improvement.</p></li>
                  <li className='font-18-400 my-3'><p><b>Improve your overall online presence.</b>We can help you to improve your overall online presence through SEO, social media marketing, and other digital marketing services. This will help you to reach more potential customers and increase the visibility of your brand.</p></li>
                </ul>
              </div>
              <div className='mt-14 mb-10'>
                <p className='font-24-700 mb-5'>The benefits of shopping ads:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Increased visibility:  </b>Shopping ads appear at the top of SERPs, which means that they are more likely to be seen by potential customers.</p></li>
                  <li className='font-18-400 my-3'><p><b>Targeted traffic:</b>Shopping ads are targeted to people who are already searching for the products that you sell. This means that you are more likely to reach people who are interested in what you have to offer.</p></li>
                  <li className='font-18-400 my-3'><p><b>Higher conversion rates: </b> Shopping ads have higher conversion rates than other types of online advertising. This is because people who click on shopping ads are already interested in the product and are more likely to make a purchase.</p></li>
                  <li className='font-18-400 my-3'><p><b>Measurable results: </b>Shopping ad results are very measurable, so you can track how effective your campaigns are and where your budget is going.</p></li>
                </ul>
              </div>
            </div>

            <div className='w-full xl:w-1/2 max-xl:m-auto'>
              <div className='xl:w-3/4 ms-auto'>
                <img src={shoppingAds} alt="shoppingAds" className='m-auto mb-2 rounded-lg' />
                <h3 className='font-36-700 text-center '>Shopping Ads</h3>
                <h3 className='font-36-700 text-center '>The most effective way to reach potential customers and boost sales.</h3>
              </div>
            </div>
          </div>
        </div>

        <div className=' py-10 '>
          <div className='flex flex-wrap items-center  page-container'>

            <div className='w-full xl:w-1/2 max-xl:m-auto '>
              <div className='xl:w-3/4'>
                <img src={videoAds} alt="videoAds" className='m-auto mb-2 rounded-lg' />
                <h3 className='font-36-700 text-center '>Video Ads</h3>
                <h3 className='font-36-700 text-center '>Tell your story visually, connect with your audience emotionally.</h3>
              </div>
            </div>

            <div className='w-full xl:w-1/2 max-xl:mt-5'>
              <div className='my-10'>
                <p className='font-24-700 mb-5'>How we can help you with video advertising:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Create and produce high-quality video ads. </b>We have a team of experienced video producers who can create high-quality video ads that will engage your target audience and drive results.</p></li>
                  <li className='font-18-400 my-3'><p><b>Target and manage your video ad campaigns. </b>We will work with you to identify your target audience, develop your targeting strategy, and set your budget. We will also manage your video ad campaigns on your behalf.</p></li>
                  <li className='font-18-400 my-3'><p><b>Track and measure your video ad results. </b> We will provide you with detailed reports on your video ad performance, so that you can see what is working and what is not. We will also help you to identify areas for improvement.</p></li>
                  <li className='font-18-400 my-3'><p><b>Improve your overall online presence.</b>We can help you to improve your overall online presence through SEO, social media marketing, and other digital marketing services. This will help you to reach more potential customers and increase the visibility of your brand.</p></li>
                </ul>
              </div>
              <div className='mt-14 mb-10'>
                <p className='font-24-700 mb-5'>The benefits of video advertising:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Engaging: </b> Video ads are more engaging than other types of online advertising, such as text ads or banner ads. This is because they are more visually appealing and they can tell a story.</p></li>
                  <li className='font-18-400 my-3'><p><b>Effective: </b>Video ads have been shown to be very effective in driving traffic to websites, generating leads, and increasing sales.</p></li>
                  <li className='font-18-400 my-3'><p><b>Measurable: </b>Video ad results are very measurable, so advertisers can track how effective their campaigns are and where their budget is going.</p></li>
                  <li className='font-18-400 my-3'><p><b>Flexible: </b> Video ads can be created in a variety of different formats, such as pre-roll ads, mid-roll ads, post-roll ads, and bumper ads. This means that advertisers can create ads that are tailored to their specific target audience and marketing goals.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=' bg-customGrey py-10 '>
          <div className='flex flex-wrap items-center page-container'>
            <div className='w-full xl:w-1/2 max-xl:m-auto '>
              <div className='my-10'>
                <p className='font-24-700 mb-5'>Why you should choose us to help you with your app promotion ads:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>We have a deep understanding of app promotion ads. </b>We have been helping businesses of all sizes and in all industries create and manage successful app promotion ad campaigns for many years. We know what works and what doesn't, and we can help you develop a campaign strategy that is tailored to your specific needs and goals.</p></li>
                  <li className='font-18-400 my-3'><p><b>We have a proven track record of success.  </b>We have helped our clients generate millions of downloads and installs for their apps through our app promotion ad campaigns. We have a team of experienced app promotion professionals who are experts in their field.</p></li>
                  <li className='font-18-400 my-3'><p><b>We offer a comprehensive range of app promotion ad services.  </b>We can help you with everything from creating and managing your ad campaigns to tracking and measuring your results. We also offer a variety of other services, such as app store optimization (ASO) and social media marketing, that can help you to improve your overall app visibility and reach more potential users.</p></li>
                  <li className='font-18-400 my-3'><p><b>We are affordable. </b>We offer a variety of app promotion ad packages to fit your budget. We also offer value added consultation so that we can discuss your needs and develop a custom plan for you.</p></li>
                </ul>
              </div>
              <div className='mt-14 mb-10'>
                <p className='font-24-700 mb-5'>The benefits of using app promotion ads:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Reach a large audience:</b>App promotion ads can be displayed on a variety of websites and apps, which allows you to reach a large audience of potential users.</p></li>
                  <li className='font-18-400 my-3'><p><b>Target your ads: </b>App promotion ads can be targeted to specific audiences based on demographics, interests, and online behavior. This means that you can show your ads to the people who are most likely to be interested in your app.</p></li>
                  <li className='font-18-400 my-3'><p><b>Measure your results: </b>App promotion ad results are very measurable, so you can track how effective your campaigns are and where your budget is going.</p></li>
                  <li className='font-18-400 my-3'><p><b>Optimize your campaigns: </b>  You can use the data from your app promotion ad campaigns to optimize your campaigns over time. This will help you to get the most out of your budget and reach more potential users.</p></li>
                </ul>
              </div>
            </div>
            <div className='w-full xl:w-1/2 max-xl:m-auto'>
              <div className='xl:w-3/4 ms-auto'>
                <img src={appPromotion} alt="appPromotion" className='m-auto mb-2 rounded-lg' />
                <h3 className='font-36-700 text-center '>App Promotion Ads</h3>
                <h3 className='font-36-700 text-center '>Get your app in the hands of the people who need it most. </h3>
              </div>
            </div>
          </div>
        </div>

        <div className=' py-10 '>
          <div className='flex flex-wrap items-center  page-container'>
            <div className='w-full xl:w-1/2 max-xl:m-auto '>
              <div className='xl:w-3/4'>
                <img src={localAds} alt="localAds" className='m-auto mb-2 rounded-lg' />
                <h3 className='font-36-700 text-center '>Local Service Ads (LSAs)</h3>
                <h3 className='font-36-700 text-center '>Connect with customers who are searching for your services</h3>
              </div>
            </div>
            <div className='w-full xl:w-1/2 max-xl:mt-5'>
              <div className='my-10'>
                <p className='font-24-700 mb-5'>Why you should choose us for LSAs :</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Account setup and management: </b>We can help you create and manage your LSA account, including setting up your budget, keywords, and ad copy.</p></li>
                  <li className='font-18-400 my-3'><p><b>Campaign optimization: </b>We will monitor your LSA campaigns and make necessary adjustments to ensure that you are getting the most out of your budget.</p></li>
                  <li className='font-18-400 my-3'><p><b>Lead nurturing:</b>We can help you nurture your LSA leads through email marketing and other channels to convert them into paying customers.</p></li>
                  <li className='font-18-400 my-3'><p><b>Reporting and analytics: </b>We will provide you with detailed reports on your LSA performance, so that you can see what is working and what is not.</p></li>
                </ul>
              </div>
              <div className='mt-14 mb-10'>
                <p className='font-24-700 mb-5'>The benefits of using LSAs:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Target local customers: </b>LSAs only appear for searches in the business's service area. This means that businesses can target their advertising to the people who are most likely to be interested in their services.</p></li>
                  <li className='font-18-400 my-3'><p><b>Get high-quality leads:</b>LSAs are pay-per-lead, so businesses only pay when a potential customer contacts them directly. This means that the businesses that are using LSAs are more likely to be generating high-quality leads.</p></li>
                  <li className='font-18-400 my-3'><p><b>Improve visibility:  </b> LSAs appear at the top of SERPs for relevant searches. This means that businesses can get their ads seen by more potential customers.</p></li>
                  <li className='font-18-400 my-3'><p><b>Build trust and credibility:</b>LSAs include information such as the business's name, address, phone number, and customer reviews. This helps to build trust and credibility with potential customers.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=' bg-customGrey py-10 '>
          <div className='flex flex-wrap items-center page-container'>
            <div className='w-full xl:w-1/2 max-xl:m-auto'>
              <div className='my-10'>
                <p className='font-24-700 mb-5'>Why you should choose us to help you with your Google My Business (GMB) profile.</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>We have a deep understanding of GMB.  </b> We have been helping businesses of all sizes and in all industries create and optimize their GMB profiles for many years. We know what works and what doesn't, and we can help you develop a GMB strategy that is tailored to your specific needs.</p></li>
                  <li className='font-18-400 my-3'><p><b>We have a proven track record of success.</b>We have helped our clients achieve significant improvements in their GMB visibility, engagement, and leads. We have a team of experienced GMB professionals who are experts in their field.</p></li>
                  <li className='font-18-400 my-3'><p><b>We offer a comprehensive range of GMB services. </b>We can help you with everything from creating and verifying your GMB profile to optimizing your profile for search engines and responding to customer reviews. We also offer a variety of other services, such as search engine optimization (SEO) and social media marketing, that can help you to improve your overall online visibility and reach more potential customers.</p></li>
                  <li className='font-18-400 my-3'><p><b>We are affordable. </b>We offer a variety of GMB packages to fit your budget. We also offer value added consultation so that we can discuss your needs and develop a custom plan for you.</p></li>
                </ul>
              </div>
              <div className='mt-14 mb-10'>
                <p className='font-24-700 mb-5'>The benefits of using Google My Business:</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Increased visibility: </b>Google My Business profiles appear at the top of Google Search results pages for relevant searches. This means that businesses can get their ads seen by more potential customers.</p></li>
                  <li className='font-18-400 my-3'><p><b>Improved customer engagement: </b>Google My Business profiles allow businesses to interact with potential customers by responding to reviews and answering questions. This can help to build trust and credibility with potential customers.</p></li>
                  <li className='font-18-400 my-3'><p><b>More leads and sales: </b>Google My Business profiles can help businesses to generate more leads and sales by making it easier for potential customers to find and contact them.</p></li>
                </ul>
              </div>
            </div>
            <div className='w-full xl:w-1/2 max-xl:m-auto'>
              <div className='xl:w-3/4 ms-auto'>
                <img src={googleBusiness} alt="googleBusiness" className='m-auto mb-2 rounded-lg' />
                <h3 className='font-36-700 text-center '>Google My Business (GMB)</h3>
                <h3 className='font-36-700 text-center '>Your business deserves to be seen.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=' py-10 '>
          <div className='flex flex-wrap items-center  page-container'>
            <div className='w-full xl:w-1/2 max-xl:m-auto '>
            <div className='xl:w-3/4 '>
                <img src={leadGeneration} alt="leadGeneration" className='m-auto mb-2 rounded-lg' />
                <h3 className='font-36-700 text-center '>Lead Generation</h3>
                <h3 className='font-36-700 text-center '>Turn strangers into customers.</h3>
              </div>
            </div>
            <div className='w-full xl:w-1/2 max-xl:mt-5'>
              <div className='my-10'>
                <p className='font-24-700 mb-5'>Why you should choose us for lead generation. </p>
                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>We have a deep understanding of lead generation.  </b>We have been generating leads for businesses of all sizes and in all industries for many years. We know what works and what doesn't, and we can help you develop a lead generation strategy that is tailored to your specific needs.</p></li>
                  <li className='font-18-400 my-3'><p><b>We have a proven track record of success.</b>We have helped our clients generate millions of leads over the years. We have a team of experienced lead generation professionals who are experts in their field.</p></li>
                  <li className='font-18-400 my-3'><p><b>We use a variety of lead generation strategies.</b>We don't rely on just one or two lead generation strategies. We use a variety of strategies to ensure that you are generating leads from multiple sources.</p></li>
                  <li className='font-18-400 my-3'><p><b>We are data-driven. </b>We use data to track and measure the results of our lead generation campaigns. This allows us to optimize our campaigns and improve our results over time.</p></li>
                  <li className='font-18-400 my-3'><p><b>We are affordable. </b>We offer a variety of lead generation packages to fit your budget. We also offer value added consultation so that we can discuss your needs and develop a custom plan for you.</p></li>
                </ul>
              </div>
              <div className='mt-14 mb-10'>
                <p className='font-24-700 mb-5'>Lead generation offers many benefits for businesses :</p>

                <ul className='list-disc  marker:text-[#262254]'>
                  <li className='font-18-400 my-3'><p><b>Increased sales and revenue.  </b>Shopping ads appear at the top of SERPs, which means that they are more likely to be seen by potential customers.</p></li>
                  <li className='font-18-400 my-3'><p><b>Reduced sales costs. </b>Lead generation can help you reduce your sales costs by automating the lead generation process and targeting your sales efforts to qualified leads.</p></li>
                  <li className='font-18-400 my-3'><p><b>Improved customer lifetime value.  </b> Lead generation can help you improve your customer lifetime value by nurturing leads through the sales funnel and converting them into paying customers who are more likely to continue doing business with you in the future.</p></li>
                  <li className='font-18-400 my-3'><p><b>Brand awareness and credibility. </b> Lead generation can help you increase brand awareness and credibility by providing valuable content and information to potential customers and answering their questions.</p></li>
                  <li className='font-18-400 my-3'><p><b>Competitive advantage. </b>Lead generation can give you a competitive advantage by helping you attract and convert more leads than your competitors.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default GooglMarketing;
