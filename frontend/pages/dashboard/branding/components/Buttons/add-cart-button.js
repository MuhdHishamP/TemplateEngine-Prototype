import React from "react";

const AddCartButton = ({ addCartbuttonData, }) => {

    return (
        <>
            <div className="p-5">
                <button
                    //onClick={() => { buttonFunc() }}
                    style={{
                        "backgroundColor": addCartbuttonData ? addCartbuttonData[0]?.backgroundColor : null,
                        "borderRadius": addCartbuttonData ? addCartbuttonData[0]?.brRadius + "%" : null,
                        "padding": `${addCartbuttonData ? addCartbuttonData[0]?.boxPadding : null}%` ,
                        "box-shadow": addCartbuttonData ? addCartbuttonData[0]?.boxShadow : null,
                    }}
                    className="uppercase hover:opacity-70" >
                    <span className="text-sm py-3 p-4"
                        style={{ "color": addCartbuttonData ? addCartbuttonData[0]?.titleColor : null }}>
                        Add To Cart </span>
                </button>
            </div>
        </>
    )
}

export default AddCartButton;