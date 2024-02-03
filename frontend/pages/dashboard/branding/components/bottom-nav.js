import React, { useEffect, useState } from "react";
import { server, AuthAccessToken } from "../../../../config";
import axios from "axios";
import SuccessAlert from "./success";
import Publishing from "./Publish/publishing";
import Publish from "./Publish/publish";
import Published from "./Publish/published";
import BottomNavSelect from "./Bottom-nav/bottom-select";
import BottomNavPreview from "./Bottom-nav/bottom-nav-preview";
import BottomNavOneFunction from "./Bottom-nav/bottom-one-function";


const BottomNavTheme = () => {
    const [switchThemes, SwitchThemes] = useState(1);
    const [successMessage, SuccessMessage] = useState(false);
    const [bottomNavId, BottomNavId] = useState("");
    const [isPublished, IsPublished] = useState(false);
    const [isPublishing, IsPublishing] = useState(false);
    const [isPublish, IsPublish] = useState(true);

    const shadowSmall = "0px 1px 2px "
    const shadowMedium = "0px 10px 2px "
    const shadowLarge = "0px 20px 2px "

    useEffect(() => {
        FetchBrandMetaDataAPI();
        SwitchThemes(1);
    }, []);

    const FetchBrandMetaDataAPI = () => {
        let themeData = localStorage.getItem('StoreBrandBottomNav');
        let data = JSON.parse(themeData);
        if (themeData) {
            if (data?.id) {
                NavBarOneData(data.theme.footerOneData);
                BottomNavId(data?.id);
            }
        }
    };

    const [bottomNavOneBgColor, BottomNavOneBgColor] = useState("#fbfbfb");
    const [bottomNavOneTitleColor, BottomNavOneTitleColor] = useState("#1a1a1a");
    const [bottomNavOneIconColor, BottomNavOneIconColor] = useState("#2a2a2a");
    const [bottomNavOneSelectColor, BottomNavOneSelectColor] = useState("#ffffff");

    const [navBarOneData, NavBarOneData] = useState([{
        "backgroundColor": bottomNavOneBgColor,
        "titleColor": bottomNavOneTitleColor,
        "iconColor": bottomNavOneIconColor,
        "selectedColor": bottomNavOneSelectColor
    }]);


    const BottomNavOneValueFunction = (id, value) => {
        if (id === 1) { BottomNavOneBgColor(value) }
        if (id === 2) { BottomNavOneTitleColor(value) }
        if (id === 3) { BottomNavOneIconColor(value) }
        if (id === 4) { BottomNavOneSelectColor(value) }
        let data = [{
            "backgroundColor": bottomNavOneBgColor,
            "titleColor": bottomNavOneTitleColor,
            "iconColor": bottomNavOneIconColor,
            "selectedColor": bottomNavOneSelectColor
        }]
        NavBarOneData(data);
    }

    const FetchBrandMetaAPI = () => {
        IsPublish(false); IsPublishing(true);
        let tenantId = localStorage.getItem('AuthTenantID');
        let brandThemeId = localStorage.getItem('StoreBrandThemeId');
        let data = {
            "tenant": tenantId,
            "bottom_nav": {
                "id": "bottonNav1",
                "theme": { navBarOneData }
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
                    IsPublishing(false); IsPublished(true);
                }, 2000);
                setTimeout(() => {
                    SuccessMessage(true);
                    IsPublished(false); IsPublish(true);
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
                    IsPublishing(false); IsPublished(true);
                }, 2000);
                setTimeout(() => {
                    SuccessMessage(true);
                    IsPublished(false); IsPublish(true);
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
                        <SuccessAlert Title="Bottom navigation updated successfully" OnFunc={SuccessMessage} />
                    </>
                    ) : (null)}

                    {isPublish ? (
                        <> <Publish OnFunc={FetchBrandMetaAPI} /> </>
                    ) : null}

                    {isPublished ? (<> <Published /> </>) : null}

                    {isPublishing ? (<> <Publishing /> </>) : null}

                    {switchThemes === 1 ? (
                        <>
                            <BottomNavSelect BottomNavId={BottomNavId} bottomNavId={bottomNavId} />

                            {bottomNavId === "bottonNav1" ? (
                                <>
                                    <BottomNavOneFunction navBarOneData={navBarOneData}
                                        BottomNavOneValueFunction={BottomNavOneValueFunction} />
                                </>
                            ) : null}
                        </>
                    ) : null}

                </div>

                <div className='md:w-[70%] w-full px-4 py-4'>
                    <BottomNavPreview bottomNavId={bottomNavId} navBarOneData={navBarOneData} />
                </div>
            </div>
        </>
    )
}

export default BottomNavTheme;