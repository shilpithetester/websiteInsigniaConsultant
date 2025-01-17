import consultant from '../assets/BookConsultant/consultant.jpg'

const BookConsultant = () => {
    return (
        <div>
            <div >
                <div >
                    <img src={consultant} alt="book-consultant-Img" className=" w-full h-[55vh] object-cover" />
                </div>
                <div className='flex justify-center my-5'>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekYyaA0BWfDpvtxHgYQ4e-ftbPTPX4J2VzwPZOTol5951Opw/viewform?embedded=true" width="1200" height="1472" frameborder="0" marginheight="0" marginwidth="0" allowfullscreen>Loading…</iframe>
                </div>
            </div>
        </div>
    )
}

export default BookConsultant
