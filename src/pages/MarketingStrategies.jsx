import MarketingImg from '../assets/BannerImages/search_hero_bg.jpg'
// import MarketingImg from '../assets/BannerImages/market-strategy.jpg'
import marketingPotential from '../assets/BannerImages/marketingPotential.jpeg'
import marketingStratergy from '../assets/BannerImages/MarketingStratergy.jpeg'
import marketingAnalysis from '../assets/BannerImages/marketingAnalysis.jpeg'

const MarketingStrategies = () => {

  const marketinghelp = [
    { content: <p><b>Market research:{" "}</b>  I can help you to conduct market research to understand your target market, their needs, and their pain points. I can also help you to identify your competitive landscape and their strengths and weaknesses.</p> },
    { content: <p><b>Marketing strategy development:{" "}</b> I can help you to develop a marketing strategy that aligns with your business goals and targets. This will include identifying your target audience, developing your messaging, choosing your marketing channels, and setting your budget.</p> },
    { content: <p><b>Marketing campaign execution:{" "} </b>I can help you to execute your marketing campaigns by creating content, designing graphics, and managing social media campaigns.</p> },
    { content: <p><b>Marketing analytics:{" "}</b> I can help you to track and analyze the results of your marketing campaigns so that you can see what is working and what is not. This will help you to optimize your campaigns over time.</p> },
    { content: <p><b>Keyword research:{" "}</b> I can help you to identify the right keywords to target for your SEO and PPC campaigns.</p> },
    { content: <p><b>Content marketing: {" "}</b> I can help you to create high-quality content that will attract and engage your target audience.</p> },
    { content: <p><b>Social media marketing: {" "}</b>I can help you to create and manage social media campaigns.</p> },
    { content: <p><b>Paid advertising: {" "}</b> I can help you to create and manage paid advertising campaigns on Google Ads and other platforms.</p> },
    { content: <p><b>Marketing automation:{" "}</b>I can help you to set up and manage marketing automation campaigns.</p> },
  ]

  return (
    <div>
      <div className="relative">
        <img src={MarketingImg} alt="MarketingImg" className=" w-full h-[65vh] object-cover" />
        <div className="absolute top-1/3 left-[10%] md:left-[19%] ">
          <div className="max-w-[650px]">
            <h2 className="font-65-900 text-white  leading-tight after:content-[''] after:block after:w-1/4 after:h-[4px] after:bg-customSafron after:mt-2 "> Marketing Strategies</h2>
            <h3 className="font-25-800 text-white mt-5 ">The key unlocking your market potential.</h3>
            <p className="font-22-500 text-white mt-5 ">TIC research the market, analyze the competitors and innovate.</p>
          </div>
        </div>

      </div>
      {/* <div className="flex gap-5 justify-center px-2  py-10 bg-customlightGreen ">
        <h3 className='font-24-700 '>The Key to Unlocking Your Market Potential. </h3>
      </div> */}

      <div className=' py-10 '>
        <div className='flex flex-wrap items-center  page-container'>
          <div className='w-full lg:w-1/2'>
            <h3 className='font-24-700 mb-3'>How can we help you with marketing strategies and analysis? </h3>
            <ul className='list-disc  marker:text-customSafron'>
              {
                marketinghelp?.map((item, index) => {
                  return (
                    <li key={index} className='py-3 font-18-400'>{item?.content}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className='w-full lg:w-1/2 '>
            <div className='xl:w-3/4 ms-auto'>
              <img src={marketingPotential} alt="marketingPotential" className='m-auto mb-2 rounded-lg' />
              {/* <h3 className='font-36-700 text-center '>Marketing Potential</h3> */}
            </div>
          </div>
        </div>
      </div>


      <div className=' bg-customGrey py-10 '>
        <div className='flex flex-wrap items-center page-container max-lg:justify-center'>
          <div className='w-full lg:w-1/2 '>
            <div className='xl:w-3/4'>
              <img src={marketingStratergy} alt="marketingStratergy" className='m-auto mb-2 rounded-lg' />
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <div>

              <p className='font-18-400 mb-3'><b>Marketing strategies </b> are the plans and actions that businesses take to promote and sell their products or services. They should be based on a deep understanding of the target market, the competitive landscape, and the business's unique selling proposition. Effective marketing strategies will help businesses to:</p>

              <ul className='list-disc  marker:text-customSafron'>
                <li className='py-3 font-18-400'>Define their target audience</li>
                <li className='py-3 font-18-400'>Identify their unique selling proposition</li>
                <li className='py-3 font-18-400'>Develop messaging and branding that resonates with their target audience</li>
                <li className='py-3 font-18-400'>Choose the right marketing channels to reach their target audience</li>
                <li className='py-3 font-18-400'>Track and measure the results of their marketing campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=' py-10 '>
        <div className='flex flex-wrap items-center  page-container'>
          <div className='w-full lg:w-1/2'>

            <p className='font-18-400 mt-5 mb-3'>
              <b>Marketing analysis</b> is the process of evaluating the effectiveness of marketing strategies and tactics. It is essential for businesses to track the results of their marketing campaigns so that they can identify what is working and what is not. This information can then be used to refine marketing strategies and improve performance over time.
            </p>
            <p className='font-18-400'>Marketing analysis can be conducted using a variety of methods, such as:</p>

            <ul className='list-disc  marker:text-customSafron my-5'>
              <li className='py-3 font-18-400'>Tracking website traffic and social media engagement</li>
              <li className='py-3 font-18-400'>Analyzing lead generation and sales data</li>
              <li className='py-3 font-18-400'>Conducting customer surveys and focus groups</li>
              <li className='py-3 font-18-400'>Benchmarking performance against competitors</li>
            </ul>

            <p className='font-18-400'>By regularly conducting marketing analysis, businesses can ensure that their marketing strategies are effective and that they are getting the most out of their marketing budget.</p>

          </div>
          <div className='w-full lg:w-1/2 '>
            <div className='xl:w-3/4 ms-auto'>
              <img src={marketingAnalysis} alt="marketingAnalysis" className='m-auto mb-2 rounded-lg' />
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default MarketingStrategies
