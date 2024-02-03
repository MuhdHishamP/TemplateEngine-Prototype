import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';


const AdvertCard = ({ key, advertDemoData, advertData }) => {
    const [detailData, DetailData] = useState("");

    useEffect(() => {
        ParseData();
    }, [])

    const ParseData = () => {
        if (advertDemoData?.desc) {
            DetailData(parse(advertDemoData?.desc));
        }
    }

    return (
        <>
            <div key={key} className="w-full">
                <div className="px-4 bg-[#fafafa] dark:bg-[#2a2a2a] border dark:border-[#454545]"
                    style={{
                        "backgroundColor": advertData ? advertData[0]?.backgroundColor  : null,
                        "borderRadius": advertData ? advertData[0]?.brRadius + "%"  : null,
                        "padding": `${advertData ? advertData[0]?.boxPadding  : null}%`,
                        "box-shadow": advertData ? advertData[0]?.boxShadow  : null,
                    }} >
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 flex items-center">
                            <img className="mx-auto shadow-md" src={advertDemoData?.image} alt=""
                                style={{
                                    "padding": `${advertData ? advertData[0]?.imagePadding  : null}%`,
                                    "border-radius": `${advertData ? advertData[0]?.brRadiusImage  : null}%`,
                                    "box-shadow": advertData ? advertData[0]?.imageShadow  : null,
                                }} />
                        </div>
                        <div className="w-full md:w-1/2 mt-10 mb-4 md:mb-0">
                            {advertDemoData?.name ? (
                                <>
                                    <h3 className="mb-1 md:ml-4 text-2xl font-bold">
                                        <span className=""
                                            style={{ "color": advertData ? advertData[0]?.titleColor  : null }} >
                                            {advertDemoData?.name}</span>
                                    </h3>
                                </>
                            ) : null}
                            {detailData ? (
                                <>
                                    <p className="mb-8 md:ml-4 md:mb-16 text-sm"
                                        style={{ "color": advertData ? advertData[0]?.contentColor  : null }} >
                                        {detailData}</p>
                                </>
                            ) : null}

                            {advertDemoData?.product_id ? (
                                <>
                                    <div
                                        className="flex float-right
                                            bg-[#1a1a1a]
                                             p-2 
                                            text-white
                                            cursor-pointer
                                            shadow-md mb-4
                                            hover:bg-gray-600
                                            dark:hover:bg-[#313131]"
                                        style={{
                                            "backgroundColor":advertData ?  advertData[0]?.buttonBgColor  : null,
                                            "borderRadius": advertData ? advertData[0]?.buttonBorderRadius + "%"  : null,
                                            "box-shadow": advertData ? advertData[0]?.buttonBoxShadow  : null,
                                        }}>
                                        <span className="text-sm p-2" style={{ "color": advertData ? advertData[0]?.buttonTitleColor  : null }} >
                                            Checkout Now </span>
                                    </div>
                                </>
                            ) : null}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdvertCard;