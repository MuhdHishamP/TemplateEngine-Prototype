import React, { useEffect, useState } from 'react';
import NavTab from "../components/n1.js"
import ColorTheme from "./Color/index";
import Publishing from "./Publish/publishing";
import Publish from "./Publish/publish";
import Published from "./Publish/published";
import { baseURL, accessToken } from "../../../../auth";
import axios from "axios";
import SuccessAlert from "./success";

const BrandTheme = () => {
    const [switchThemes, SwitchThemes] = useState(0);
    const [successMessage, SuccessMessage] = useState(false);
    const IfStyle = "max-w-full h-12 border-[3px] overflow-hidden bg-gray-200  dark:bg-[#3a3a3a] shadow-md hover:shadow-gray-100 shadow-gray-200 dark:shadow-[#060606] transform hover:scale-105 transition duration-300";
    const IfNotStyle = "max-w-full h-12  overflow-hidden bg-[#fbfbfb] dark:bg-[#3a3a3a] shadow-md hover:shadow-gray-100 shadow-gray-200 dark:shadow-[#060606] transform hover:scale-105 transition duration-300";


    useEffect(() => {
        SwitchThemes(1);
        FetchBrandMetaDataAPI();
    }, []);

    const FetchBrandMetaDataAPI = () => {
        let themeData = localStorage.getItem('StoreBrandTheme');
        let data = JSON.parse(themeData); BrandList(data);
        if (themeData) {
            ColorData(data.light.colorData);
            CardOneData(data?.light?.cards[0]?.product_f?.cardOneData);
            CardTwoData(data?.light?.cards[0]?.product_p?.cardTwoData);
            BlogData(data?.light?.cards[0]?.blog?.blogData);
            AdvertData(data?.light?.cards[0]?.advert?.advertData);
            AddCartbuttonData(data?.light?.buttons[0]?.addCartbuttonData);
            DefaultButtonData(data?.light?.buttons[0]?.defaultButtonData);
        }
    }

    const [primaryColor, PrimaryColor] = useState("#fafafa");
    const [secondaryColor, SecondaryColor] = useState("#3aafa9");
    const [backgroundColor, BackgroundColor] = useState("#3aafa9");
    const [paragraphColor, ParagraphColor] = useState("#3aafa9");

    const [colorData, ColorData] = useState([{ }]);

    const ColorValueFunction = (id, value) => {
        if (id === 1) { PrimaryColor(value) }
        if (id === 2) { SecondaryColor(value) }
        if (id === 3) { BackgroundColor(value) }
        if (id === 4) { ParagraphColor(value) }
        let data = [{
            "primary": primaryColor,
            "secondary": secondaryColor,
            "background": backgroundColor,
            "paragraph": paragraphColor,
        }];
        ColorData(data);
    }



    const [isPublished, IsPublished] = useState(false);
    const [isPublishing, IsPublishing] = useState(false);
    const [isPublish, IsPublish] = useState(true);
    
    const [brandList, BrandList] = useState([]);

    const FetchBrandMetaAPI = (id) => {
        let data = {
            "theme": {
                "light": {
                    colorData,
                },
            },
        };
        let postUrl = baseURL + '/api/0/AddBrandMeta';
        IsPublish(false); IsPublishing(true);
        axios.post(postUrl, JSON.stringify(data), {
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
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
    };



    return (
        <>
            <div className="md:flex mt-20 shadow-lg">
                <div className='md:w-[50%] w-full px-4 py-4'>

                    {successMessage ? (<>
                        <SuccessAlert Title="Theme updated successfully" OnFunc={SuccessMessage} />
                    </>
                    ) : (null)}

                    {isPublish ? (
                        <> <Publish OnFunc={FetchBrandMetaAPI} /> </>
                    ) : null}

                    {isPublished ? ( <> <Published /> </>  ) : null}

                    {isPublishing ? (  <> <Publishing /> </> ) : null}

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        <div onClick={(e) => SwitchThemes(1)} className={switchThemes === 1 ? IfStyle : IfNotStyle} >
                            <NavTab Name="Color" />
                        </div>

                        {/* <div onClick={(e) => SwitchThemes(2)} className={switchThemes === 2 ? IfStyle : IfNotStyle} >
                            <NavTab Name="Cards" />
                        </div>
                        <div onClick={(e) => SwitchThemes(3)} className={switchThemes === 3 ? IfStyle : IfNotStyle} >
                            <NavTab Name="Buttons" />
                        </div> */}
                    </div>

                    {switchThemes === 1 ? (
                        <>
                            <ColorTheme colorData={colorData} ColorValueFunction={ColorValueFunction} />
                        </>
                    ) : null}

                    {switchThemes === 2 ? (
                        <>
                           
                        </>
                    ) : null}

                   
                </div>


            </div>
        </>
    )
}

export default BrandTheme;