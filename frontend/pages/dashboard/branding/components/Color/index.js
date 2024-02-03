import React, { useState, useRef, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import InputColorForm from '../input-color-form';

const ColorTheme = ({ colorData, ColorValueFunction }) => {
    const [color, SetColor] = useState("#3aafa9");
    const [isColor, IsColor] = useState(false);
    const [colorId, ColorId] = useState(0);
    const myRef = useRef();

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickInside);
    }, []);

    const handleClickOutside = (e) => {
        if (e.target.id == "NextModalColor") {
            IsColor(false); ColorId(0);
        }
    };
    const handleClickInside = () => IsColor(false);

    const ColorPallete = (id) => { ColorId(id); IsColor(true); };

    const SetColorPallete = (color) => {
        SetColor(color.hex);
        ColorValueFunction(colorId, color.hex)
    }


    return (
        <>
            <div className="mt-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <InputColorForm name="Primary Color" type="text" classValue="" placeholder=""
                        value={colorData ? colorData[0]?.primary : null} OnFunc={ColorPallete} xId={1} />

                    <InputColorForm name="Secondary Color" type="text" classValue="" placeholder=""
                        value={colorData ? colorData[0]?.secondary : null} OnFunc={ColorPallete} xId={2} />

                    <InputColorForm name="Background Color" type="text" classValue="" placeholder=""
                        value={colorData ? colorData[0]?.background : null} OnFunc={ColorPallete} xId={3} />

                    <InputColorForm name="Paragraph Color" type="text" classValue="" placeholder=""
                        value={colorData ? colorData[0]?.paragraph : null} OnFunc={ColorPallete} xId={4} />
                </div>
            </div>


            {isColor ? (
                <>
                    <div ref={myRef} onClick={(e) => handleClickOutside(e)} id="NextModalColor" className="justify-center fixed items-center shadow-2xl overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto mt-32 mx-auto max-w-xs">
                            <div className="border-0 shadow-lg relative flex flex-col w-full bg-gray-100 dark:bg-[#1a1a1a] rounded-2xl outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative p-2 flex-auto">
                                    <div className="flex justify-center items-center p-2">
                                        <ChromePicker color={color} onChange={SetColorPallete} />
                                    </div>
                                    <br />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-1 border-t border-solid border-slate-200 dark:border-gray-600 ">
                                    <button
                                        className="text-xs background-transparent font-bold uppercase px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => IsColor(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            ) : null}




        </>
    )
}

export default ColorTheme;