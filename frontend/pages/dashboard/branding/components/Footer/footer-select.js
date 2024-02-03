import React,{ useEffect } from 'react';
import InputSelectFooter from "./input-select-footer";

const NavbarFooter = ({ FooterId, footerId }) => {

    const NavbarHandler = (id) => { FooterId(id) };
    useEffect(() => {
        if (footerId === "bottonNav1") {
            document.getElementById("FooterSelectId").value = footerId;
        }
    }, [footerId]);

    return (
        <>
            <div className="mt-10">
                <InputSelectFooter name="Select Footer" classValue="w-1/2" OnFunc={NavbarHandler} id="FooterSelectId" />
            </div>
        </>
    )
}

export default NavbarFooter;