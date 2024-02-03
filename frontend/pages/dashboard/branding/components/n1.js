import React from "react";

const NavTab = ({ Name }) => {

    return (
        <>
            <div className="px-6 cursor-pointer">
                <div className="font-normal text-center text-sm mt-3">
                    {Name}
                </div>
            </div>
        </>
    )
}

export default NavTab