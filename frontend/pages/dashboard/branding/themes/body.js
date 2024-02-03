import React, { useState, useEffect } from 'react';
import NavTab from "../components/n1.js"
import BrandTheme from "../components/themes";
// import NavbarTheme from "../components/navbar";
// import FooterTheme from "../components/footer-theme";
// import FontTheme from "../components/font-theme.js";
// import BottomNavTheme from "../components/bottom-nav"

const BrandingBody = () => {
    const [switchThemes, SwitchThemes] = useState(0);

    const IfStyle = "max-w-full h-12 border-[3px] overflow-hidden bg-gray-200  dark:bg-[#1a1a1a] shadow-md hover:shadow-gray-100 shadow-gray-200 dark:shadow-[#060606] transform hover:scale-105 transition duration-300";
    const IfNotStyle = "max-w-full h-12 overflow-hidden bg-[#fbfbfb]  dark:bg-[#1a1a1a] shadow-md hover:shadow-gray-100 shadow-gray-200 dark:shadow-[#060606] transform hover:scale-105 transition duration-300";

    useEffect(() => {
        SwitchThemes(1);
    }, []);

    return (
        <>
            <div className="px-4 w-full mb-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div onClick={(e) => SwitchThemes(1)} className={switchThemes === 1 ? IfStyle : IfNotStyle} >
                        <NavTab Name="Themes" />
                    </div>
                    <div onClick={(e) => SwitchThemes(2)} className={switchThemes === 2 ? IfStyle : IfNotStyle} >
                        <NavTab Name="Navbar" />
                    </div>
                   
                    {/* <div onClick={(e) => SwitchThemes(5)} className={switchThemes === 5 ? IfStyle : IfNotStyle} >
                        <NavTab Name="Cart" />
                    </div> */}
                </div>
            </div>

            {switchThemes === 1 ? ( <> <BrandTheme />  </> ) : null}
            {switchThemes === 2 ? ( <> Navbar  </> ) : null}
         
        </>
    )
}

export default BrandingBody;