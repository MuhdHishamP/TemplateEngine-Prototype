import React from 'react';
import SideBarLeft from "../components/SideBar/side-bar-left"
import SideBarRight from "../components/SideBar/side-bar-right"
import Header from "./components/header"
import Footer from "./components/footer"


const SiteBuilder = ({layout, styles}) => {

    return (
        <>
            <Header />
            <main className='lg:flex mx-auto justify-center lg:space-x-10'>
                <SideBarLeft />
                <div className='flex-1 my-8 space-y-10 md:px-5'>
                    Body
                </div>
                <SideBarRight />
            </main>
            <Footer />
        </>
    )
}

export default SiteBuilder;