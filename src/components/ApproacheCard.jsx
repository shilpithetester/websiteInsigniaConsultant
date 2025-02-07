import blueBg from '../assets/blueBgImage/blueBgImg.jpg'


const ApproacheCard = ({ heading, text, approach }) => {
    return (
        <div>
            <div className="bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${blueBg})` }}>
                <div className='page-container'>
                    <h2 className="max-w-full w-max m-auto mt-10 font-40-900 after:content-[''] after:block after:w-24  after:h-[4px] after:bg-customSafron after:mt-2 text-white">{heading}</h2>
                    {
                        text && (
                            <p className='text-center text-white mt-4 font-20-400 md:max-w-[80%] m-auto' >{text}</p>
                        )
                    }

                    <div className='flex flex-wrap justify-between pt-10 pb-5'>
                        {
                            approach?.map((item, index) => {
                                return (
                                    <div key={index} className="w-full md:w-[47%] xl:w-[30%] mb-10">
                                        <div className='max-w-[180px] max-h-[180px] m-auto'>
                                            <img src={item?.logo} alt="image" className='w-full h-full rounded-full' />
                                        </div>
                                        <h2 className='text-customSafron text-center my-2 font-28-800'>{item?.heading}</h2>
                                        <p className='text-white text-center font-16-400 '>{item?.text}</p>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ApproacheCard

