
import brand from '../assets/BannerImages/Brand.jpeg'
import branding from '../assets/BannerImages/search_hero_bg.jpg'
import logoVision from '../assets/logos/image 23.svg'
import portfolioBrand from '../assets/logos/image 24.svg'
import brandStratergy from '../assets/logos/image 25.svg'
import ApproacheCard from '../components/ApproacheCard'
import Cards from '../components/Cards'
import ServicesSec from '../components/ServicesSec'
import { websiteTraffic, funnel, brandAuthority,leads,longterm,track,audit,research,creative ,technical, analytics,reporting} from '../assets/seoLogo/index'

const Seo = () => {

    const benefits = [
        { icon: websiteTraffic, heading: 'Attract Quality Website Traffic', text: `Improving your site's visibility in search engine results. It brings in visitors who are actively searching for products or services like yours, leading to higher engagement and conversion rates.` },
        { icon: funnel, heading: 'Target Full Marketing Funnel', text: 'Attracting visitors at every stage of their buying journey. From awareness to consideration to conversion, SEO ensures your content reaches and resonates with potential customers.' },
        { icon: brandAuthority, heading: 'Grow Brand Authority', text: `Improving your website's search engine rankings and establishing your brand as a credible and reliable source of information. By creating high-quality, relevant content and earning backlinks from reputable sites.` },
        { icon: leads, heading: 'Generate Qualified Leads', text: 'Targeting users actively searching for your products or services. By optimizing your website with relevant keywords, high-quality content, and a seamless user experience.' },
        { icon: longterm, heading: 'Longterm ROI Potential', text: 'long-term ROI potential by continuously driving organic traffic to your website. Unlike paid ads, SEO builds sustainable results over time, increasing visibility and attracting high-quality visitors.' },
        { icon: track, heading: 'Track SEO Growth & Lead Attribution', text: `analytics tools, you can monitor your website's performance, keyword rankings, and traffic sources. This data helps you understand which strategies are driving results and how leads are generated.` },
    ]

    const approach = [
        {logo: audit , heading: "AUDIT", text: 'SEO strategy is data-driven and effective, helping you achieve better visibility, higher rankings, and increased traffic.' },
        {logo: research , heading: "RESEARCH", text: `Our SEO company's approach to research-driven SEO is meticulous and comprehensive.` },
        {logo: creative , heading: "CREATIVE", text: `Our SEO company's approach to creative SEO combines innovation and artistry to make your brand stand out.`},
        {logo:technical  , heading: "TECHNICAL", text: 'Ensures your website is optimized for search engines and provides a seamless user experience.' },
        {logo: analytics , heading: "ANALYTICS", text: `Our SEO company's approach to analytics-driven SEO ensures that every decision is backed by data and insights.` },
        {logo: reporting , heading: "REPORTING", text: `Our SEO company's approach to reporting ensures transparency, accountability, and continuous improvement.` },
    ]

    const services = [
        { text: 'SEO Channel Strategy' },
        { text: 'Technical SEO Execution' },
        { text: 'User Intent Analysis' },
        { text: 'SEO Competitive Analysis' },
        { text: 'Creative SEO Copywriting' },
        { text: 'Link Building Programs' },
        { text: 'Comprehensive SEO Audits' },
        { text: 'Structured Data Integration' },
        { text: 'In-Depth Keyword Research' },
        { text: 'SEO Content Strategy' },
        { text: 'SEO Analytics & Reporting' },
        { text: 'UX Architecture & Sitemapping' },
    ]


    return (
        <div >
            <div className="relative ">
                <img src={branding} alt="branding" className=" w-full h-[65vh] object-cover" />
                <div className="absolute top-1/3 left-[10%] md:left-[19%] ">
                    <div className="max-w-[650px]">
                        <h2 className="font-65-900 text-white  leading-tight after:content-[''] after:block after:w-44 after:h-[4px] after:bg-customSafron after:mt-2 ">SEO Services</h2>
                        <h3 className="font-25-800 text-white mt-5 ">The Insignia Consultant – Your Premier SEO Partner</h3>
                        <p className="font-22-500 text-white mt-5 ">The Insignia Consultant, we specialize in elevating your digital presence through our bespoke SEO services.</p>
                    </div>
                </div>
            </div>
            <div className='page-container '>
                <h2 className="max-w-full  w-max m-auto mt-16 font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Benefits of Search Engine Optimization</h2>


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
                        <h2 className="max-w-full  w-max m-auto mt-16 font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">SEO that Builds Trust & Authority the Right Way</h2>
                        <p className='font-18-400 my-6'>SEO that builds trust and authority the right way focuses on creating high-quality content, earning reputable backlinks, and providing an excellent user experience. By adhering to ethical SEO practices, you establish your brand as a credible and reliable source of information. This approach not only enhances search engine rankings but also fosters trust and loyalty among your audience.</p>
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
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Local SEO Services Target Customers Near You</h2>

                        <p className='font-18-400 my-6'>Local SEO services are designed to target customers in your geographic area by optimizing your online presence for local searches. This involves enhancing your Google My Business profile, local keyword optimization, and obtaining local backlinks. By focusing on local SEO, you attract nearby customers who are actively looking for your products or services, driving foot traffic and increasing local engagement.</p>
                    </div>
                </div>
            </div>

            <div className=' py-10 '>
                <div className='flex flex-wrap items-center  page-container'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Boost Ecommerce Sales with our SEO Services</h2>
                        <p className='font-18-400 my-6'>Boost ecommerce sales with our SEO services by improving your online store's visibility and attracting high-intent shoppers. By optimizing product pages, enhancing site speed, and implementing effective keyword strategies, we drive more traffic and conversions. Our tailored approach ensures that your ecommerce business achieves sustainable growth and increased revenue.</p>
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
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Brand Online Reputation Management with SEO Roots</h2>
                        <p className='font-18-400 my-6'>Brand Online Reputation Management with SEO roots involves enhancing your brand's credibility and visibility through ethical SEO practices. By creating high-quality content, earning reputable backlinks, and monitoring online mentions, we help you build a positive and authoritative online presence. This approach ensures that your brand is perceived positively, driving trust and loyalty among your audience.</p>

                    </div>
                </div>
            </div>

            <div className=' py-10 '>
                <div className='flex flex-wrap items-center  page-container'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Gain Strategic & Competitive Insights with an SEO Audit</h2>
                        <p className='font-18-400 my-6'>Gain strategic and competitive insights with an SEO audit by analyzing your website's performance, identifying strengths and weaknesses, and uncovering opportunities for improvement. Our comprehensive audit examines key aspects such as keyword usage, content quality, backlinks, and technical SEO, providing you with actionable recommendations to enhance your online presence and outperform competitors.</p>
                    </div>
                    <div className='w-full lg:w-1/2 '>
                        <div className='xl:w-3/4 ms-auto'>
                            <img src={portfolioBrand} alt="portfolioBrand" className='m-auto mb-2 rounded-lg' />
                            {/* <h3 className='font-36-700 text-center '>A portfolio of brands that move you forward.</h3> */}
                        </div>

                    </div>
                </div>
            </div>

            <ApproacheCard heading="Our SEO Company's Approach" approach={approach} />


        </div>
    )
}

export default Seo
