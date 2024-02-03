import React, { useState, useEffect } from 'react';


const InputColorForm = ({ name, type, classValue, placeholder, value, OnFunc, xId }) => {


    return (
        <>
            <div className="flex flex-wrap -mx-3" >
                <div className={`${classValue} px-3`}>
                    <label className="block tracking-wide text-[#1a1a1a] dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        {name}
                    </label>
                    <div className="flex">
                        <input autoComplete="nope" className="appearance-none block w-full bg-gray-50 dark:bg-[#2a2a2a] text-[#1a1a1a] dark:text-gray-200 text-sm  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={value} type={type} placeholder={placeholder} />
                        <div style={{"backgroundColor": value}} onClick={(e) => OnFunc(xId)} className={"mr-4 h-10 w-10 border-[1px] cursor-pointer "}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputColorForm;