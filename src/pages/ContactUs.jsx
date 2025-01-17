import contactUs from '../assets/contactUs/contactus.jpg'

const ContactUs = () => {
    return (
        <div >
            <div >
                <img src={contactUs} alt="contactUs-Img" className=" w-full h-[55vh] object-cover" />
            </div>
            <div className='flex justify-center my-5'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSec7PESRBdlZ9EY8kxMuNvGjoA19YxrsV6jwDI0-5MgChkA0Q/viewform?embedded=true" width="1200" height="1472" frameborder="0" marginheight="0" marginwidth="0" allowfullscreen>Loading…</iframe>

            </div>
        </div>
    )
}

export default ContactUs
