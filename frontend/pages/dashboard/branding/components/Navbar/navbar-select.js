import React, { useEffect } from 'react';
import InputSelectNavbars from "./input-select-navbar";

const NavbarSelect = ({ NavbarId, navbarId }) => {

    const NavbarHandler = (id) => { NavbarId(id) };
    useEffect(() => {
        if (navbarId === "nav1") {
            document.getElementById("NavbarSelectId").value = navbarId;
        }
    }, [navbarId]);

    return (
        <>
            <div className="mt-10">
                <InputSelectNavbars name="Select Navbar" classValue="w-1/2" OnFunc={NavbarHandler} id="NavbarSelectId" />
            </div>
        </>
    )
}

export default NavbarSelect;