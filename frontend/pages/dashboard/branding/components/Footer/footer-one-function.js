import React, { useState, useRef, useEffect } from "react";
import InputColorForm from '../input-color-form';
import { ChromePicker } from 'react-color';
import InputCardBorderRadius from "./input-card-b-radius";
import SelectCardsShadows from "./select-card-shadow";

const FooterOneFunction = ({ footerOneData, FooterValueFunction }) => {
    const [isCard, IsCard] = useState(false);
    const [colorId, ColorId] = useState(0);
    const [color, SetColor] = useState("#3aafa9");
    const myRef = useRef();

    const ColorPallete = (id) => { ColorId(id); IsCard(true); };

    const SetColorPallete = (color) => {
        SetColor(color.hex);
        FooterValueFunction(colorId, color.hex)
    }

    // const SetCardsValue = (id, value) => {
    //     FooterValueFunction(id, value)
    // }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickInside);
    }, []);

    const handleClickOutside = (e) => {
        if (e.target.id == "NextModalCards") {
            IsCard(false)
        }
    };
    const handleClickInside = () => IsCard(false);


    return (
        <>
            <div className="text-sm font-bold mb-3">Color</div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                <InputColorForm name="Background Color" type="text" classValue="" placeholder=""
                    value={footerOneData ? footerOneData[0]?.backgroundColor : null} OnFunc={ColorPallete} xId={1} />
                <InputColorForm name="Title Color" type="text" classValue="" placeholder=""
                    value={footerOneData ? footerOneData[0]?.titleColor : null} OnFunc={ColorPallete} xId={2} />
                <InputColorForm name="Icon Color" type="text" classValue="" placeholder=""
                    value={footerOneData ? footerOneData[0]?.iconColor : null} OnFunc={ColorPallete} xId={3} />
                <InputColorForm name="Secondary Color" type="text" classValue="" placeholder=""
                    value={footerOneData ? footerOneData[0]?.secondaryColor : null} OnFunc={ColorPallete} xId={4} />
            </div>

        


            {isCard ? (
                <>
                    <div ref={myRef} onClick={(e) => handleClickOutside(e)} id="NextModalCards" className="justify-center fixed items-center shadow-2xl overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
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
                                        onClick={() => IsCard(false)}>
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

export default FooterOneFunction;