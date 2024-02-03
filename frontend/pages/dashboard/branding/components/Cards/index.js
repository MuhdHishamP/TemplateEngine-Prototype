import React, { useState, useRef, useEffect } from 'react';
import InputSelectCards from "../input-select-card";

const CardsTheme = ({ CardsId, }) => {
    const myRef = useRef();
    const [isCard, IsCard] = useState(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickInside);
    }, []);

    const handleClickOutside = (e) => {
        if (e.target.id == "CardsModal") {
            IsCard(false)
        }
    };
    const handleClickInside = () => IsCard(false);

    const CardHandler = (id) => { CardsId(id) };

    return (
        <>
            <div className="mt-10">
                <InputSelectCards name="Select Card" classValue="w-1/2" OnFunc={CardHandler} />
            </div>
        </>
    )
}

export default CardsTheme;