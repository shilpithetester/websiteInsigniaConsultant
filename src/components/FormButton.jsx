

const FormButton = ({ lable }) => {
    return (
        <div>
            <button type="submit" className="bg-customPurple text-white px-10 py-3 rounded-3xl hover:bg-customBlue ">
                {lable}
            </button>
        </div>
    )
}

export default FormButton
