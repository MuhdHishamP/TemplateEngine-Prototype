import React, { useState, useEffect } from 'react';

const HomeBody = ({ brandData }) => {
    const [brandThemeData, BrandThemeData] = useState([]);

    console.log(brandData);

    useEffect(() => {
        BrandThemeData(brandData[0]?.theme);
    }, []);


    return (
        <div className="flex items-center justify-center h-screen"
            style={{
                "backgroundColor": brandThemeData?.light?.colorData[0]?.background,
            }} >
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4"
                    style={{
                        "color": brandThemeData?.light?.colorData[0]?.primary,
                    }}
                >Welcome to My App</h1>
                <p className="text-lg" style={{
                    "color": brandThemeData?.light?.colorData[0]?.paragraph,
                }} >
                    Thank you for using choosing the templates
                </p>

                <p className="text-sm mt-3" style={{
                    "color": brandThemeData?.light?.colorData[0]?.paragraph,
                }} >
                    Thank you for using choosing the templates , kjadkasd kjaskjd kas dk
                    asldnaslkdk asdk  asldals d
                    asdnlasd aks dkasd 
                </p>
            </div>
        </div>
    );
};

export default HomeBody;