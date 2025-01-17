import bannerImg from '../assets/Branding/Brand-stratergy.jpg'

const BrandStratergy = () => {

    const stratergy = [
        { content: <p><b>I can help you to define your brand identity. </b> This includes understanding your brand's core values, mission, and vision. I can also help you to develop a brand persona, which is a representation of your ideal customer.</p> },
        { content: <p><b>I can help you to identify your target audience. </b>This involves understanding their needs, wants, and pain points. I can also help you to develop a deep understanding of your competitive landscape.</p> },
        { content: <p><b>I can help you to develop a brand positioning statement. </b>This is a short statement that sums up what your brand stands for and why it is different from its competitors.</p> },
        { content: <p><b>I can help you to create a brand story. </b>This is a narrative that explains why your brand exists and what it has to offer the world.</p> },
        { content: <p><b>I can help you to develop a brand messaging strategy. </b>This involves creating a set of core messages that will be used to communicate your brand's value proposition to your target audience.</p> },
        { content: <p><b>I can help you to develop a brand visual identity.</b>This includes creating a logo, color palette, and typography that will be used to represent your brand visually.</p> },
    ]

    return (
        <div>
            <div >
                <img src={bannerImg} alt="portfolio" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center'>Brand strategy that drives results</h3>
            </div>
            <div className='page-container '>
                <p className='font-24-700 mb-5 mt-10'>How can we help you for brand strategy:</p>

                <div className='mb-10'>
                    <ul className='list-disc marker:text-[#262254]'>
                        {
                            stratergy?.map((item,index) => {
                                return (
                                    <li key={index} className='font-18-400 my-3'>{item?.content}</li>

                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default BrandStratergy
