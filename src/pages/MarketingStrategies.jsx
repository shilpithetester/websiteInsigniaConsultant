import MarketingImg from '../assets/BannerImages/market-strategy.jpg'

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
      <div >
        <img src={MarketingImg} alt="MarketingImg" className=" w-full h-[55vh] object-cover" />
      </div>
      <div className="flex gap-5 justify-center px-2  py-10 bg-[#FFE765] ">
        <h3 className='font-24-700 '>The Key to Unlocking Your Market Potential. </h3>
      </div>
      <div className='page-container '>
        <div className='my-10'>
          <h3 className='font-24-700 mb-3'>How can we help you with marketing strategies and analysis? </h3>
          <ul className='list-disc  marker:text-[#262254]'>
            {
              marketinghelp?.map((item, index) => {
                return (
                  <li key={index} className='py-3 font-18-400'>{item?.content}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className='bg-[#E8E8E8] px-2 py-10'>
        <div className='bg-[#E8E8E8] page-container'>
          <div>

            <p className='font-18-400 mb-3'><b>Marketing strategies </b> are the plans and actions that businesses take to promote and sell their products or services. They should be based on a deep understanding of the target market, the competitive landscape, and the business's unique selling proposition. Effective marketing strategies will help businesses to:</p>

            <ul className='list-disc  marker:text-[#262254]'>
              <li className='py-3 font-18-400'>Define their target audience</li>
              <li className='py-3 font-18-400'>Identify their unique selling proposition</li>
              <li className='py-3 font-18-400'>Develop messaging and branding that resonates with their target audience</li>
              <li className='py-3 font-18-400'>Choose the right marketing channels to reach their target audience</li>
              <li className='py-3 font-18-400'>Track and measure the results of their marketing campaigns</li>
            </ul>
          </div>

          <div>
            <p className='font-18-400 mt-5 mb-3'>
              <b>Marketing analysis</b> is the process of evaluating the effectiveness of marketing strategies and tactics. It is essential for businesses to track the results of their marketing campaigns so that they can identify what is working and what is not. This information can then be used to refine marketing strategies and improve performance over time.
            </p>
            <p className='font-18-400'>Marketing analysis can be conducted using a variety of methods, such as:</p>

            <ul className='list-disc  marker:text-[#262254] my-5'>
              <li className='py-3 font-18-400'>Tracking website traffic and social media engagement</li>
              <li className='py-3 font-18-400'>Analyzing lead generation and sales data</li>
              <li className='py-3 font-18-400'>Conducting customer surveys and focus groups</li>
              <li className='py-3 font-18-400'>Benchmarking performance against competitors</li>
            </ul>

            <p className='font-18-400'>By regularly conducting marketing analysis, businesses can ensure that their marketing strategies are effective and that they are getting the most out of their marketing budget.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MarketingStrategies
