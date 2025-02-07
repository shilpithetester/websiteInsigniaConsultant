
import businessAutomation from '../assets/logos/image 21.svg'
import MarketingAutomation from '../assets/logos/image 22.svg'
// import businessAutomation from '../assets/BannerImages/business-automation.jpg'
// import MarketingAutomation from '../assets/business-automation/marketing-automation.png'
import BannerImg from '../assets/BannerImages/search_hero_bg.jpg'
import Automation from '../assets/BannerImages/automation.jpeg'

const BusinessAutomation = () => {

    const business = [
        { content: <p><b>We have a deep understanding of business automation:</b> We have been helping businesses to automate their tasks and processes for many years. We have the knowledge and experience to help you to choose the right automation solutions and to implement them successfully.</p> },
        { content: <p><b>We offer a wide range of business automation services:</b> We can help you to automate all aspects of your business, from marketing and sales to customer service and accounting. We have a team of experts who can help you to choose the right solutions for your specific needs and to implement them smoothly.</p> },
        { content: <p><b>We are committed to customer satisfaction:</b> We want to help you to achieve your business goals through business automation. We work closely with our clients to understand their needs and to develop solutions that meet those needs. We also provide ongoing support to ensure that our clients are successful with their automation initiatives.</p> },
        { content: <p><b>We can help you to automate your marketing and sales processes.  </b></p> },
        { content: <p><b>We can help you to automate your customer service processes. </b></p> },
    ]
    const automation = [
        { content: <p> <b> Increased efficiency and productivity: </b> Marketing automation can help businesses to save time and resources by automating repetitive tasks, such as sending emails, scheduling social media posts, and managing lead generation campaigns. This frees up marketers to focus on more strategic initiatives, such as developing creative content and building relationships with customers.</p> },
        { content: <p> <b> Improved customer targeting and personalization:  </b> Marketing automation platforms allow businesses to collect data about their customers and prospects, such as their interests, demographics, and purchase history. This data can then be used to create targeted and personalized marketing campaigns that are more likely to resonate with each individual customer.</p> },
        { content: <p> <b> Increased sales and revenue: </b> By automating their marketing efforts, businesses can reach more people with the right message at the right time. This can lead to increased leads, sales, and revenue.</p> }
    ]
    const Processautomation = [
        { content: <p><b>Improved efficiency:</b> RPA can automate tasks that are currently performed manually, which can free up employees to focus on more strategic and value-added activities.</p> },
        { content: <p><b>Reduced errors: </b> Automation can help to eliminate human error, which can lead to improved data accuracy and compliance.</p> },
        { content: <p><b>Increased productivity:</b> Automation can help to streamline processes and reduce the amount of time it takes to complete tasks. This can lead to increased productivity and throughput.</p> },
        { content: <p><b>Improved customer experience: </b> Automation can help to improve customer service by providing faster, more consistent, and more accurate responses to customer inquiries.</p> },
    ]
    return (
        <div>
            <div className="relative">
                <img src={BannerImg} alt="businessAutomation" className=" w-full h-[65vh] object-cover" />
                <div className="absolute top-1/3 left-[10%] md:left-[19%] ">
                    <div className="max-w-[650px]">
                        <h2 className="font-65-900 text-white  leading-tight after:content-[''] after:block after:w-44 after:h-[4px] after:bg-customSafron after:mt-2 ">Business Automation</h2>
                        {/* <h3 className="font-25-800 text-white mt-5 ">The key unlocking your market potential.</h3> */}
                        <p className="font-22-500 text-white mt-5 ">Business automation is the use of technology to perform repetitive tasks, freeing up employees to focus on more valuable work</p>
                    </div>
                </div>
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="font-72-500 text-white">Business Automation</p>
                </div> */}
            </div>
            {/* <div className="flex gap-5 justify-center px-2 py-10 bg-customlightGreen ">
            </div> */}
            {/* <div className='page-container'>
                <h2 className="max-w-full w-max m-auto font-40-900 mt-10 after:content-[''] after:block after:w-40 after:h-[4px] after:bg-customSafron after:mt-2 ">Automation: The key to unlocking your business potential</h2>
            </div> */}

            {/* <h3 className='font-24-700 w-max m-auto mt-10'>Automation: The key to unlocking your business potential</h3> */}

            <div className=' bg-customGrey py-10 '>
                <div className='flex flex-wrap items-center page-container'>
                    <div className='w-full xl:w-1/2'>
                        <h2 className='font-24-700 mb-5'>Automation: The key to unlocking your business potential</h2>
                        <p className='font-18-400 '>Marketing automation is the use of software to automate marketing tasks and execute predetermined campaigns across several different channels at scheduled intervals. It allows businesses to streamline their marketing operations, improve efficiency, and reach their target audience more effectively.</p>

                    </div>
                    <div className='w-full xl:w-1/2 max-xl:m-auto '>
                        <div className='xl:w-3/4 ms-auto'>
                            <img src={Automation} alt="Automation" className='m-auto mb-2 rounded-lg' />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' py-10 '>
                <div className='flex flex-wrap items-center  page-container'>
                    <div className='w-full xl:w-1/2 max-xl:m-auto'>
                        <div className='xl:w-3/4'>
                            <img src={MarketingAutomation} alt="MarketingAutomation" className='m-auto mb-2 rounded-lg' />
                            <h3 className='font-36-700 text-center '> Business Automation</h3>
                        </div>
                    </div>
                    <div className='w-full xl:w-1/2 max-xl:mt-5'>
                        {/* <p className='font-18-400 '>Marketing automation is the use of software to automate marketing tasks and execute predetermined campaigns across several different channels at scheduled intervals. It allows businesses to streamline their marketing operations, improve efficiency, and reach their target audience more effectively.</p> */}

                        <h2 className='font-24-700 my-8'>The benefits of Marketing Automation:</h2>

                        <ul className='list-disc  marker:text-customSafron'>
                            {
                                automation?.map((item, index) => {
                                    return (
                                        <li key={index} className='font-18-400 my-5'> {item?.content}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' bg-customGrey py-10 '>
                <div className='flex flex-wrap items-center page-container'>
                    <div className='w-full xl:w-1/2'>
                        <p className='font-24-700 mt-10'>How can we help you for Process Automation</p>
                        <ul className='list-disc  marker:text-customSafron  mt-5 mb-10'>
                            {
                                Processautomation?.map((item, index) => {
                                    return (
                                        <li key={index} className=' font-18-400 my-4'>{item?.content}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='w-full xl:w-1/2 max-xl:m-auto '>
                        <div className='xl:w-3/4 ms-auto'>
                            <img src={businessAutomation} alt="businessAutomation" className='m-auto mb-2 rounded-lg' />
                            <h3 className='font-36-700 text-center '>Automation process</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='page-container'>

                <div className='my-10'>
                    <p className='font-24-700 mb-5'>Why you should choose us for business automation</p>
                    <ul className='list-disc  marker:text-customSafron'>
                        {
                            business?.map((item, index) => {
                                return (
                                    <li key={index} className='font-18-400 py-3'>{item?.content}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default BusinessAutomation
