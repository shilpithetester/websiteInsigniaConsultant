import bannerImg from '../assets/Branding/guideline.jpg'

const BrandGuideline = () => {

    const stratergy = [
        { content: <p><b>Brand overview: </b> This section should provide a brief overview of the brand, including its mission, values, and target audience.</p> },
        { content: <p><b>Logo usage:  </b> This section should provide guidelines on how to use the brand's logo, including the different versions of the logo, the minimum size at which it can be used, and the clear space required around it.</p> },
        { content: <p><b>Color palette:  </b>This section should provide the brand's primary and secondary colors, as well as their hex codes and RGB values.</p> },
        { content: <p><b>Typography: </b>This section should provide the brand's primary and secondary fonts, as well as the guidelines for using them, such as font size, line height, and kerning.</p> },
        { content: <p><b>Imagery </b>This section should provide guidelines on the types of imagery that should be used to represent the brand, as well as the style of photography and illustration that should be used.</p> },
        { content: <p><b>Tone of voice:</b>This section should describe the brand's tone of voice, including the types of language and personality that should be used in its communications.</p> },
    ]
  return (
     <div>
                <div >
                    <img src={bannerImg} alt="guideline" className=" w-full h-[55vh] object-cover" />
                </div>
                <div className=" py-10 px-2 bg-[#FFE765] ">
                    <h3 className='font-24-700 text-center'>Your brand's voice, look, and feel, all in one place.</h3>
                </div>
                <div className='page-container '>
                    <p className='font-18-400 mb-5 mt-10'>A brand guideline, also known as a brand style guide, is a document that outlines the visual and verbal identity of a brand. It provides guidance on how to use the brand's logo, colors, fonts, typography, imagery, and tone of voice. Brand guidelines are important for ensuring that a brand is presented consistently across all channels, from its website and social media to its marketing materials and customer service interactions. </p>
                    <p className='font-24-700 mb-5 mt-10'>How can we help in a brand guideline:</p>
    
                    <div className='mb-10'>
                        <ul className='list-disc marker:text-[#262254]'>
                            {
                                stratergy?.map((item,index) => {
                                    return (
                                        <li key={index} className='font-18-400  my-3'>{item?.content}</li>
    
                                    )
                                })
                            }
                        </ul>
                    </div>
    
                </div>
            </div>
  )
}

export default BrandGuideline
