
import bannerImg from '../assets/business-automation/marketing-automation.png'
const MarketingAutomation = () => {

    const automation =[
        {content:<p> <b> Increased efficiency and productivity: </b> Marketing automation can help businesses to save time and resources by automating repetitive tasks, such as sending emails, scheduling social media posts, and managing lead generation campaigns. This frees up marketers to focus on more strategic initiatives, such as developing creative content and building relationships with customers.</p>},
        {content:<p> <b> Improved customer targeting and personalization:  </b> Marketing automation platforms allow businesses to collect data about their customers and prospects, such as their interests, demographics, and purchase history. This data can then be used to create targeted and personalized marketing campaigns that are more likely to resonate with each individual customer.</p>},
        {content:<p> <b> Increased sales and revenue: </b> By automating their marketing efforts, businesses can reach more people with the right message at the right time. This can lead to increased leads, sales, and revenue.</p>}
    ]

    return (
        <div>
            <div >
                <img src={bannerImg} alt="marketing-Automation" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className="flex gap-5 justify-center px-2  py-10 bg-[#FFE765] ">
                <h3 className='font-24-700 '>Automate your marketing, and watch your business grow.</h3>
            </div>
            <div className='page-container '>
                <div className='my-10'>
                    <p className='font-18-400 '>Marketing automation is the use of software to automate marketing tasks and execute predetermined campaigns across several different channels at scheduled intervals. It allows businesses to streamline their marketing operations, improve efficiency, and reach their target audience more effectively.</p>

                    <h2 className='font-24-700 my-8'>The benefits of Marketing Automation:</h2>

                    <ul className='list-disc  marker:text-[#262254]'>
                        {
                            automation?.map((item ,index)=>{
                                    return(
                                        <li key={index} className='font-18-400 my-5'> {item?.content}</li>
                                    )
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default MarketingAutomation
