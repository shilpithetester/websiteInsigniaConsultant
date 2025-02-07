import brand from '../assets/BannerImages/Brand.jpeg'
import branding from '../assets/BannerImages/search_hero_bg.jpg'
import logoVision from '../assets/logos/image 23.svg'
import portfolioBrand from '../assets/logos/image 24.svg'
import brandStratergy from '../assets/logos/image 25.svg'
import ApproacheCard from '../components/ApproacheCard'
import  {research, distill, plan, create, analyst, report } from '../assets/StratergyLogo/Index'

const Stratergy = () => {

    const approach = [
        { logo: research, heading: "RESEARCH", text: 'Our digital strategy workflow begins with thorough research to lay a solid foundation for your campaigns' },
        { logo: distill, heading: "DISTILL", text: `Our digital strategy workflow includes a critical distillation phase that refines insights and data into actionable plans.` },
        { logo: plan, heading: "PLAN", text: `Our digital strategy workflow includes a meticulous planning phase that transforms insights into a clear roadmap.` },
        { logo: create, heading: "CREATE", text: 'Our digital strategy workflow includes a creative phase where ideas come to life.' },
        { logo: analyst, heading: "ANALYTICS", text: `A robust analytics phase to measure performance and drive continuous improvement.` },
        { logo: report, heading: "REPORTING", text: `A detailed reporting phase to provide clarity and insights into your campaign performance.` },
    ]



    return (
        <div >
            <div className="relative ">
                <img src={branding} alt="branding" className=" w-full h-[65vh] object-cover" />
                <div className="absolute top-1/3 left-[10%] md:left-[19%] ">
                    <div className="max-w-[650px]">
                        <h2 className="font-65-900 text-white  leading-tight after:content-[''] after:block after:w-44 after:h-[4px] after:bg-customSafron after:mt-2 ">Digital Strategy</h2>
                        {/* <h3 className="font-25-800 text-white mt-5 ">The Insignia Consultant – Your Premier SEO Partner</h3> */}
                        <p className="font-22-500 text-white mt-5 ">The Insignia Consultant, we craft comprehensive digital strategies tailored to your business goals. Our expert team analyzes market trends, identifies opportunities, and implements innovative solutions to enhance your online presence and drive growth. Let us help you navigate the digital landscape and achieve long-term success with our strategic approach.</p>
                    </div>
                </div>
            </div>
            <div className=' py-10 '>
                <div className='flex flex-wrap items-center  page-container'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto mt-16 font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Data-Driven Strategies to Increase Conversions</h2>
                        <p className='font-18-400 my-6'>Our data-driven strategies are designed to increase conversions by leveraging actionable insights and precise targeting. We analyze key metrics, customer behavior, and market trends to craft personalized campaigns that resonate with your audience. By continuously optimizing based on performance data, we ensure maximum ROI and sustained growth for your business.</p>

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
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Digital Content Strategies for the Entire Customer Journey</h2>
                        <p className='font-18-400 my-6'>Our digital content strategies cover the entire customer journey, from initial awareness to post-purchase loyalty. We create tailored, engaging content that addresses your audience's needs at each stage, fostering trust and driving conversions. By delivering valuable and relevant information, we enhance customer experiences and build long-lasting relationships.</p>
                    </div>
                </div>
            </div>

            <div className=' py-10 '>

                <div className='flex flex-wrap items-center  page-container'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Digital Marketing Strategy for Ecommerce Storefronts</h2>
                        <p className='font-18-400 my-6'>Our digital marketing strategy for ecommerce storefronts is designed to drive traffic, increase sales, and enhance customer loyalty. We utilize SEO, PPC advertising, content marketing, email campaigns, social media marketing, and retargeting to create a comprehensive and effective approach. By continuously monitoring and optimizing our strategies, we ensure maximum ROI and sustained growth for your ecommerce business.</p>
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
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">Dial-In Your Digital Strategy with a Professional Audit</h2>
                        <p className='font-18-400 my-6'>Dial-in your digital strategy with a professional audit to uncover strengths, weaknesses, and opportunities for growth. Our comprehensive audit analyzes key metrics, campaign performance, and audience targeting to provide actionable insights. By refining your strategy based on data-driven recommendations, we ensure maximum ROI and sustained success for your digital initiatives.</p>

                    </div>
                </div>
            </div>


            <ApproacheCard heading="Our Digital Strategy Workflow"  approach={approach} />


        </div>
    )
}

export default Stratergy
