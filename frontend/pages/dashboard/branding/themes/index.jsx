import React from 'react';
import AdminNavbar from "../../../../components/AdminNavbar/admin-navbar";
import AdminSidebar from "../../../../components/AdminSidebar/admin-sidebar";
// import FooterAdmin from "../../dashboard/components/Footers/FooterAdmin.js";
import BrandingBody from "./body";

const BrandingMain = () => {
    return (
        <>
            <AdminSidebar />
            <div className="relative md:ml-64 bg-blueGray-100" >
                <AdminNavbar />
                <div className="relative dark:bg-[#2a2a2a] bg-white mx-10 pb-32 pt-12">
                    
                    <BrandingBody />
                </div>
                {/* <FooterAdmin /> */}
            </div>
        </>
    )
}

export default BrandingMain;