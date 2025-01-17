import bannerImg from '../assets/Branding/marketing.jpg'


const MarketingCollateral = () => {
    return (
        <div>
            <div className='relative'>
                <img src={bannerImg} alt="guideline" className=" w-full h-[55vh] object-cover" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <p className="font-72-500 text-black">Marketing Collateral</p>
                </div>
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center'>Marketing Collateral that Stands Out from the Crowd.</h3>
            </div>

            <div className='page-container'>
                <p className='font-18-400 my-10'>Marketing collateral is any physical or digital material used to promote a company, product, or service. It can include anything from brochures and flyers to website content and social media posts. Marketing collateral is an essential part of any marketing strategy, as it helps to raise awareness of a brand, generate leads, and drive sales. </p>
            </div>
        </div>
    )
}

export default MarketingCollateral
