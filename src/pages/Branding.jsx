import brand from '../assets/BannerImages/Brand.jpeg'
import branding from '../assets/BannerImages/search_hero_bg.jpg'
import logoVision from '../assets/logos/image 23.svg'
import portfolioBrand from '../assets/logos/image 24.svg'
import brandStratergy from '../assets/logos/image 25.svg'
import ApproacheCard from '../components/ApproacheCard'
import  {research, distill, plan, create, analyst, report } from '../assets/StratergyLogo/Index'

const Branding = () => {

    const approach = [
        { logo: research, heading: "RESEARCH", text: 'We begin by understanding your business, goals, and target audience.' },
        { logo: distill, heading: "CREATION", text: ` Our design team develops a visual identity that reflects your brand's personality and values.` },
        { logo: plan, heading: "GUIDELINES", text: `We create comprehensive brand guidelines that outline the standards for your brand's visual and verbal identity.` },
        { logo: create, heading: "CONTENT", text: "We craft compelling and consistent brand messages that communicate your brand's story, values, and unique selling points." },
        { logo: analyst, heading: "IMPLEMENTATION", text: "We assist in implementing your brand across various channels, including your website, social media, marketing materials."},
        { logo: report, heading: "MONITORING", text: "Once your brand is launched, we continuously monitor its performance and gather feedback." },
    ]

    return (
        <div >
            <div className="relative ">
                <img src={branding} alt="branding" className=" w-full h-[65vh] object-cover" />
                <div className="absolute top-1/3 left-[10%] md:left-[19%] ">
                    <div className="max-w-[650px]">
                        <h2 className="font-65-900 text-white  leading-tight after:content-[''] after:block after:w-44 after:h-[4px] after:bg-customSafron after:mt-2 ">Branding</h2>
                        {/* <h3 className="font-25-800 text-white mt-5 ">The Insignia Consultant – Your Premier SEO Partner</h3> */}
                        <p className="font-22-500 text-white mt-5 ">The Insignia Consultant, we specialize in creating strong, memorable brands that resonate with your target audience. Our expert team develops cohesive brand identities, including logos, taglines, and visual elements, to ensure your brand stands out in the market. Let us help you build a distinctive brand that drives customer loyalty and business success.</p>
                    </div>
                </div>
            </div>
            <div className=' py-10 '>
                <div className='flex flex-wrap items-center  page-container'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto mt-16 font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">We help brands grow</h2>
                        <p className='font-18-400 my-6'>Your brand is your most valuable asset. It's what sets you apart from the competition and builds trust with your customers. But with so many brands out there, it can be hard to stand out. That's where we come in. We're a marketing consultancy that helps brands grow. We do this by developing and implementing comprehensive marketing strategies that align with your business goals. We also help you create a strong brand identity that resonates with your target audience. We're passionate about helping brands succeed. We believe that every brand has a unique story to tell, and we're here to help you tell it in the most effective way possible.</p>

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
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">How can we help you for create Brand portfolios:</h2>
                        <p className='font-18-400 my-6'>We assist in creating comprehensive brand portfolios that showcase your brand's strengths, values, and achievements. Our approach includes developing compelling visual and verbal content, organizing key brand assets, and presenting them in a cohesive and professional manner. This ensures your brand portfolio effectively communicates your unique story and resonates with your audience.</p>
                    </div>
                </div>
            </div>

            <div className=' py-10 '>

                <div className='flex flex-wrap items-center  page-container'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">How can we help you for brand strategy:</h2>
                        <p className='font-18-400 my-6'>We help you craft a compelling brand strategy that defines your unique identity, communicates your values, and resonates with your target audience. Through market research, brand positioning, and creative storytelling, we build a strong brand foundation that drives recognition, loyalty, and growth.</p>
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
                        <h2 className="max-w-full  w-max m-auto  font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">How can we help in a brand guideline:</h2>
                        <p className='font-18-400 my-6'>We assist in creating comprehensive brand guidelines that define your brand's visual and verbal identity. By establishing consistent standards for logos, color palettes, typography, tone of voice, and messaging, we ensure your brand communicates a cohesive and professional image across all platforms.</p>

                    </div>
                </div>
            </div>


            <ApproacheCard heading="Our Branding Workflow"  approach={approach} />


        </div>
    )
}

export default Branding







// // import branding from '../assets/BannerImages/branding.jpg'
// import brand from '../assets/BannerImages/Brand.jpeg'
// import branding from '../assets/BannerImages/search_hero_bg.jpg'
// import logoVision from '../assets/logos/image 23.svg'
// import portfolioBrand from '../assets/logos/image 24.svg'
// import brandStratergy from '../assets/logos/image 25.svg'
// import brandVoice from '../assets/logos/image 26.svg'
// import marketingCollateral from '../assets/logos/image 27.svg'

// const Branding = () => {

//     const brandingList = [
//         { content: 'We have a team of experienced and qualified marketing professionals who can help you develop and implement a successful marketing strategy.' },
//         { content: 'We offer a wide range of services to meet the needs of businesses of all sizes.' },
//         { content: `We're committed to helping our clients succeed. We work with you closely to understand your business goals and develop a strategy that will help you achieve them.` },
//         { content: `We're affordable and offer a variety of pricing options to fit your budget.` },
//     ]

//     const Logolist = [
//         { content: 'We are able to create logos that are perfectly tailored to your brand. We take the time to understand your brand values, target audience, and desired aesthetic before we start designing your logo. This ensures that your logo is a true reflection of your brand.' },
//         { content: 'We are able to generate logos that are versatile and adaptable. Your logo will need to look good in a variety of applications, from websites and social media to print materials and signage. We take this into account when designing your logo, so you can be confident that it will look great everywhere.' },
//         { content: 'We are committed to providing you with a positive and enjoyable experience. We want you to be happy with your logo design, and we are always happy to make changes until you are completely satisfied.' },
//     ]
//     const stratergy = [
//         { content: <p><b>I can help you to define your brand identity. </b> This includes understanding your brand's core values, mission, and vision. I can also help you to develop a brand persona, which is a representation of your ideal customer.</p> },
//         { content: <p><b>I can help you to identify your target audience. </b>This involves understanding their needs, wants, and pain points. I can also help you to develop a deep understanding of your competitive landscape.</p> },
//         { content: <p><b>I can help you to develop a brand positioning statement. </b>This is a short statement that sums up what your brand stands for and why it is different from its competitors.</p> },
//         { content: <p><b>I can help you to create a brand story. </b>This is a narrative that explains why your brand exists and what it has to offer the world.</p> },
//         { content: <p><b>I can help you to develop a brand messaging strategy. </b>This involves creating a set of core messages that will be used to communicate your brand's value proposition to your target audience.</p> },
//         { content: <p><b>I can help you to develop a brand visual identity.</b>This includes creating a logo, color palette, and typography that will be used to represent your brand visually.</p> },
//     ]
//     const guideline = [
//         { content: <p><b>Brand overview: </b> This section should provide a brief overview of the brand, including its mission, values, and target audience.</p> },
//         { content: <p><b>Logo usage:  </b> This section should provide guidelines on how to use the brand's logo, including the different versions of the logo, the minimum size at which it can be used, and the clear space required around it.</p> },
//         { content: <p><b>Color palette:  </b>This section should provide the brand's primary and secondary colors, as well as their hex codes and RGB values.</p> },
//         { content: <p><b>Typography: </b>This section should provide the brand's primary and secondary fonts, as well as the guidelines for using them, such as font size, line height, and kerning.</p> },
//         { content: <p><b>Imagery </b>This section should provide guidelines on the types of imagery that should be used to represent the brand, as well as the style of photography and illustration that should be used.</p> },
//         { content: <p><b>Tone of voice:</b>This section should describe the brand's tone of voice, including the types of language and personality that should be used in its communications.</p> },
//     ]
//     return (
//         <div >
//             <div className="relative">
//                 <img src={branding} alt="branding" className=" w-full h-[65vh] object-cover" />
//                 <div className="absolute top-1/3 left-[10%] md:left-[19%] ">
//                     <div className="max-w-[650px]">
//                         <h2 className="font-65-900 text-white  leading-tight after:content-[''] after:block after:w-44 after:h-[4px] after:bg-customSafron after:mt-2 ">Branding</h2>
//                         {/* <h3 className="font-25-800 text-white mt-5 ">The key unlocking your market potential.</h3> */}
//                         <p className="font-22-500 text-white mt-5 ">Branding is the process of making a product, organization, or person distinct from others by using a name, design, symbol, or set of qualities</p>
//                     </div>
//                 </div>
//                 {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <p className="font-72-500 text-white">Branding</p>
//                 </div> */}
//             </div>
//             {/* <div className="flex  gap-5 justify-center mb-10 px-2 py-10 bg-customlightGreen ">
//                 <h3 className='font-24-700 '>We help brands grow</h3>
//             </div> */}
//             <div className='page-container'>
//                 <h2 className="max-w-full w-max m-auto mt-10 font-40-900 after:content-[''] after:block after:w-24 after:h-[4px] after:bg-customSafron after:mt-2 ">We help brands grow</h2>
//             </div>

//             {/* <div className='page-container py-5'>
//                 <p className='font-18-400 my-6'>Your brand is your most valuable asset. It's what sets you apart from the competition and builds trust with your customers. But with so many brands out there, it can be hard to stand out. That's where we come in.</p>
//                 <p className='font-18-400 '>We're a marketing consultancy that helps brands grow. We do this by developing and implementing comprehensive marketing strategies that align with your business goals. We also help you create a strong brand identity that resonates with your target audience.</p>
//                 <p className='font-18-400 my-6'>We're passionate about helping brands succeed. We believe that every brand has a unique story to tell, and we're here to help you tell it in the most effective way possible.</p>
//             </div> */}

//             <div className=' py-10 '>
//                 <div className='flex flex-wrap items-center  page-container'>
//                     <div className='w-full lg:w-1/2'>
//                         <p className='font-18-400 my-6'>Your brand is your most valuable asset. It's what sets you apart from the competition and builds trust with your customers. But with so many brands out there, it can be hard to stand out. That's where we come in.</p>
//                         <p className='font-18-400 '>We're a marketing consultancy that helps brands grow. We do this by developing and implementing comprehensive marketing strategies that align with your business goals. We also help you create a strong brand identity that resonates with your target audience.</p>
//                         <p className='font-18-400 my-6'>We're passionate about helping brands succeed. We believe that every brand has a unique story to tell, and we're here to help you tell it in the most effective way possible.</p>
//                     </div>
//                     <div className='w-full lg:w-1/2 '>
//                         <div className='xl:w-3/4 ms-auto'>
//                             <img src={brand} alt="brand" className='m-auto mb-2 rounded-lg' />
//                         </div>

//                     </div>
//                 </div>
//             </div>

//             <div className=' bg-customGrey py-10 '>
//                 <div className='flex flex-wrap items-center page-container max-lg:justify-center'>
//                     <div className='w-full lg:w-1/2 '>
//                         <div className='xl:w-3/4'>
//                             <img src={logoVision} alt="logoVision" className='m-auto mb-2 rounded-lg' />
//                             <h3 className='font-36-700 text-center '>Your logo, your vision.</h3>
//                         </div>
//                     </div>
//                     <div className='w-full lg:w-1/2'>
//                         <p className='font-18-400 mt-10'>Logo design can be a complex process, but it is important to keep the key elements in mind when creating a logo that will be effective for your brand. </p>
//                         <h3 className='font-24-700 mt-6'>How can we help you to create logo design</h3>

//                         <div className='mb-10'>
//                             <ul className='list-disc marker:text-customSafron'>
//                                 {
//                                     Logolist?.map((item, index) => {
//                                         return (
//                                             <li key={index} className='my-3 font-18-400'>{item?.content}</li>
//                                         )
//                                     })
//                                 }
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className=' py-10 '>
//                 <div className='flex flex-wrap items-center  page-container'>
//                     <div className='w-full lg:w-1/2'>
//                         <p className='font-24-700 mb-5 mt-10'>How can we help you for create Brand portfolios:</p>

//                         <div className='mb-10'>
//                             <ul className='list-disc marker:text-customSafron'>
//                                 <li className='font-18-400 my-3'>Reach a wider range of consumers</li>
//                                 <li className='font-18-400 my-3'>Increase brand awareness and loyalty</li>
//                                 <li className='font-18-400 my-3'>Generate more revenue</li>
//                                 <li className='font-18-400 my-3'>Reduce risk by diversifying their product offerings</li>
//                                 <li className='font-18-400 my-3'>Stay competitive in the marketplace</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className='w-full lg:w-1/2 '>
//                         <div className='xl:w-3/4 ms-auto'>
//                             <img src={portfolioBrand} alt="portfolioBrand" className='m-auto mb-2 rounded-lg' />
//                             <h3 className='font-36-700 text-center '>A portfolio of brands that move you forward.</h3>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//             <div className=' bg-customGrey py-10 '>
//                 <div className='flex flex-wrap items-center page-container'>
//                     <div className='w-full lg:w-1/2'>
//                         <div className='xl:w-3/4'>
//                             <img src={brandStratergy} alt="brandStratergy" className='m-auto mb-2 rounded-lg' />
//                             <h3 className='font-36-700 text-center '>Brand strategy that drives results</h3>
//                         </div>
//                     </div>
//                     <div className='w-full lg:w-1/2'>
//                         <p className='font-24-700 mb-5 mt-10'>How can we help you for brand strategy:</p>

//                         <div className='mb-10'>
//                             <ul className='list-disc marker:text-customSafron'>
//                                 {
//                                     stratergy?.map((item, index) => {
//                                         return (
//                                             <li key={index} className='font-18-400 my-3'>{item?.content}</li>

//                                         )
//                                     })
//                                 }
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className=' py-10 '>
//                 <div className='flex flex-wrap items-center  page-container'>
//                     <div className='w-full lg:w-1/2'>
//                         <p className='font-18-400 mb-5 mt-10'>A brand guideline, also known as a brand style guide, is a document that outlines the visual and verbal identity of a brand. It provides guidance on how to use the brand's logo, colors, fonts, typography, imagery, and tone of voice. Brand guidelines are important for ensuring that a brand is presented consistently across all channels, from its website and social media to its marketing materials and customer service interactions. </p>
//                         <p className='font-24-700 mb-5 mt-10'>How can we help in a brand guideline:</p>

//                         <div className='mb-10'>
//                             <ul className='list-disc marker:text-customSafron'>
//                                 {
//                                     guideline?.map((item, index) => {
//                                         return (
//                                             <li key={index} className='font-18-400  my-3'>{item?.content}</li>

//                                         )
//                                     })
//                                 }
//                             </ul>
//                         </div>
//                     </div>
//                     <div className='w-full lg:w-1/2 '>
//                         <div className='xl:w-3/4 ms-auto'>
//                             <img src={brandVoice} alt="brandVoice" className='m-auto mb-2 rounded-lg' />
//                             <h3 className='font-36-700 text-center '>Your brand's voice, look, and feel, all in one place.</h3>
//                         </div>
//                         {/* <img src={brandVoice} alt="brandVoice" className='w-3/4 max-xl:m-auto xl:ms-auto mb-2 rounded-lg' />
//                         <h3 className='font-36-700 text-center lg:w-3/4 max-lg:m-auto lg:ms-auto '>Your brand's voice, look, and feel, all in one place.</h3> */}
//                     </div>
//                 </div>
//             </div>

//             <div className=' bg-customGrey py-10 '>
//                 <div className='flex flex-wrap items-center page-container'>
//                     <div className='w-full lg:w-1/2'>
//                         <div className='xl:w-3/4'>
//                             <img src={marketingCollateral} alt="marketingCollateral" className='m-auto mb-2 rounded-lg' />
//                             <h3 className='font-36-700 text-center '>Marketing Collateral that Stands Out from the Crowd.</h3>
//                         </div>
//                     </div>
//                     <div className='w-full lg:w-1/2'>
//                         <p className='font-18-400 my-10'>Marketing collateral is any physical or digital material used to promote a company, product, or service. It can include anything from brochures and flyers to website content and social media posts. Marketing collateral is an essential part of any marketing strategy, as it helps to raise awareness of a brand, generate leads, and drive sales. </p>
//                     </div>
//                 </div>
//             </div>
//             <div className='page-container'>
//                 <div className='my-10'>
//                     <p className='font-24-700 mb-5'>How can we help you for Branding</p>
//                     <ul className='list-disc  marker:text-customSafron'>
//                         {
//                             brandingList?.map((item, index) => {
//                                 return (
//                                     <li key={index} className='font-18-400 py-3'>{item?.content}</li>
//                                 )
//                             })
//                         }
//                     </ul>
//                 </div>
//                 <div className='mb-10'>
//                     <p className='font-24-700'>Guarantee:</p>
//                     <p className='font-18-400 my-5'>We're so confident that you'll be happy with our services that we offer a 100% satisfaction guarantee. If you're not happy with the results you're getting, simply let us know and we'll work with you to make things right.</p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Branding
