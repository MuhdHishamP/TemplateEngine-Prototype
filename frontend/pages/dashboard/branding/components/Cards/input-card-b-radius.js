import React, { useState, useEffect } from 'react';


const InputCardBorderRadius = ({ name, type, classValue, placeholder, value, OnFunc, xId }) => {
    const [inputValue, InputValue] = useState("");

    useEffect(() => {
        document.getElementById(xId + "CardInputValue").value = value;
    }, [value])

    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className={`${classValue} px-3 mb-6 md:mb-0`}>
                    <label className="block tracking-wide text-[#1a1a1a] dark:text-gray-200 text-xs font-bold" htmlFor="grid-first-name">
                        {name} 
                    </label>
                    <span className='text-xs font-normal mb-2'>in percentage</span>
                    <div className="flex mt-2">
                        <input id={xId + "CardInputValue"} onChange={(e) => InputValue(e.target.value)} autoComplete="nope" className="appearance-none block w-full bg-gray-50 dark:bg-[#2a2a2a] text-[#1a1a1a] dark:text-gray-200 text-sm  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type={type} placeholder={placeholder} />
                        <div onClick={(e) => OnFunc(xId, inputValue)} className={"flex justify-center items-center p-2 mr-4 h-10 w-10 border-[1px] text-xs cursor-pointer "}> Apply </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputCardBorderRadius;