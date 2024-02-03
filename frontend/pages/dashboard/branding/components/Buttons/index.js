import React, { useState, useRef, useEffect } from 'react';
import InputSelectButtons from "../input-select-button";

const ButtonsTheme = ({ ButtonId, }) => {
    const myRef = useRef();
    const [isCard, IsCard] = useState(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickInside);
    }, []);

    const handleClickOutside = (e) => {
        if (e.target.id == "CardsModal") {
            ButtonId(false)
        }
    };
    const handleClickInside = () => ButtonId(false);

    const CardHandler = (id) => { ButtonId(id) };

    return (
        <>
            <div className="mt-10">
                <InputSelectButtons name="Select Card" classValue="w-1/2" OnFunc={CardHandler} />
            </div>
        </>
    )
}

export default ButtonsTheme;