import brand from '../assets/BannerImages/Brand.jpeg'
import branding from '../assets/BannerImages/search_hero_bg.jpg'
import logoVision from '../assets/logos/image 23.svg'
import portfolioBrand from '../assets/logos/image 24.svg'
import brandStratergy from '../assets/logos/image 25.svg'
import ApproacheCard from '../components/ApproacheCard'
import Cards from '../components/cards'
import ServicesSec from '../components/ServicesSec'
import research from '../assets/socialMedia/research-icon.webp'
import {boost, relationship, leadership, connect, conversion, trends, creative, awarness, action, analytics, reporting} from '../assets/socialMedia/Index'

const SocialMedia = () => {

    const benefits = [
        { icon: boost, heading: 'Connect Directly With Customers', text: 'involves engaging with them through personalized communication and interactions. By using channels such as social media, email, and live chat, you can address their needs promptly and build strong, trusting relationships.' },
        { icon: relationship, heading: 'Build Customer Relationships', text: 'involves creating meaningful connections with your customers through personalized interactions, exceptional customer service, and consistent communication.' },
        { icon: leadership, heading: 'Demonstrate Thought Leadership', text: 'showcasing your expertise and unique insights through authoritative content and innovative ideas. By sharing your knowledge and solutions, you position yourself or your brand as a leader in your industry' },
        { icon: connect, heading: 'Boost Brand Awareness', text: 'Boosting brand awareness is about making more people recognize and remember your brand.' },
        { icon: conversion, heading: 'Increase Conversions', text: 'turning more website visitors into paying customers through optimized user experiences and strategic calls-to-action.' },
        { icon: trends, heading: 'Leverage User Trends & Activities', text: 'involves analyzing customer behaviors and preferences to tailor your marketing strategies and offerings.' },
    ]

    const services = [
        { text: 'Social Channel Strategy' },
        { text: 'Audience Creation & Set Up' },
        { text: 'Content Calendars & Scheduling' },
        { text: 'Ad Copy Optimization' },
        { text: 'Organic Content Creation' },
        { text: 'Community Management' },
        { text: 'Social Retargeting Ads' },
        { text: 'Influencer Management' },
        { text: 'Paid Social Ads Managemen' },
        { text: 'Reputation Monitoring' },
        { text: 'A/B Testing Experiments' },
        { text: 'Channel Analytics & Reporting' },
    ]
    const approach = [
        {logo: research , heading: "RESEARCH", text: 'Ensures that our social media marketing efforts are effective and aligned with your business goals, driving meaningful results and growth.' },
        {logo: creative , heading: "CREATIVE", text: 'Ensures that your social media presence is vibrant, engaging, and uniquely yours, helping you stand out in a crowded digital landscape.' },
        {logo: awarness , heading: "AWARENESS", text: 'Designed to boost brand awareness by creating a strong and memorable presence across various platforms.' },
        {logo:action  , heading: "ACTION", text: 'Action-oriented approach ensures that your social media marketing efforts translate into tangible results, driving business growth and success.' },
        {logo: analytics , heading: "ANALYTICS", text: 'Analytics-driven approach ensures that your social media marketing efforts are informed, effective, and aligned with your business goals.' },
        {logo: reporting , heading: "REPORTING", text: 'Reporting-focused approach ensures that you have a clear and comprehensive view of your social media marketing efforts.' },
    ]

    // const services = [
    //     { text: 'SEO Channel Strategy' },
    //     { text: 'Technical SEO Execution' },
    //     { text: 'User Intent Analysis' },
    //     { text: 'SEO Competitive Analysis' },
    //     { text: 'Creative SEO Copywriting' },
    //     { text: 'Link Building Programs' },
    //     { text: 'Comprehensive SEO Audits' },
    //     { text: 'Structured Data Integration' },
    //     { text: 'In-Depth Keyword Research' },
    //     { text: 'SEO Content Strategy' },
    //     { text: 'SEO Analytics & Reporting' },
    //     { text: 'UX Architecture & Sitemapping' },
    // ]


    return (
        <div >
            <div className="relative ">
                <img src={branding} alt="branding" className=" w-full h-[65vh] object-cover" />
                <div className="absolute top-1/3 left-[10%] md:left-[19%] ">
                    <div className="max-w-[650px]">
                        <h2 className="font-65-900 text-white  leading-tight after:content-[''] after:block after:w-44 after:h-[4px] after:bg-customSafron after:mt-2 ">Social Media</h2>
                        <h3 className="font-25-800 text-white mt-5 ">The Insignia Consultant – Your Social Media Strategists</h3>
                        <p className="font-22-500 text-white mt-5 ">The Insignia Consultant, we specialize in crafting impactful social media strategies that elevate your brand’s presence. Our expert team harnesses the power of social platforms to connect with your audience, drive engagement, and boost your online visibility.</p>
                    </div>
                </div>
            </div>
            <div className='page-container '>
                <h2 className="max-w-full  w-max m-auto mt-16 font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Benefits of Social Media Marketing</h2>


                <div className='flex flex-wrap justify-between mt-14 gap-y-16'>
                    {
                        benefits?.map((item, index) => {
                            return (

                                <Cards key={index} icon={item?.icon} heading={item?.heading} text={item?.text} />

                            )
                        })
                    }
                </div>
            </div>
            <div className='mt-16'>
                <ServicesSec services={services} heading='Our social media marketing services' />
            </div>
            {/* <div className="bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${blueBg})` }}>
                <div className='page-container'>
                    <h2 className="max-w-full w-max m-auto mt-10 font-40-900 after:content-[''] after:block after:w-24 after:mx-auto after:h-[4px] after:bg-customSafron after:mt-2 text-white">Our social media marketing services</h2>

                </div>
            </div> */}


            <div className=' py-10 '>
                <div className='flex flex-wrap items-center  page-container'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto mt-16 font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Social Media Marketing with maximize your reach</h2>
                        <p className='font-18-400 my-6'>creating and sharing engaging content on platforms like Instagram, Facebook, and Twitter to reach a wider audience. By leveraging targeted ads, influencer collaborations, and data analytics, you can maximize your brand's reach and engagement. This approach helps build brand awareness, drive traffic, and increase conversions.</p>
                        {/* <p className='font-18-400 '>We're a marketing consultancy that helps brands grow. We do this by developing and implementing comprehensive marketing strategies that align with your business goals. We also help you create a strong brand identity that resonates with your target audience.</p>
                        <p className='font-18-400 my-6'>We're passionate about helping brands succeed. We believe that every brand has a unique story to tell, and we're here to help you tell it in the most effective way possible.</p> */}
                    </div>
                    <div className='w-full lg:w-1/2 '>
                        <div className='xl:w-3/4 ms-auto'>
                            <img src={brand} alt="brand" className='m-auto mb-2 rounded-lg' />
                        </div>

                    </div>
                </div>
            </div>

            <div className=' bg-customGrey py-10 '>
                <div className='flex flex-wrap items-center page-container max-lg:justify-center'>
                    <div className='w-full lg:w-1/2 '>
                        <div className='xl:w-3/4'>
                            <img src={logoVision} alt="logoVision" className='m-auto mb-2 rounded-lg' />
                            {/* <h3 className='font-36-700 text-center '>Your logo, your vision.</h3> */}
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">We customize Social Strategies as per Your Business goals</h2>

                        <p className='font-18-400 my-6'>We customize social media strategies tailored to your specific business goals. By understanding your unique needs and objectives, we create targeted campaigns that drive engagement, brand awareness, and conversions. This personalized approach ensures that your social media efforts are aligned with your overall business strategy, maximizing impact and success.</p>
                    </div>
                </div>
            </div>

            <div className=' py-10 '>
                <div className='flex flex-wrap items-center  page-container'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Grow Your Followers with Engaging Content</h2>
                        <p className='font-18-400 my-6'>involves creating valuable and captivating posts that resonate with your audience. By consistently sharing high-quality, relevant, and interactive content, you can attract new followers and keep your existing audience engaged. This approach helps build a loyal community and enhances your brand's online presence.</p>
                    </div>
                    <div className='w-full lg:w-1/2 '>
                        <div className='xl:w-3/4 ms-auto'>
                            <img src={portfolioBrand} alt="portfolioBrand" className='m-auto mb-2 rounded-lg' />
                            {/* <h3 className='font-36-700 text-center '>A portfolio of brands that move you forward.</h3> */}
                        </div>

                    </div>
                </div>
            </div>
            <div className=' bg-customGrey py-10 '>
                <div className='flex flex-wrap items-center page-container'>
                    <div className='w-full lg:w-1/2'>
                        <div className='xl:w-3/4'>
                            <img src={brandStratergy} alt="brandStratergy" className='m-auto mb-2 rounded-lg' />
                            {/* <h3 className='font-36-700 text-center '>Brand strategy that drives results</h3> */}
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Increase brand awareness with paid Ads</h2>
                        <p className='font-18-400 my-6'>involves using targeted advertising campaigns on platforms like Google, Facebook, and Instagram. By strategically placing ads where your audience is most active, you can significantly boost visibility and recognition of your brand. This approach drives more traffic to your site, enhances brand recall, and ultimately increases conversions.</p>

                    </div>
                </div>
            </div>

            <ApproacheCard heading='Our Approach to Social Media Marketing' text="social media marketing focuses on creating tailored strategies that align with your business goals. We leverage data-driven insights, engaging content, and targeted advertising to maximize your brand's reach and engagement." approach={approach} />


        </div>
    )
}

export default SocialMedia
