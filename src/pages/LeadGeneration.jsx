import bannerImg from '../assets/GoogkeInnerPageImg/lead-generation.jpg'

const LeadGeneration = () => {
    return (
        <div>
            <div >
                <img src={bannerImg} alt="lead-generation-Img" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center'>Turn strangers into customers.</h3>
            </div>
            <div className='page-container'>
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
    )
}

export default LeadGeneration
