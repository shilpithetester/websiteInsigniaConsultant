import { Link } from 'react-router-dom'
import businessAutomation from '../assets/BannerImages/business-automation.jpg'
import MarketingAutomation from '../assets/business-automation/marketing-automation.png'

const BusinessAutomation = () => {

    const Lists = [
        { logo: MarketingAutomation, link: 'Marketing Automation',to:'/marketing-automation', text: 'Marketing automation is the use of software to automate marketing tasks and execute predetermined campaigns across several different channels at scheduled intervals. It allows businesses to streamline their marketing operations, improve efficiency, and reach their target audience more effectively.' },
        { logo: businessAutomation, link: 'Process Automation',to:'/process-automation', text: 'Process automation is the use of technology to automate business processes and functions in order to accomplish defined organizational goals. ' },
    ]

    const business = [
        { content: <p><b>We have a deep understanding of business automation:</b> We have been helping businesses to automate their tasks and processes for many years. We have the knowledge and experience to help you to choose the right automation solutions and to implement them successfully.</p> },
        { content: <p><b>We offer a wide range of business automation services:</b> We can help you to automate all aspects of your business, from marketing and sales to customer service and accounting. We have a team of experts who can help you to choose the right solutions for your specific needs and to implement them smoothly.</p> },
        { content: <p><b>We are committed to customer satisfaction:</b> We want to help you to achieve your business goals through business automation. We work closely with our clients to understand their needs and to develop solutions that meet those needs. We also provide ongoing support to ensure that our clients are successful with their automation initiatives.</p> },
        { content: <p><b>We can help you to automate your marketing and sales processes.  </b></p> },
        { content: <p><b>We can help you to automate your customer service processes. </b></p> },
    ]

    return (
        <div>
            <div >
                <img src={businessAutomation} alt="businessAutomation" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className="flex gap-5 justify-center px-2 py-10 bg-[#FFE765] ">
                <h3 className='font-24-700 '>Automation: The key to unlocking your business potential</h3>
            </div>

            <div className='page-container'>
                <div className="flex flex-wrap gap-12 justify-center mt-5">
                    {
                        Lists?.map((item, index) => {
                            return (
                                <div key={index} className=" items-center my-4 lg:w-[45%]">
                                    <div className="flex items-center gap-4">
                                        <div className="w-20 h-20 rounded-full overflow-hidden ">
                                            <img src={item?.logo} alt="Logo" className="w-full h-full object-fill" />
                                        </div>
                                        <Link className="font-20-700 underline decoration-2 text-[#270048]" to={item?.to}>{item?.link}</Link>
                                    </div>
                                    <div >
                                        <p className="mt-4 font-16-400">{item?.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='my-10'>
                    <p className='font-24-700 mb-5'>Why you should choose us for business automation</p>
                    <ul className='list-disc  marker:text-[#262254]'>
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
