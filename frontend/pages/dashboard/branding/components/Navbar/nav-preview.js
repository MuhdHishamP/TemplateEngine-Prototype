import React from "react";
import NavBarOne from "./nav-one";

const NavBarPreview = ({ navbarId, navbarOneData }) => {

    return (
        <>
            {navbarId === "nav1" ? (
                <>
                    <NavBarOne navbarOneData={navbarOneData} />
                </>
            ) : null}
        </>
    )
}

export default NavBarPreview;