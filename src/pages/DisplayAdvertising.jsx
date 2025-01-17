import bannerImg from '../assets/GoogleList/display-ads.png'

const DisplayAdvertising = () => {
    return (
        <div>
            <div >
                <img src={bannerImg} alt="Display-advertise-Img" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center'>Get your brand seen by the world.  </h3>
            </div>
            <div className='page-container'>
                <div className='mt-10 '>
                    <p className='font-18-400 mb-5'>Display ads can be very effective in reaching and engaging potential customers. They are also very flexible and can be used to create a variety of different ad formats and campaigns.</p>
                    <p className='font-18-400 mb-5'>Display advertising can be used to achieve a variety of marketing goals, including:</p>
                    <ul className='list-disc  marker:text-[#262254]'>
                        <li className='font-18-400 my-3'>Increasing brand awareness</li>
                        <li className='font-18-400 my-3'>Driving traffic to a website or landing page</li>
                        <li className='font-18-400 my-3'>Generating leads</li>
                        <li className='font-18-400 my-3'>Promoting new products or services</li>
                        <li className='font-18-400 my-3'>Increasing sales</li>

                    </ul>
                </div>
                <div className='my-10'>
                    <p className='font-24-700 mb-5'>We can help you with your display advertising:</p>

                    <ul className='list-disc  marker:text-[#262254]'>
                        <li className='font-18-400 my-3'><p><b>Retargeting: </b>We can help you to retarget potential customers who have already visited your website or interacted with your brand online. This is a great way to stay top-of-mind with potential customers and encourage them to return to your website and make a purchase.</p></li>
                        <li className='font-18-400 my-3'><p><b>Programmatic advertising:</b>We can help you to use programmatic advertising to reach your target audience at scale. Programmatic advertising uses data and algorithms to automatically buy and place ads on a variety of websites and apps.</p></li>
                        <li className='font-18-400 my-3'><p><b>Native advertising: </b>We can help you to create and place native ads, which are ads that are designed to blend in with the surrounding content on a website or app. Native ads are often more effective than traditional display ads because they are less intrusive and more likely to be clicked on by users.</p></li>
                    </ul>
                </div>
                <div className='my-10'>
                    <p className='font-24-700 mb-5'>The benefits of display advertising:</p>

                    <ul className='list-disc  marker:text-[#262254]'>
                        <li className='font-18-400 my-3'><p><b>Visual:  </b>Display ads are visual, which makes them more likely to catch people's attention than text-based ads.</p></li>
                        <li className='font-18-400 my-3'><p><b>Targeted: </b>Display ads can be targeted to specific audiences based on demographics, interests, and online behavior. This means that advertisers can reach the people who are most likely to be interested in their products or services.</p></li>
                        <li className='font-18-400 my-3'><p><b>Measurable: </b>Display ad results are very measurable, so advertisers can track how effective their campaigns are and where their budget is going.</p></li>
                        <li className='font-18-400 my-3'><p><b>Flexible: </b>Display ads can be created in a variety of different formats, including images, videos, and GIFs. This means that advertisers can create ads that are tailored to their specific target audience and marketing goals.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DisplayAdvertising
