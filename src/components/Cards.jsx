const Cards = ({ icon, heading, text }) => {
  return (
    <div className="w-full md:w-[47%] xl:w-[30%]">
      <div className="flex  gap-4 items-center">
        {/* <div className="w-[75px] h-[70px] "> */}
          <img src={icon} alt="icons" className="w-[70px] h-[70px] rounded-full" />
        {/* </div> */}
        <h3 className="font-24-900">{heading}</h3>
      </div>
      <p className="font-16-400 mt-5">{text}</p>
    </div>
  )
}

export default Cards
