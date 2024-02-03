import React, { useState, useEffect } from 'react';

const SelectCardsShadows = ({ name, classValue, OnFunc,  xId }) => {

    return (
        <>
            <div className="flex flex-wrap -mx-3">
                <div className={`${classValue}  px-3 md:mb-0"`}>
                    <label className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-password">
                        {name}
                    </label>
                    <select onChange={(e) => OnFunc(xId,e.target.value)} className="appearance-none block w-full mb-4 bg-gray-100 dark:text-gray-50 dark:bg-[#1a1a1a] text-gray-700 text-sm border-gray-200  py-3 px-4 leading-tight" id="CategoryData" >
                        <option value="0">Select shadow size</option>
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                        <option value="4">XL</option>
                        <option value="5">2XL</option>
                        <option value="6">3XL</option>
                        <option value="7">4XL</option>
                        <option value="8">5XL</option>
                    </select>                
                </div>
            </div>
        </>
    )
}

export default SelectCardsShadows;

