import React, { useState, useEffect } from 'react';

const InputSelectFonts = ({ name, classValue, OnFunc, fontFamilyData, fontFamily, id }) => {

    return (
        <>
            <div className="flex flex-wrap ">
                <div className={`${classValue}  px-3 md:mb-0"`}>
                    <label className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-password">
                        {name}
                    </label>
                    <select onChange={(e) => OnFunc(e.target.value)} className={ "block w-full mb-4 bg-gray-100 dark:text-gray-50 dark:bg-[#1a1a1a] text-gray-700 text-sm border-gray-200  py-3 px-4 leading-tight"} id={id} >
                        <option value="0">Select a font *</option>
                        {fontFamilyData?.map((font) => {
                            return (
                                <>
                                    <option value={font?.value}>{font?.name}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputSelectFonts;

