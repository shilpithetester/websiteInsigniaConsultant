// import contactUs from '../assets/contactUs/contactus.jpg'
// import backgroundImg from '../assets/AboutUs/Form-bg.jpg'
// import FormButton from '../components/FormButton'

// const ContactUs = () => {
//     return (
//         <div >
//             <div >
//                 <img src={contactUs} alt="contactUs-Img" className=" w-full h-[60vh] object-cover" />
//             </div>
//             <div className="bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${backgroundImg})` }}>
//                 <div className='page-container'>

//                     <h3 className='font-24-700 text-center my-5'>TIC Contact us</h3>
//                     <p className='font-18-400 text-center mb-5'>Thank you for hiring The Insignia Consultancy. We will work closely with you to understand your unique needs and goals, and develop customized solutions to help you achieve them.</p>
//                     <form >
//                         <div className='flex flex-wrap gap-4 justify-between'>
//                             <div className='w-[49%]'>
//                                 <input type="text" placeholder='Full Name*' className='bg-white w-full p-3 rounded-full' />
//                             </div>
//                             <div className='w-[49%]'>
//                                 <input type="email" placeholder='Email*' className='bg-white w-full p-3 rounded-full' />
//                             </div>
//                             <div className='w-[49%]'>
//                                 <input type="text" placeholder='Title *(MD, Director, CEO etc. )*' className='bg-white w-full p-3 rounded-full' />
//                             </div>
//                             <div className='w-[49%]'>
//                                 <input type="text" placeholder='Company*' className='bg-white w-full p-3 rounded-full' />
//                             </div>
//                             <div className='w-[49%]'>
//                                 <input type="number" placeholder='Contact Number*' className='bg-white w-full p-3 rounded-full' />
//                             </div>
//                             <div className='w-[49%]'>
//                                 <input type="text" placeholder='Website*' className='bg-white w-full p-3 rounded-full' />
//                             </div>
//                             <div className='w-full h-36'>
//                                 <textarea
//                                     placeholder="Consulting services*"
//                                     className="bg-white w-full p-3 rounded-3xl h-full resize-none"
//                                 ></textarea>
//                             </div>
//                         </div>
//                         <div className='mt-8 w-max m-auto'>
//                             <FormButton lable='Contact Us' />
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             {/* <div className='flex justify-center my-5'>
//                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSec7PESRBdlZ9EY8kxMuNvGjoA19YxrsV6jwDI0-5MgChkA0Q/viewform?embedded=true" width="1200" height="1472" frameborder="0" marginheight="0" marginwidth="0" allowfullscreen>Loading…</iframe>

//             </div> */}
//         </div>
//     )
// }

// export default ContactUs

import { useForm } from 'react-hook-form';
import contactUs from '../assets/contactUs/contactus.jpg';
import backgroundImg from '../assets/BannerImages/search_hero_bg.jpg';
import FormButton from '../components/FormButton';
import { useState } from 'react';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { register: registerConsultancy, handleSubmit: handleSubmitConsultancy, formState: { errors: errorsConsultancy } } = useForm();
    const[loading,setLoading]=useState(false)
    

    const onContactSubmit = async (data, e) => {
        console.log(data, "data");
        setLoading(true)
        e.preventDefault();
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value);
        });

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbzqOG_L1gwb61z7SbXlwwOTRZgepd5yS1OsFvniB0lo-RP2ItdPZTP89ZqKB635kjC7iw/exec",
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (response) {
                reset()
                setLoading(false)
            }
          
            console.log(response?.body, 'response');

            
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };



    const onConsultancySubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <div>
            <div>
                <img src={contactUs} alt="contactUs-Img" className="w-full h-[60vh] object-cover" />
            </div>
            <div
                className="bg-cover bg-center bg-no-repeat p-8"
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <div className='page-container'>
                    <h3 className='font-24-700 text-center my-5 text-white'>TIC Contact us</h3>
                    <p className='font-18-500 text-center mb-5 text-white'>
                        Thank you for hiring The Insignia Consultancy. We will work closely with you to
                        understand your unique needs and goals, and develop customized solutions to help
                        you achieve them.
                    </p>
                    <form onSubmit={handleSubmit(onContactSubmit)}>
                        <div className='flex flex-wrap gap-y-5  justify-between'>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="text"
                                    placeholder='Full Name*'
                                    {...register('fullName', { required: 'Full Name is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errors.fullName && <span className="text-red-600">{errors.fullName.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="email"
                                    placeholder='Email*'
                                    {...register('email', { required: 'Email is required', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="text"
                                    placeholder='Title *(MD, Director, CEO etc. )*'
                                    {...register('title', { required: 'Title is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errors.title && <span className="text-red-600">{errors.title.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="text"
                                    placeholder='Company*'
                                    {...register('company', { required: 'Company is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errors.company && <span className="text-red-600">{errors.company.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="number"
                                    placeholder='Contact Number*'
                                    {...register('contactNumber', { required: 'Contact Number is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errors.contactNumber && <span className="text-red-600">{errors.contactNumber.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="text"
                                    placeholder='Website*'
                                    {...register('website', { required: 'Website is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errors.website && <span className="text-red-600">{errors.website.message}</span>}
                            </div>
                            <div className='w-full h-36'>
                                <textarea
                                    placeholder="Consulting services*"
                                    {...register('consultingServices', { required: 'This field is required' })}
                                    className="bg-white w-full p-3 rounded-3xl h-full resize-none"
                                ></textarea>
                                {errors.consultingServices && (
                                    <span className="text-red-600">{errors.consultingServices.message}</span>
                                )}
                            </div>
                        </div>
                        <div className='mt-8 w-max m-auto'>
                            <FormButton lable='Contact Us'loading={loading} />
                        </div>
                    </form>
                </div>
            </div>

            <div className=" page-container py-10 flex justify-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119064.90027745542!2d78.99010921750092!3d21.161225995130195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1736423539510!5m2!1sen!2sus"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    loading="lazy">
                </iframe>
            </div>

            <div
                className="bg-cover bg-center bg-no-repeat p-8"
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <div className='page-container'>
                    <h3 className='font-24-700 text-center my-5 text-white'>Consultation </h3>
                    <p className='font-18-500 text-center mb-5  text-white'>
                        Please submit this form and we will be in touch to schedule a consultation.
                    </p>
                    <form onSubmit={handleSubmitConsultancy(onConsultancySubmit)}>
                        <div className='flex flex-wrap gap-y-5 justify-between'>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="text"
                                    placeholder='Full Name*'
                                    {...registerConsultancy('fullName', { required: 'Full Name is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errorsConsultancy.fullName && <span className="text-red-600">{errorsConsultancy.fullName.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="email"
                                    placeholder='Email*'
                                    {...registerConsultancy('email', { required: 'Email is required', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errorsConsultancy.email && <span className="text-red-600">{errorsConsultancy.email.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="text"
                                    placeholder='Title *(MD, Director, CEO etc. )*'
                                    {...registerConsultancy('title', { required: 'Title is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errorsConsultancy.title && <span className="text-red-600">{errorsConsultancy.title.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="text"
                                    placeholder='Company*'
                                    {...registerConsultancy('company', { required: 'Company is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errorsConsultancy.company && <span className="text-red-600">{errorsConsultancy.company.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="number"
                                    placeholder='Contact Number*'
                                    {...registerConsultancy('contactNumber', { required: 'Contact Number is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errorsConsultancy.contactNumber && <span className="text-red-600">{errorsConsultancy.contactNumber.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="text"
                                    placeholder='Website*'
                                    {...registerConsultancy('website', { required: 'Website is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errorsConsultancy.website && <span className="text-red-600">{errorsConsultancy.website.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="text"
                                    placeholder='Related Industry*'
                                    {...registerConsultancy('insdustry', { required: 'Related Industry is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errorsConsultancy.insdustry && <span className="text-red-600">{errorsConsultancy.insdustry.message}</span>}
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <input
                                    type="text"
                                    placeholder='Company Size*'
                                    {...registerConsultancy('companySize', { required: 'company size is required' })}
                                    className='bg-white w-full p-3 rounded-full'
                                />
                                {errorsConsultancy.companySize && <span className="text-red-600">{errorsConsultancy.companySize.message}</span>}
                            </div>
                            <div className='w-full h-36'>
                                <textarea
                                    placeholder="Tell us about your business, products and marketing concerns*"
                                    {...registerConsultancy('about', { required: 'This field is required' })}
                                    className="bg-white w-full p-3 rounded-3xl h-full resize-none"
                                ></textarea>
                                {errorsConsultancy.about && (
                                    <span className="text-red-600">{errorsConsultancy.about.message}</span>
                                )}
                            </div>
                        </div>
                        <div className='mt-8 w-max m-auto'>
                            <FormButton lable='Book Consultancy' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
