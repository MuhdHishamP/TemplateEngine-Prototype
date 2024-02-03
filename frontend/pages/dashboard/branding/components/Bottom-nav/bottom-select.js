import React,{ useEffect } from 'react';
import InputSelectNav from "./input-select-nav";

const BottomNavSelect = ({ BottomNavId, bottomNavId }) => {

    const NavbarHandler = (id) => { BottomNavId(id) };
    useEffect(() => {
        if (bottomNavId === "bottomNav1") {
            document.getElementById("BottomNavSelectId").value = bottomNavId;
        }
    }, [bottomNavId]);

    return (
        <>
            <div className="mt-10">
                <InputSelectNav name="Select Bottom Navigation" 
                    classValue="w-full" OnFunc={NavbarHandler} id="BottomNavSelectId" />
            </div>
        </>
    )
}

export default BottomNavSelect;