import bannerImg from '../assets/GoogleList/google-ads.png'

const LocalService = () => {
    return (
        <div>
            <div >
                <img src={bannerImg} alt="LocalServices-Ads-Img" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center'>Connect with customers who are searching for your services </h3>
            </div>
            <div className='page-container'>
                <div className='my-10'>
                    <p className='font-24-700 mb-5'>Why you should choose us for LSAs :</p>

                    <ul className='list-disc  marker:text-[#262254]'>
                        <li className='font-18-400 my-3'><p><b>Account setup and management: </b>We can help you create and manage your LSA account, including setting up your budget, keywords, and ad copy.</p></li>
                        <li className='font-18-400 my-3'><p><b>Campaign optimization: </b>We will monitor your LSA campaigns and make necessary adjustments to ensure that you are getting the most out of your budget.</p></li>
                        <li className='font-18-400 my-3'><p><b>Lead nurturing:</b>We can help you nurture your LSA leads through email marketing and other channels to convert them into paying customers.</p></li>
                        <li className='font-18-400 my-3'><p><b>Reporting and analytics: </b>We will provide you with detailed reports on your LSA performance, so that you can see what is working and what is not.</p></li>
                    </ul>
                </div>
                <div className='mt-14 mb-10'>
                    <p className='font-24-700 mb-5'>The benefits of using LSAs:</p>

                    <ul className='list-disc  marker:text-[#262254]'>
                        <li className='font-18-400 my-3'><p><b>Target local customers: </b>LSAs only appear for searches in the business's service area. This means that businesses can target their advertising to the people who are most likely to be interested in their services.</p></li>
                        <li className='font-18-400 my-3'><p><b>Get high-quality leads:</b>LSAs are pay-per-lead, so businesses only pay when a potential customer contacts them directly. This means that the businesses that are using LSAs are more likely to be generating high-quality leads.</p></li>
                        <li className='font-18-400 my-3'><p><b>Improve visibility:  </b> LSAs appear at the top of SERPs for relevant searches. This means that businesses can get their ads seen by more potential customers.</p></li>
                        <li className='font-18-400 my-3'><p><b>Build trust and credibility:</b>LSAs include information such as the business's name, address, phone number, and customer reviews. This helps to build trust and credibility with potential customers.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LocalService
