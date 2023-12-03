import React, { useState } from "react";



const InputBox = ({ name, type, id, value, placeholder, icon }) => {
    const [passwordvidible, setPasswordvidible] = useState(false);

    return (
        <div className="relative w-[100%] mb-4">
            <input
                type={
                    type == "password" ? (passwordvidible ? "text" : "password") : type
                }
                name={name}
                id={id}
                placeholder={placeholder}
                defaultValue={value}
                className="input-box"
            />
            <i className={"fi " + icon + " input-icon"}></i>

            {type == "password" ? (
                <i
                    className={"fi fi-sr-eye" + (!passwordvidible ? "-crossed" : "")+" input-icon left-[auto] right-4 cursor-pointer"}
                    onClick={() => setPasswordvidible((currentVal) => !currentVal)}
                ></i>
            ) : (
                ""
            )}
        </div>
    );
};

export default InputBox;