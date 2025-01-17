import bannerImg from '../assets/GoogleList/shopping-ads.jpg'

const ShopingAds = () => {
    return (
        <div>
            <div >
                <img src={bannerImg} alt="Shoping-Ads-Img" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center mb-5'>The most effective way to reach potential customers and boost sales.   </h3>
                <p className='font-18-400 page-container'>Shopping ads are a great way to reach potential customers who are already interested in what you have to offer. When someone clicks on a shopping ad, they are taken directly to the product page on the merchant's website. This makes it easy for potential customers to learn more about the product and make a purchase.</p>
            </div>
            <div className='page-container'>
                <div className='my-10'>
                    <p className='font-24-700 mb-5'>How we can help you with your shopping ads:</p>

                    <ul className='list-disc  marker:text-[#262254]'>
                        <li className='font-18-400 my-3'><p><b>Create and manage your shopping ad campaigns. </b>We will work with you to create and manage your shopping ad campaigns on Google Ads. We will also help you to choose the right products to promote, set your budget, and write effective ad copy.</p></li>
                        <li className='font-18-400 my-3'><p><b>Optimize your shopping ad campaigns for performance.</b>We will monitor your shopping ad campaigns and make necessary adjustments to ensure that you are getting the most out of your budget. We will also help you to identify and fix any issues that are affecting your campaign performance.</p></li>
                        <li className='font-18-400 my-3'><p><b>Track and measure your shopping ad results.</b>We will provide you with detailed reports on your shopping ad performance, so that you can see what is working and what is not. We will also help you to identify areas for improvement.</p></li>
                        <li className='font-18-400 my-3'><p><b>Improve your overall online presence.</b>We can help you to improve your overall online presence through SEO, social media marketing, and other digital marketing services. This will help you to reach more potential customers and increase the visibility of your brand.</p></li>
                    </ul>
                </div>
                <div className= 'mt-14 mb-10'>
                    <p className='font-24-700 mb-5'>The benefits of shopping ads:</p>

                    <ul className='list-disc  marker:text-[#262254]'>
                        <li className='font-18-400 my-3'><p><b>Increased visibility:  </b>Shopping ads appear at the top of SERPs, which means that they are more likely to be seen by potential customers.</p></li>
                        <li className='font-18-400 my-3'><p><b>Targeted traffic:</b>Shopping ads are targeted to people who are already searching for the products that you sell. This means that you are more likely to reach people who are interested in what you have to offer.</p></li>
                        <li className='font-18-400 my-3'><p><b>Higher conversion rates: </b> Shopping ads have higher conversion rates than other types of online advertising. This is because people who click on shopping ads are already interested in the product and are more likely to make a purchase.</p></li>
                        <li className='font-18-400 my-3'><p><b>Measurable results: </b>Shopping ad results are very measurable, so you can track how effective your campaigns are and where your budget is going.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShopingAds
