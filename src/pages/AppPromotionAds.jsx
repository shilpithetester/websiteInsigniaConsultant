import bannerImg from '../assets/GoogleList/promotion.jpg'

const AppPromotionAds = () => {
    return (
        <div>
            <div >
                <img src={bannerImg} alt="AppPromotion-Ads-Img" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center mb-5'>Get your app in the hands of the people who need it most.  </h3>
                <p className='font-18-400 page-container'>App promotion ads can be very effective in reaching potential users and driving downloads. They can also be used to generate leads, increase brand awareness, and promote specific features of your app.</p>
            </div>
            <div className='page-container'>
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
        </div>
    )
}

export default AppPromotionAds
