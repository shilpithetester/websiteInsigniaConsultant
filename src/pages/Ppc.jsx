
import brand from '../assets/BannerImages/Brand.jpeg'
import branding from '../assets/BannerImages/search_hero_bg.jpg'
import logoVision from '../assets/logos/image 23.svg'
import portfolioBrand from '../assets/logos/image 24.svg'
import brandStratergy from '../assets/logos/image 25.svg'
import ApproacheCard from '../components/ApproacheCard'
import Cards from '../components/cards'
import ServicesSec from '../components/ServicesSec'
import {lead,serp,budget,targeting,opportunity,algorithm,audit,research,ideate,build,monitor,test} from '../assets/PpcLogo/index'

const Ppc = () => {

    const benefits = [
        { icon: lead, heading: 'Immediate Traffic & Lead Potential', text: `PPC (Pay-Per-Click) advertising offers the benefit of immediate traffic and lead potential by placing your ads directly in front of users actively searching for your products or services.` },
        { icon: serp, heading: 'Higher SERP Visibility', text: 'Placing your ads at the top of search results. This ensures immediate presence and enhanced brand awareness, making your business more accessible to potential customers.' },
        { icon: budget, heading: 'Complete Budget & Ad Spend Control', text: `Allowing you to set daily or monthly limits and adjust spending based on performance. This ensures you never exceed your budget and can allocate resources efficiently.` },
        { icon: targeting, heading: 'Behavior-Based Targeting', text: 'Reach users based on their online activities and interests. This ensures that your ads are shown to individuals who are more likely to be interested in your products or services, leading to higher conversion rates.' },
        { icon: opportunity, heading: 'Flexible Testing Opportunities', text: 'Allowing you to experiment with various ad copies, keywords, and targeting strategies. This flexibility enables you to quickly identify what works best, optimize your campaigns in real-time, and achieve maximum ROI.' },
        { icon: algorithm, heading: 'Separate from Organic Algorithm', text: `Your ads appear independently of organic rankings. This ensures immediate visibility regardless of your site's current SEO status. PPC provides a direct path to attracting traffic and leads.` },
    ]

    const approach = [
        {logo: audit , heading: "AUDIT", text: 'Involves a thorough examination of your campaigns to identify strengths, weaknesses, and opportunities for improvement. ' },
        {logo: research , heading: "RESEARCH", text: `Involves in-depth analysis and data-driven insights to craft effective campaigns. We conduct thorough keyword research.` },
        {logo: ideate , heading: "IDEATE", text: `Ideation involves brainstorming and developing innovative campaign concepts tailored to your business goals. We focus on creating engaging ad.`},
        {logo:build  , heading: "BUILD", text: 'Powerful campaigns from the ground up. We craft compelling ad copy, design engaging visuals, and set precise targeting parameters to reach your ideal audience.' },
        {logo: monitor , heading: "MONITOR", text: `Ensures continuous performance tracking and optimization. We analyze key metrics, track conversions, and make data-driven adjustments to enhance your campaigns.` },
        {logo: test , heading: "TEST", text: `Involves rigorous experimentation to identify the most effective strategies. We conduct A/B tests on ad copy, visuals, and targeting parameters to determine what resonates best with your audience.` },
    ]

    const services = [
        { text: 'Keyword Research & Analysis' },
        { text: 'A/B Testing & CRO' },
        { text: 'PPC Bid Management' },
        { text: 'PPC Account Setup' },
        { text: 'Ad Creation & Management' },
        { text: 'Campaign Landing Pages' },
        { text: 'Display & Retargeting Ads' },
        { text: 'Click-Focused Ad Copywriting' },
        { text: 'PPC Reporting & Analytics' },
    ]


    return (
        <div >
            <div className="relative ">
                <img src={branding} alt="branding" className=" w-full h-[65vh] object-cover" />
                <div className="absolute top-1/3 left-[10%] md:left-[19%] ">
                    <div className="max-w-[650px]">
                        <h2 className="font-65-900 text-white  leading-tight after:content-[''] after:block after:w-44 after:h-[4px] after:bg-customSafron after:mt-2 ">PPC Advertising</h2>
                        {/* <h3 className="font-25-800 text-white mt-5 ">The Insignia Consultant – Your Premier SEO Partner</h3> */}
                        <p className="font-22-500 text-white mt-5 ">The Insignia Consultant, our PPC advertising services are designed to drive targeted traffic and achieve immediate results. Our expert team creates and manages strategic pay-per-click campaigns across various platforms, ensuring maximum visibility and ROI. Let us help you reach your audience effectively and grow your business with our tailored PPC solutions.</p>
                    </div>
                </div>
            </div>
            <div className='page-container '>
                <h2 className="max-w-full  w-max m-auto mt-16 font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Benefits of PPC Advertising</h2>


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
                        <h2 className="max-w-full  w-max m-auto mt-16 font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Precisely Target the Right Audience with PPC Ads</h2>
                        <p className='font-18-400 my-6'>Using advanced targeting options such as keywords, demographics, interests, and behaviors. This ensures your ads reach the most relevant and engaged users, increasing the likelihood of clicks and conversions. With PPC, you can efficiently allocate your budget to attract high-quality traffic and achieve better results.</p>
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
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Expert Google Ads PPC Management Services</h2>

                        <p className='font-18-400 my-6'>Help you maximize your advertising investment by leveraging industry expertise to create, manage, and optimize your PPC campaigns. Our team ensures your ads reach the right audience, achieve high click-through rates, and convert leads into customers. With continuous monitoring and data-driven adjustments, we drive the best possible ROI for your business.</p>
                    </div>
                </div>
            </div>

            <div className=' py-10 '>
                <div className='flex flex-wrap items-center  page-container'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Attract More Local Customers with Google Maps Ads</h2>
                        <p className='font-18-400 my-6'>Showcasing your business in local searches and map results. These ads increase your visibility to nearby customers actively looking for your products or services, driving foot traffic and local engagement. With Google Maps Ads, you can efficiently connect with your local audience and grow your customer base.</p>
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
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Build Brand Awareness with Display PPC Advertising</h2>
                        <p className='font-18-400 my-6'>Placing visually engaging ads on relevant websites and platforms. Display ads increase your brand's visibility to a wider audience, driving recognition and interest. By targeting specific demographics and interests, you ensure your ads reach potential customers who are more likely to resonate with your brand.</p>

                    </div>
                </div>
            </div>

            <div className=' py-10 '>
                <div className='flex flex-wrap items-center  page-container'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Increase Conversion Rates with Retargeting Ads</h2>
                        <p className='font-18-400 my-6'>Reconnecting with users who have previously visited your website. These ads remind potential customers of your products or services, encouraging them to complete their purchase. By targeting users who have already shown interest, retargeting ads effectively boost engagement and drive higher conversion rates.</p>
                    </div>
                    <div className='w-full lg:w-1/2 '>
                        <div className='xl:w-3/4 ms-auto'>
                            <img src={portfolioBrand} alt="portfolioBrand" className='m-auto mb-2 rounded-lg' />
                            {/* <h3 className='font-36-700 text-center '>A portfolio of brands that move you forward.</h3> */}
                        </div>

                    </div>
                </div>
            </div>

            <ApproacheCard heading="OUR Approach to PPC Advertising" approach={approach} />


        </div>
    )
}

export default Ppc
