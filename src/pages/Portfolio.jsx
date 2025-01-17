import bannerImg from '../assets/Branding/portfolio.jpg'

const Portfolio = () => {
    return (
        <div>
            <div >
                <img src={bannerImg} alt="portfolio" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center'>A portfolio of brands that move you forward.</h3>
            </div>
            <div className='page-container '>
                <p className='font-24-700 mb-5 mt-10'>How can we help you for create Brand portfolios:</p>

                <div className='mb-10'>
                    <ul className='list-disc marker:text-[#262254]'>
                        <li className='fornt-18-400 my-3'>Reach a wider range of consumers</li>
                        <li className='fornt-18-400 my-3'>Increase brand awareness and loyalty</li>
                        <li className='fornt-18-400 my-3'>Generate more revenue</li>
                        <li className='fornt-18-400 my-3'>Reduce risk by diversifying their product offerings</li>
                        <li className='fornt-18-400 my-3'>Stay competitive in the marketplace</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Portfolio
