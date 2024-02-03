import React, { useEffect, useState } from "react";
import { server, AuthAccessToken } from "../../../../config";
import axios from "axios";
import SuccessAlert from "./success";
import Publishing from "./Publish/publishing";
import Publish from "./Publish/publish";
import Published from "./Publish/published";
import FooterSelect from "./Footer/footer-select";
import FooterPreview from "./Footer/footer-preview";
import FooterOneFunction from "./Footer/footer-one-function";

const FooterTheme = () => {
    const [switchThemes, SwitchThemes] = useState(1);
    const [successMessage, SuccessMessage] = useState(false);
    const [footerId, FooterId] = useState("");
    const [isPublished, IsPublished] = useState(false);
    const [isPublishing, IsPublishing] = useState(false);
    const [isPublish, IsPublish] = useState(true);

    const shadowSmall = "0px 1px 2px "
    const shadowMedium = "0px 10px 2px "
    const shadowLarge = "0px 20px 2px "

    useEffect(() => {
        FetchBrandMetaDataAPI();
    }, []);

    const FetchBrandMetaDataAPI = () => {
        let themeData = localStorage.getItem('StoreBrandFooterTheme');
        let data = JSON.parse(themeData);
        if (themeData) {
            FooterOneData(data.theme.footerOneData);
            FooterId(data?.id);
        }
    };

    const [footerOneBgColor, FooterOneBgColor] = useState("#fbfbfb");
    const [footerOneTitleColor, FooterOneTitleColor] = useState("#1a1a1a");
    const [footerOneIconColor, FooterOneIconColor] = useState("#2a2a2a");
    const [footerOneSecondaryColor, FooterOneSecondaryColor] = useState("#fbfbfb");

    const [footerOneData, FooterOneData] = useState([{
        "backgroundColor": footerOneBgColor,
        "titleColor": footerOneTitleColor,
        "iconColor": footerOneIconColor,
        "secondaryColor": footerOneSecondaryColor,
    }]);


    const FooterValueFunction = (id, value) => {
        if (id === 1) { FooterOneBgColor(value) }
        if (id === 2) { FooterOneTitleColor(value) }
        if (id === 3) { FooterOneIconColor(value) }
        if (id === 4) { FooterOneSecondaryColor(value) }
        let data = [{
            "backgroundColor": footerOneBgColor,
            "titleColor": footerOneTitleColor,
            "iconColor": footerOneIconColor,
            "secondaryColor": footerOneSecondaryColor,
        }]
        FooterOneData(data);
    }

    const FetchBrandMetaAPI = () => {
        IsPublish(false); IsPublishing(true);
        let tenantId = localStorage.getItem('AuthTenantID');
        let brandThemeId = localStorage.getItem('StoreBrandThemeId');
        let data = {
            "tenant": tenantId,
            "footer": {
                "id": "footer1",
                "theme": { footerOneData }
            }
        }; let postUrl;
        if (brandThemeId != "undefined") {
            postUrl = server + '/api/' + brandThemeId + '/patchBrandMeta';
            axios.patch(postUrl, JSON.stringify(data), {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + AuthAccessToken,
                },
            }).then(res => {
                setTimeout(() => {
                    IsPublishing(false); IsPublished(true)
                }, 2000);
                setTimeout(() => {
                    SuccessMessage(true);
                    IsPublished(false); IsPublish(true)
                }, 3000);
            }).catch(err => {
                console.log(err);
            });
        } else {
            postUrl = server + '/api/0/addBrandMeta';
            axios.post(postUrl, JSON.stringify(data), {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + AuthAccessToken,
                },
            }).then(res => {
                setTimeout(() => {
                    IsPublishing(false); IsPublished(true)
                }, 2000);
                setTimeout(() => {
                    SuccessMessage(true);
                    IsPublished(false); IsPublish(true)
                }, 3000);
            }).catch(err => {
                console.log(err);
            });
        }
    };

    return (
        <>
            <div className="md:flex mt-20 shadow-lg">
                <div className='md:w-[30%] w-full px-4 py-4'>

                    {successMessage ? (<>
                        <SuccessAlert Title="Footer updated successfully" OnFunc={SuccessMessage} />
                    </>
                    ) : (null)}

                    {isPublish ? (
                        <> <Publish OnFunc={FetchBrandMetaAPI} /> </>
                    ) : null}

                    {isPublished ? (<> <Published /> </>) : null}

                    {isPublishing ? (<> <Publishing /> </>) : null}

                    {switchThemes === 1 ? (
                        <>
                            <FooterSelect FooterId={FooterId} footerId={footerId} />

                            {footerId === "footer1" ? (
                                <>
                                    <FooterOneFunction footerOneData={footerOneData}
                                        FooterValueFunction={FooterValueFunction} />
                                </>
                            ) : null}
                        </>
                    ) : null}

                </div>

                <div className='md:w-[70%] w-full px-4 py-4'>
                    <FooterPreview footerId={footerId} footerOneData={footerOneData} />
                </div>
            </div>
        </>
    )
}

export default FooterTheme;