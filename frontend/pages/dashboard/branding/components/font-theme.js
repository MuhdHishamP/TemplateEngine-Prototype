import React, { useState, useEffect } from 'react';
import SuccessAlert from "./success";
import Publishing from "./Publish/publishing";
import Publish from "./Publish/publish";
import Published from "./Publish/published";
import InputSelectFonts from "./Fonts/input-select-fonts";
import localFont from 'next/font/local';
import { fontFamilyData } from "../../../../config/fonts";
import axios from "axios";
import { server, AuthAccessToken } from "../../../../config";


const ClashGrotesk = localFont({ src: '../../../fonts/ClashGrotesk-Regular.woff' });
const AgbalumoRegular = localFont({ src: '../../../fonts/Agbalumo-Regular.ttf' });
const Inter = localFont({ src: '../../../fonts/Inter-VariableFont.ttf' });
const KanitRegular = localFont({ src: '../../../fonts/Kanit-Regular.ttf' });
const KeniaRegular = localFont({ src: '../../../fonts/Kenia-Regular.ttf' });
const LatoRegular = localFont({ src: '../../../fonts/Lato-Regular.ttf' });
const MontserratRegular = localFont({ src: '../../../fonts/Montserrat-Regular.ttf' });
const MuktaRegular = localFont({ src: '../../../fonts/Mukta-Regular.ttf' });
const NotoSansRegular = localFont({ src: '../../../fonts/NotoSans-Regular.ttf' });
const OpenSansRegular = localFont({ src: '../../../fonts/OpenSans-Regular.ttf' });
const OswaldRegular = localFont({ src: '../../../fonts/Oswald-Regular.ttf' });
const PoppinsRegular = localFont({ src: '../../../fonts/Poppins-Regular.ttf' });
const PTSansRegular = localFont({ src: '../../../fonts/PTSans-Regular.ttf' });
const RalewayRegular = localFont({ src: '../../../fonts/Raleway-Regular.ttf' });
const RobotoRegular = localFont({ src: '../../../fonts/Roboto-Regular.ttf' });
const RubikRegular = localFont({ src: '../../../fonts/Rubik-Regular.ttf' });
const UbuntuRegular = localFont({ src: '../../../fonts/Ubuntu-Regular.ttf' });
const WorkSansRegular = localFont({ src: '../../../fonts/WorkSans-Regular.ttf' });
const HelveticaRegular = localFont({ src: '../../../fonts/Helvetica.ttf' });

const FontTheme = () => {
    const [successMessage, SuccessMessage] = useState(false);
    const [isPublished, IsPublished] = useState(false);
    const [isPublishing, IsPublishing] = useState(false);
    const [isPublish, IsPublish] = useState(true);
    const [activeFontFamily, ActiveFontFamily] = useState('Open Sans');
    const [fontFamily, FontFamily] = useState([]);
    const [fontFamilyValue, FontFamilyValue] = useState([]);

    const FetchBrandMetaAPI = () => {
        IsPublish(false); IsPublishing(true);
        let tenantId = localStorage.getItem('AuthTenantID');
        let brandThemeId = localStorage.getItem('StoreBrandThemeId');
        let data = {
            "tenant": tenantId,
            "font": { "fontFamily": fontFamilyValue }
        };
        let postUrl;
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
    }

    useEffect(() => {
        FetchFonts();
    }, []);

    const FetchFonts = () => {
        let value = localStorage.getItem('StoreBrandFontValue');
        console.log(value);
        if (value != "undefined") {
            document.getElementById('FontFamilyValue').value = value;
        };
    }


    const FontFamilyFunction = (value) => {
        FontFamilyValue(value);
        if (value === "1") { FontFamily(AgbalumoRegular) }
        else if (value === "2") { FontFamily(ClashGrotesk) }
        else if (value === "3") { FontFamily(Inter) }
        else if (value === "4") { FontFamily(KanitRegular) }
        else if (value === "5") { FontFamily(KeniaRegular) }
        else if (value === "6") { FontFamily(LatoRegular) }
        else if (value === "7") { FontFamily(MontserratRegular) }
        else if (value === "8") { FontFamily(MuktaRegular) }
        else if (value === "9") { FontFamily(NotoSansRegular) }
        else if (value === "10") { FontFamily(OpenSansRegular) }
        else if (value === "11") { FontFamily(OswaldRegular) }
        else if (value === "12") { FontFamily(PoppinsRegular) }
        else if (value === "13") { FontFamily(PTSansRegular) }
        else if (value === "14") { FontFamily(RalewayRegular) }
        else if (value === "15") { FontFamily(RobotoRegular) }
        else if (value === "15") { FontFamily(RobotoRegular) }
        else if (value === "16") { FontFamily(RubikRegular) }
        else if (value === "17") { FontFamily(UbuntuRegular) }
        else if (value === "18") { FontFamily(WorkSansRegular) }
        else if (value === "19") { FontFamily(HelveticaRegular) }
    }

    const FontPreview = () => {
        if (fontFamily?.className != "undefined") {
            return (
                <>
                    <div className='flex justify-center items-center md:w-[30%] mt-10 h-20 px-4 py-4 bg-black shadow-md'>
                        <p className={fontFamily?.className + " text-white text-center text-2xl"}>Your font looks like this.</p>
                    </div>
                </>
            )
        } else {
            return (
            <div className='flex justify-center items-center md:w-[30%] mt-10 h-20 px-4 py-4 bg-black shadow-md'>
                <p className={fontFamily?.className + " text-white text-center text-2xl"}>Your font looks like this.</p>
            </div>
            )
        }
    }

    return (
        <>
            <div className="md:flex mt-20 shadow-lg">

                <div className='md:w-[40%] w-full px-4 py-4'>

                    {successMessage ? (<>
                        <SuccessAlert Title="Font updated successfully" OnFunc={SuccessMessage} />
                    </>
                    ) : (null)}

                    {isPublish ? (
                        <> <Publish OnFunc={FetchBrandMetaAPI} /> </>
                    ) : null}

                    {isPublished ? (<> <Published /> </>) : null}
                    {isPublishing ? (<> <Publishing /> </>) : null}

                    <InputSelectFonts OnFunc={FontFamilyFunction} fontFamilyData={fontFamilyData}
                        fontFamily={fontFamily} id="FontFamilyValue" />

                </div>

                {FontPreview()}



            </div>

        </>
    )
}

export default FontTheme;