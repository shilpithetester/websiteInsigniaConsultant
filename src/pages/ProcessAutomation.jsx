
import bannerImg from '../assets/BannerImages/business-automation.jpg'

const ProcessAutomation = () => {

    const automation = [
        { content: <p><b>Improved efficiency:</b> RPA can automate tasks that are currently performed manually, which can free up employees to focus on more strategic and value-added activities.</p> },
        { content: <p><b>Reduced errors: </b> Automation can help to eliminate human error, which can lead to improved data accuracy and compliance.</p> },
        { content: <p><b>Increased productivity:</b> Automation can help to streamline processes and reduce the amount of time it takes to complete tasks. This can lead to increased productivity and throughput.</p> },
        { content: <p><b>Improved customer experience: </b> Automation can help to improve customer service by providing faster, more consistent, and more accurate responses to customer inquiries.</p> },
    ]

    return (
        <div>
            <div >
                <img src={bannerImg} alt="marketing-Automation" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-32-700 text-center'>Process Automation</h3>
                <h3 className='font-24-700 text-center'>Automate your processes and free up your time</h3>
            </div>

            <div className='page-container '>

                <p className='font-24-700 mt-10'>How can we help you for Process Automation</p>
                <ul className='list-disc  marker:text-[#262254]  mt-5 mb-10'>
                    {
                        automation?.map((item, index) => {
                            return (
                                <li key={index} className=' font-18-400 my-4'>{item?.content}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProcessAutomation
