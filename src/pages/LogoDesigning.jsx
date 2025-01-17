import bannerImg from '../assets/Branding/LogoDesigning.jpg'

const LogoDesigning = () => {
    
    const list = [
        { content: 'We are able to create logos that are perfectly tailored to your brand. We take the time to understand your brand values, target audience, and desired aesthetic before we start designing your logo. This ensures that your logo is a true reflection of your brand.' },
        { content: 'We are able to generate logos that are versatile and adaptable. Your logo will need to look good in a variety of applications, from websites and social media to print materials and signage. We take this into account when designing your logo, so you can be confident that it will look great everywhere.' },
        { content: 'We are committed to providing you with a positive and enjoyable experience. We want you to be happy with your logo design, and we are always happy to make changes until you are completely satisfied.' },
    ]

    return (
        <div>
            <div >
                <img src={bannerImg} alt="logo-designing" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className=" py-10 px-2 bg-[#FFE765] ">
                <h3 className='font-24-700 text-center'>Your logo, your vision.</h3>
            </div>
            <div className='page-container '>
                <p className='font-18-400 mt-10'>Logo design can be a complex process, but it is important to keep the key elements in mind when creating a logo that will be effective for your brand. </p>
                <h3 className='font-24-700 mt-6'>How can we help you to create logo design</h3>

                <div className='mb-10'>
                    <ul className='list-disc marker:text-[#262254]'>
                        {
                            list?.map((item,index)=>{
                                return(
                                    <li key={index} className='my-3 font-18-400'>{item?.content}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LogoDesigning
