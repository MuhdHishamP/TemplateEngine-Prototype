import React, { useEffect, useState } from "react";
import { server, AuthAccessToken } from "../../../../config";
import axios from "axios";
import SuccessAlert from "./success";
import Publishing from "./Publish/publishing";
import Publish from "./Publish/publish";
import Published from "./Publish/published";
import NavbarSelect from "./Navbar/navbar-select";
import NavBarPreview from "./Navbar/nav-preview";
import NavOneFunction from "./Navbar/nav-one-function";

const NavbarTheme = () => {
    const [switchThemes, SwitchThemes] = useState(1);
    const [successMessage, SuccessMessage] = useState(false);
    const [navbarId, NavbarId] = useState([]);
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
        let themeData = localStorage.getItem('StoreBrandNavbarTheme');
        let data = JSON.parse(themeData);
        if (themeData) {
            NavbarOneData(data?.theme?.navbarOneData)
            NavbarId(data?.id)
        }
    };

    const [navOneBgColor, NavOneBgColor] = useState("#fbfbfb");
    const [navOneTitleColor, NavOneTitleColor] = useState("#1a1a1a");
    const [navOneIconColor, NavOneIconColor] = useState("#2a2a2a");
    const [navOneSearchBgColor, NavOneSearchBgColor] = useState("#fbfbfb");
    const [navOneSearchTitleColor, NavOneSearchTitleColor] = useState("#33333");
    const [navOneSearchBorderRadius, NavOneSearchBorderRadius] = useState("0");
    const [navOneSearchPadding, NavOneSearchPadding] = useState("1");
    const [navOneSearchShadow, NavOneSearchShadow] = useState("0");
    const [navOneSearchShadowColor, NavOneSearchShadowColor] = useState("#fbfbfb");
    const [navOneSearchDropBorderRadius, NavOneSearchDropBorderRadius] = useState("0");
    const [navOneSearchDropPadding, NavOneSearchDropPadding] = useState("1");

    const [navbarOneData, NavbarOneData] = useState([{
        "backgroundColor": navOneBgColor,
        "titleColor": navOneTitleColor,
        "iconColor": navOneIconColor,
        "searchBgColor": navOneSearchBgColor,
        "searchTitleColor": navOneSearchTitleColor,
        "brRadius": navOneSearchBorderRadius,
        "boxPadding": navOneSearchPadding,
        "boxShadow": navOneSearchShadow,
        "boxShadowColor": navOneSearchShadowColor,
        "brDropRadius": navOneSearchDropBorderRadius,
        "boxDropPadding": navOneSearchDropPadding,
    }]);

    const NavbarValueFunction = (id, value) => {
        if (id === 1) { NavOneBgColor(value) }
        if (id === 2) { NavOneTitleColor(value) }
        if (id === 3) { NavOneIconColor(value) }
        if (id === 4) { NavOneSearchBgColor(value) }
        if (id === 5) { NavOneSearchTitleColor(value) };
        if (id === 6) { NavOneSearchBorderRadius(value) };
        if (id === 7) { NavOneSearchPadding(value) };
        if (id === 8) { NavOneSearchDropBorderRadius(value) };
        if (id === 9) { NavOneSearchDropPadding(value) };
        if (id === 10) {
            if (value == "1") { NavOneSearchShadow(shadowSmall + navOneSearchShadowColor) }
            if (value == "2") { NavOneSearchShadow(shadowMedium + navOneSearchShadowColor) }
            if (value == "3") { NavOneSearchShadow(shadowLarge + navOneSearchShadowColor) }
        };
        if (id === 11) {
            NavOneSearchShadow(navOneSearchShadow);
            NavOneSearchShadowColor(value);
        };
        let data = [{
            "backgroundColor": navOneBgColor,
            "titleColor": navOneTitleColor,
            "iconColor": navOneIconColor,
            "searchBgColor": navOneSearchBgColor,
            "searchTitleColor": navOneSearchTitleColor,
            "brRadius": navOneSearchBorderRadius,
            "boxPadding": navOneSearchPadding,
            "boxShadow": navOneSearchShadow,
            "boxShadowColor": navOneSearchShadowColor,
            "brDropRadius": navOneSearchDropBorderRadius,
            "boxDropPadding": navOneSearchDropPadding,
        }]
        NavbarOneData(data);
    }

    const FetchBrandMetaAPI = () => {
        IsPublish(false); IsPublishing(true);
        let tenantId = localStorage.getItem('AuthTenantID');
        let brandThemeId = localStorage.getItem('StoreBrandThemeId');
        let data = {
            "tenant": tenantId,
            "navbar": {
                "id": "nav1",
                "theme": { navbarOneData }
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
                        <SuccessAlert Title="Navbar updated successfully" OnFunc={SuccessMessage} />
                    </>
                    ) : (null)}

                    {isPublish ? (
                        <> <Publish OnFunc={FetchBrandMetaAPI} /> </>
                    ) : null}

                    {isPublished ? (<> <Published /> </>) : null}

                    {isPublishing ? (<> <Publishing /> </>) : null}

                    {switchThemes === 1 ? (
                        <>
                            <NavbarSelect NavbarId={NavbarId} navbarId={navbarId} />
                            {navbarId === "nav1" ? (
                                <>
                                    <NavOneFunction navbarOneData={navbarOneData}
                                        NavbarValueFunction={NavbarValueFunction} />
                                </>
                            ) : null}
                        </>
                    ) : null}

                </div>

                <div className='md:w-[70%] w-full px-4 py-4'>
                    <NavBarPreview navbarId={navbarId} navbarOneData={navbarOneData} />
                </div>
            </div>
        </>
    )
}

export default NavbarTheme;