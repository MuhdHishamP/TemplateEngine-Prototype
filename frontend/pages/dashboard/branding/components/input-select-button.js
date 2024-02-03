import React, { useState, useEffect } from 'react';

const InputSelectButtons = ({ name, classValue, OnFunc }) => {

    return (
        <>
            <div className="flex flex-wrap -mx-3">
                <div className={`${classValue}  px-3 md:mb-0"`}>
                    <label className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-password">
                        {name}
                    </label>
                    <select onChange={(e) => OnFunc(e.target.value)} className="appearance-none block w-full mb-4 bg-gray-100 dark:text-gray-50 dark:bg-[#1a1a1a] text-gray-700 text-sm border-gray-200  py-3 px-4 leading-tight" id="CategoryData" >
                        <option value="0">Select a button *</option>
                        <option value="1">Add to Cart</option>
                        <option value="2">Default Button</option>
                    </select>                
                </div>
            </div>
        </>
    )
}

export default InputSelectButtons;

