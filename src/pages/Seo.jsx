
import bannerImg from '../assets/GoogkeInnerPageImg/SeoBanner.jpg'

const Seo = () => {

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

    return (
        <div>
            <div >
                <img src={bannerImg} alt="Seo-Img" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center'>The key to ranking higher and getting more traffic. </h3>
            </div>
            <div className='page-container'>
                <div className='mt-10 '>
                    <p className='font-24-700 mb-5'>How can we help you with specific SEO tasks :</p>
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
    )
}

export default Seo
