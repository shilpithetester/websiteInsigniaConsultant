import bannerImg from '../assets/GoogkeInnerPageImg/PaytPay.jpg'

const PaytoPay = () => {
  const seotask = [
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
            <div >
                <img src={bannerImg} alt="PaytoPay-Img" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center mb-4'>Get your ads seen by the people who matter most.  </h3>
                <p className='font-18-400 page-container'>PPC is a popular advertising model because it is very targeted and measurable. Advertisers only pay when someone clicks on their ad, which means that they are more likely to reach people who are interested in what they have to offer. PPC is also a very measurable platform, which means that advertisers can track their results and see how effective their campaigns are.</p>
            </div>
            <div className='page-container'>
                <div className='mt-10 '>
                    <p className='font-24-700 mb-5'>How Can we help you with your (Pay-Per-Click) PPC advertising:</p>
                    <ul className='list-disc  marker:text-[#262254]'>
                        {
                            seotask?.map((item,index) => {
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
        </div>
    )
}

export default PaytoPay
