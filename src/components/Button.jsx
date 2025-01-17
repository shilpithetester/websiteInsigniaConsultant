import { Link } from "react-router-dom"

const Button = ({lable,link,className}) => {
  return (
    <div>
      <Link to={link} className={`font-16-400  bg-customSafron hover:bg-customDarkblue text-white rounded-2xl px-6 py-2 ${className}`}>
        {lable}
      </Link>
    </div>
  )
}

export default Button
