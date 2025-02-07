import { useState } from "react";
import { useForm } from "react-hook-form";
import backgroundImg from '../assets/AboutUs/Form-bg.jpg';
import FormButton from "./FormButton";


const BookConsultant = () => {
    const { register: registerConsultancy, handleSubmit: handleSubmitConsultancy, formState: { errors: errorsConsultancy }, reset: resetConsultancy } = useForm();
    const [consultancyLoading, setConsultancyLoading] = useState(false)


    const onConsultancySubmit = async (data, e) => {
        console.log('Form Data:', data);
        setConsultancyLoading(true)
        e.preventDefault();
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbwMJul-Z3NlAZNrjWPQINcIBqBxyDWXRNN0hVasFKvNFNkfTdn2dTOxDQTUTfYeXZyH2w/exec",
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (response) {
                resetConsultancy()
                setConsultancyLoading(false)
            }

            console.log(response?.body, 'response');


        } catch (error) {
            console.error("Fetch error:", error);
        }
    };
    return (
        <div
            className="bg-cover bg-center bg-no-repeat p-8"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            <div className='page-container'>
                <h3 className='font-38-900 text-center my-5 text-white'>Consultation </h3>
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
                        <FormButton lable='Book Consultancy' loading={consultancyLoading} classname='bg-customDarkblue' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookConsultant
