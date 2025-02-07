
import blueBg from '../assets/blueBgImage/blueBgImg.jpg'
import tick from '../assets/blueBgImage/orange-tick-icon.png'

const ServicesSec = ({ heading, services }) => {
    return (
        <div>
            <div className="bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${blueBg})` }}>
                <div className='page-container'>
                    <h2 className="max-w-full w-max m-auto mt-10 font-40-900 after:content-[''] after:block after:w-24 after:mx-auto after:h-[4px] after:bg-customSafron after:mt-2 text-white">{heading}</h2>
                    <div className='flex flex-wrap justify-between pt-10 pb-5'>
                        {
                            services?.map((item, index) => {
                                return (
                                    <div key={index} className="w-full md:w-[47%] xl:w-[30%] flex items-center gap-2 mb-5">
                                        <img src={tick} alt="tick" className='w-7 h-7 rounded-full' />
                                        <p className='text-white font-18-500 '>{item?.text}</p>
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

export default ServicesSec
