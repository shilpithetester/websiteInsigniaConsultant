import { Link } from 'react-router-dom'
import branding from '../assets/BannerImages/branding.jpg'

const Branding = () => {

    const brandingList = [
        { content: 'We have a team of experienced and qualified marketing professionals who can help you develop and implement a successful marketing strategy.' },
        { content: 'We offer a wide range of services to meet the needs of businesses of all sizes.' },
        { content: `We're committed to helping our clients succeed. We work with you closely to understand your business goals and develop a strategy that will help you achieve them.` },
        { content: `We're affordable and offer a variety of pricing options to fit your budget.` },
    ]
    return (
        <div >
            <div >
                <img src={branding} alt="Branding" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className="flex gap-5 justify-center mb-10 px-2 py-10 bg-[#FFE765] ">
                <h3 className='font-24-700 '>We help brands grow</h3>
            </div>

            <div className='page-container '>
                <p className='font-18-400 my-6'>Your brand is your most valuable asset. It's what sets you apart from the competition and builds trust with your customers. But with so many brands out there, it can be hard to stand out. That's where we come in.</p>
                <p className='font-18-400 '>We're a marketing consultancy that helps brands grow. We do this by developing and implementing comprehensive marketing strategies that align with your business goals. We also help you create a strong brand identity that resonates with your target audience.</p>
                <p className='font-18-400 my-6'>We're passionate about helping brands succeed. We believe that every brand has a unique story to tell, and we're here to help you tell it in the most effective way possible.</p>

                <div>
                    <Link to='/logo-design' className='font-20-700 my-2 underline decoration-2 text-[#270048] block'>Logo Designing</Link>
                    <Link to='/portfolio' className='font-20-700 my-2 underline decoration-2 text-[#270048] block'>Brand Portfolio</Link>
                    <Link to='/brand-stratergy' className='font-20-700 my-2 underline decoration-2 text-[#270048] block'>Brand strategy</Link>
                    <Link to='/brand-guideline' className='font-20-700 my-2 underline decoration-2 text-[#270048] block'>Brand Guidelines</Link>
                    <Link to='/marketing-collateral' className='font-20-700 my-2 underline decoration-2 text-[#270048] block'>Marketing Collateral</Link>

                </div>

                <div className='my-10'>
                    <p className='font-24-700 mb-5'>How can we help you for Branding</p>
                    <ul className='list-disc  marker:text-[#262254]'>
                        {
                            brandingList?.map((item, index) => {
                                return (
                                    <li key={index} className='font-18-400 py-3'>{item?.content}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='mb-10'>
                    <p className='font-24-700'>Guarantee:</p>
                    <p className='font-18-400 my-5'>We're so confident that you'll be happy with our services that we offer a 100% satisfaction guarantee. If you're not happy with the results you're getting, simply let us know and we'll work with you to make things right.</p>
                </div>
            </div>
        </div>
    )
}

export default Branding
