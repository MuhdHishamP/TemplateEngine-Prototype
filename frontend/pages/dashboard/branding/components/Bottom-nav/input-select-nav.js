import React, { useState, useEffect } from 'react';

const InputSelectNav = ({ name, classValue, OnFunc, id }) => {

    return (
        <>
            <div className="flex flex-wrap -mx-3">
                <div className={`${classValue}  px-3 md:mb-0"`}>
                    <label className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-password">
                        {name}
                    </label>
                    <select onChange={(e) => OnFunc(e.target.value)} className="appearance-none block w-full mb-4 bg-gray-100 dark:text-gray-50 dark:bg-[#1a1a1a] text-gray-700 text-sm border-gray-200  py-3 px-4 leading-tight" id={id} >
                        <option value="0">Select a bottom navigation *</option>
                        <option value="bottonNav1">Bottom Navigation 1</option>
                        {/* <option value="2">Navbar 2</option>
                        <option value="3">Navbar 3</option>
                        <option value="4">Navbar 4</option> */}
                    </select>                
                </div>
            </div>
        </>
    )
}

export default InputSelectNav;

