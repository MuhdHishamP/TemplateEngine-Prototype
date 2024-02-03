import React, { useState, useEffect } from 'react';


const BlogCard = ({ key, blogDemoData, blogData }) => {



    return (
        <>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">

                    <div key={key} className="flex flex-col justify-center cursor-pointer items-center" >
                        <div
                            style={{
                                "backgroundColor": blogData ? blogData[0]?.backgroundColor : null,
                                "borderRadius": blogData ? blogData[0]?.brRadius + "%" : null,
                                "padding": `${blogData ? blogData[0]?.boxPadding : null}%`,
                                "box-shadow":blogData ?  blogData[0]?.boxShadow : null,
                            }}
                            className="relative flex flex-col hover:bg-gray-100 dark:hover:bg-[#313131] w-full !p-4 3xl:p-![18px">
                            <div className="">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img src={blogDemoData?.image}
                                        className="object-contain h-48 w-full cursor-pointer"
                                        style={{
                                            "padding": `${blogData ? blogData[0]?.imagePadding : null}%`,
                                            "border-radius": `${blogData ? blogData[0]?.brRadiusImage : null}%`,
                                            "box-shadow": blogData ? blogData[0]?.imageShadow : null,
                                        }}
                                        alt="" />
                                </div>
                                <div className="mb-3 text-gray-800 mt-2 dark:text-gray-200 flex items-center justify-between px-1 md:items-start">
                                    <div className="mb-2">
                                        <p className="text-sm text-navy-700"
                                            style={{ "color": blogData ? blogData[0]?.titleColor : null }} > {blogDemoData?.name.substring(0, 35)}{blogDemoData?.name?.length >= 35 && '...'} </p>
                                        {/* <p className="mt-1 text-xs md:mt-2">{parse(blogData?.content.substring(0,70))} </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default BlogCard;