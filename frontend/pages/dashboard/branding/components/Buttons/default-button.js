import React from "react";

const DefaultButton = ({ defaultButtonData }) => {

    return (
        <>
            <div className="p-5">
                <button
                    //onClick={() => { buttonFunc() }}
                    style={{
                        "backgroundColor": defaultButtonData ? defaultButtonData[0]?.backgroundColor : null,
                        "borderRadius": defaultButtonData ? defaultButtonData[0]?.brRadius + "%"  : null,
                        "padding": `${defaultButtonData ? defaultButtonData[0]?.boxPadding  : null}%`,
                        "box-shadow": defaultButtonData ? defaultButtonData[0]?.boxShadow : null,
                    }}
                    className="uppercase hover:opacity-70" >
                    <span className="text-sm py-3 p-4"
                        style={{ "color": defaultButtonData ? defaultButtonData[0]?.titleColor : null }} >
                        Lorem ipsum </span>
                </button>
            </div>
        </>
    )
}

export default DefaultButton;