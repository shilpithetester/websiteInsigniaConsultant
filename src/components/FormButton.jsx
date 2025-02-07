import { BiLoaderAlt } from "react-icons/bi"


const FormButton = ({ lable, loading = false ,classname}) => {
    return (
        <div>
            <button disabled={loading} type="submit" className={` flex gap-2 items-center text-white px-10 py-3 rounded-3xl hover:bg-customBlue ${classname ?classname:'bg-customSafron '}`}>
                {lable}
                {loading === true
                    &&
                    <BiLoaderAlt className="animate-spin" />
                }
            </button>
        </div>
    )
}

export default FormButton
