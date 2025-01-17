
import bannerImg from '../assets/GoogleList/video-ad.jpg'

const VideoAds = () => {
    return (
        <div>
            <div >
                <img src={bannerImg} alt="video-Ads-Img" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center mb-5'>Tell your story visually, connect with your audience emotionally. </h3>
                <p className='font-18-400 page-container '>Video ads can be very effective in reaching and engaging potential customers. They are also very flexible and can be used to create a variety of different ad formats and campaigns.</p>
            </div>
            <div className='page-container'>
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
    )
}

export default VideoAds
