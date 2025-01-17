import  bannerImg from '../assets/GoogleList/GMB.jpg' 

const GoogleBusiness = () => {
  return (
    <div>
      <div >
        <img src={bannerImg} alt="GooglrMyBusiness-Img" className=" w-full h-[55vh] object-cover" />
      </div>
      <div className=" py-10 px-2 bg-[#FFE765] ">
        <h3 className='font-24-700 text-center'>Your business deserves to be seen. </h3>
      </div>
      <div className='page-container'>
        <div className='my-10'>
          <p className='font-24-700 mb-5'>Why you should choose us to help you with your Google My Business (GMB) profile.</p>

          <ul className='list-disc  marker:text-[#262254]'>
            <li className='font-18-400 my-3'><p><b>We have a deep understanding of GMB.  </b> We have been helping businesses of all sizes and in all industries create and optimize their GMB profiles for many years. We know what works and what doesn't, and we can help you develop a GMB strategy that is tailored to your specific needs.</p></li>
            <li className='font-18-400 my-3'><p><b>We have a proven track record of success.</b>We have helped our clients achieve significant improvements in their GMB visibility, engagement, and leads. We have a team of experienced GMB professionals who are experts in their field.</p></li>
            <li className='font-18-400 my-3'><p><b>We offer a comprehensive range of GMB services. </b>We can help you with everything from creating and verifying your GMB profile to optimizing your profile for search engines and responding to customer reviews. We also offer a variety of other services, such as search engine optimization (SEO) and social media marketing, that can help you to improve your overall online visibility and reach more potential customers.</p></li>
            <li className='font-18-400 my-3'><p><b>We are affordable. </b>We offer a variety of GMB packages to fit your budget. We also offer value added consultation so that we can discuss your needs and develop a custom plan for you.</p></li>
          </ul>
        </div>
        <div className='mt-14 mb-10'>
          <p className='font-24-700 mb-5'>The benefits of using Google My Business:</p>

          <ul className='list-disc  marker:text-[#262254]'>
            <li className='font-18-400 my-3'><p><b>Increased visibility: </b>Google My Business profiles appear at the top of Google Search results pages for relevant searches. This means that businesses can get their ads seen by more potential customers.</p></li>
            <li className='font-18-400 my-3'><p><b>Improved customer engagement: </b>Google My Business profiles allow businesses to interact with potential customers by responding to reviews and answering questions. This can help to build trust and credibility with potential customers.</p></li>
            <li className='font-18-400 my-3'><p><b>More leads and sales: </b>Google My Business profiles can help businesses to generate more leads and sales by making it easier for potential customers to find and contact them.</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GoogleBusiness
