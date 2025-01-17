import { Link } from "react-router-dom"

const Button = ({lable,link}) => {
  return (
    <div>
      <Link to={link} className="font-16-400  bg-[#D54A1C] hover:bg-slate-700 text-white rounded-2xl px-6 py-2">
        {lable}
      </Link>
    </div>
  )
}

export default Button
