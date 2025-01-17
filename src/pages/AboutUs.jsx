// import aboutUs from '../assets/AboutUs/aboutUs.jpg'
import aboutUs from '../assets/BannerImages/search_hero_bg.jpg'

const AboutUs = () => {
    return (
        <div className='mb-10' >
            <div className="relative mb-10">
        <img src={aboutUs} alt="aboutUs-Img" className=" w-full h-[60vh] object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="font-72-500 text-white">About Us</p>
        </div>
      </div>
            <div className='page-container'>
                <p className='font-18-400 mb-6'>In a world where businesses are constantly seeking ways to stand out from the crowd, effective marketing is no longer a luxury but a necessity. At The Insignia Consultant, we understand the power of marketing to transform businesses and propel them to new heights. We are a team of passionate marketing experts dedicated to helping businesses achieve their goals through innovative and strategic marketing solutions.</p>

                <div >
                    <p className='font-24-700'> Our Passion for Marketing</p>
                    <p className='font-18-400 my-6'>Marketing is not just about selling products or services; it's about creating connections, building relationships, and telling a compelling story that resonates with your target audience. We believe that marketing is an art form, and we're passionate about crafting marketing campaigns that are not only effective but also unforgettable.</p>
                    <p className='font-24-700'> Our Expertise</p>
                    <p className='font-18-400 my-6'>We have a deep understanding of the ever-evolving marketing landscape and are always up-to-date on the latest trends and technologies. Our team of experts has a wide range of experience across various industries, allowing us to tailor our strategies to fit the unique needs of each client.</p>
                    <p className='font-24-700'>Our Commitment to Client Success</p>
                    <p className='font-18-400 my-6'>We are not just a marketing consultancy; we are your trusted partner. We believe in building strong relationships with our clients and understanding their individual needs and goals. We work closely with each client to develop a customized marketing plan that aligns with their overall business strategy.</p>
                    <p className='font-24-700'>Why Choose The Insignia Consultant?</p>
                    <p className='font-18-400 my-6'>When you choose The Insignia Consultant, you're choosing a partner who is committed to your success. We are passionate about marketing, and we have the expertise and experience to help your business achieve its full potential.</p>
                    <p className='font-18-400 my-6'>If you are looking for a marketing consultant who can help you take your business to the next level, The Insignia Consultant is a great option. </p>
                    <p className='font-24-700'> Contact Us</p>
                    <p className='font-18-400 my-6'>Let us help you take your marketing to the next level. Contact us today for a consultation.</p>
                </div>


            </div>
        </div>
    )
}

export default AboutUs
