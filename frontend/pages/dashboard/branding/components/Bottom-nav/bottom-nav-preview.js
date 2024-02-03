import React from "react";
import BottomNavOne from "./bottom-nav-one";

const BottomNavPreview = ({ bottomNavId, navBarOneData }) => {
    console.log(bottomNavId);
    return (
        <>
            {bottomNavId === "bottonNav1" ? (
                <>
                    <BottomNavOne navBarOneData={navBarOneData} />
                </>
            ) : null}
        </>
    )
}

export default BottomNavPreview;