import React from "react";
import FooterOne from "./footer-one";

const FooterPreview = ({ footerId, footerOneData }) => {

    return (
        <>
            {footerId === "footer1" ? (
                <>
                    <FooterOne footerOneData={footerOneData} />
                </>
            ) : null}
        </>
    )
}

export default FooterPreview;