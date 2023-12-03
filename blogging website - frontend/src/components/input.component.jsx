const InputBox = ({ name, type, id, value, placeholder }) => {
    return (
        <div className="relative w-[100%] mb-4">
            <input type={type} name={name} id={id} value={value} placeholder={placeholder} className="w-[100%] h-[50px] bg-white px-4 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" />

        </div>
    )
}

export default InputBox;