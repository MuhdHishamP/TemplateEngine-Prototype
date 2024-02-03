import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Menu, Transition, Dialog } from "@headlessui/react";
import { useGlobalContext } from "../../../../../Contexts/globalContext/context";
import { useRouter } from "next/router";
import {
    SearchIcon,
    MenuIcon,
    ShoppingBagIcon,
    UserCircleIcon,
} from "@heroicons/react/outline";
import { HiOutlineUserCircle } from "react-icons/hi";
import Link from "next/link";
import { server, AuthUserProfileID } from "../../../../../config";

const NavBarOne = ({ navbarOneData }) => {

    const router = useRouter();
    const {
        translate: t,
        lang,
        sideToggler,
        amount,
        cartToggler,
        displayProf, setDisplayProf
    } = useGlobalContext();
    const [storeLogo, StoreLogo] = useState("");
    const [userProfileImage, UserProfileImage] = useState("");


    useEffect(() => {
        FetchLogo();
        SetProfileImage();
        CheckProfileImage();
    }, []);


    const SetProfileImage = () => {
        if (typeof window !== 'undefined') {
            let image = localStorage.getItem('userProfileImageX');
            if (image) { UserProfileImage(image) };
        }
    };

    async function FetchLogo() {
        let logo = localStorage.getItem('StoreLogoImage');
        StoreLogo(logo);
    };

    let profileImage = "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg";
    const CheckProfileImage = () => {
        let g_image = localStorage.getItem('userProfileImageX');
        let u_image = localStorage.getItem('userProfileImage');
        if (g_image != "undefined") {
            UserProfileImage(g_image);
        } else if (u_image != "undefined") {
            UserProfileImage(u_image);
        } else {
            UserProfileImage(profileImage);
        }
    };


    async function UserLogOut(e) {
        e.preventDefault();
        //UserLogout();
    }

    var search_url = server + '/product/SearchProduct?s='
    const wrapperRef = useRef(null);
    const myRef = useRef();
    const [search_n, searchData] = useState([]);
    const [display, setDisplay] = useState(false);
    const updateSearchBox = poke => {
        setSearch(poke);
        setDisplay(false);
    };
    async function setSearch(key) {
        let result = await fetch(search_url + key)
        result = await result.json();
        searchData(result.results)
    }

    const placeholder = {
        "color": "#3aafa9"
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickInside);
    }, []);

    const handleClickInside = () => setDisplay(true);

    const handleClickOutside = (e) => {
        setDisplay(false)
        if (e.target.id == "HideSearchModalX") {
            setDisplay(false)
        }
    };
    return (
        <>

            <nav
                className="z-40 sticky top-0 flex justify-between text-sm h-14 md:h-20 shadow-sm items-center px-3 py-5 text-primary glob-trans"
                style={{
                    "backgroundColor": navbarOneData ? navbarOneData[0]?.backgroundColor : null,
                    "color": navbarOneData ? navbarOneData[0]?.titleColor : null,
                }} >
                <div className="flex ">
                    <button className="mx-3" onClick={sideToggler}
                        style={{
                            "color": navbarOneData ? navbarOneData[0]?.iconColor : null,
                        }} >
                        <MenuIcon className="cursor-pointer w-[22px] h-[22px]" />
                    </button>
                    <div className="hidden sm:flex">
                        <div className="mx-3 hover:opacity-70">
                            <Link href="#">
                                <img className="cursor-pointer" style={{ "width": "100px" }} src={storeLogo} />
                            </Link>
                        </div>
                        <div className="mx-3 uppercase text-xs hover:opacity-70">
                            <Link href="#">
                                <div>{t("home")}</div>
                            </Link>
                        </div>
                        <div className="mx-3 uppercase text-xs hover:opacity-70">
                            <Link href="#">
                                <div>Collections</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between max-w-min  py-1 px-2 rounded-full">
                    <div className="form-control min-w-[110px] sm:min-w-[200px] md:min-w-[250px]">
                        <div className="header-class justify-center hidden md:block pt-1">
                            <div ref={wrapperRef} className="mb-3 xl:w-96">
                                <input
                                    id="auto"
                                    onClick={() => setDisplay(false)}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        setDisplay(true);
                                    }}
                                    autoComplete="off"
                                    className="form-control block w-full px-3 py-1.5 text-sm font-normal
                                    transition ease-in-out m-0 focus:outline-none"
                                    placeholder="Search for Products, Collections .."
                                    style={{
                                        "backgroundColor": navbarOneData ? navbarOneData[0]?.searchBgColor  : null,
                                        "color": navbarOneData ? navbarOneData[0]?.searchTitleColor  : null,
                                        "borderRadius": navbarOneData ?  navbarOneData[0]?.brRadius + "%"  : null,
                                        "padding": `${ navbarOneData ? navbarOneData[0]?.boxPadding  : null}%`,
                                        "box-shadow": navbarOneData ? navbarOneData[0]?.boxShadow  : null,

                                    }} />

                                {display ? (
                                    <div ref={myRef} onClick={(e) => handleClickOutside(e)} id="HideSearchModalX" className="justify-center items-center overflow-y-auto inset-0 z-50 outline-none">
                                        <div className="autoContainer z-50 h-96 overflow-scroll"
                                            style={{
                                                "backgroundColor": navbarOneData ? navbarOneData[0]?.searchBgColor  : null,
                                                "color": navbarOneData ? navbarOneData[0]?.searchTitleColor  : null,
                                                "borderRadius": navbarOneData ? navbarOneData[0]?.brDropRadius + "%"  : null,
                                                "padding": `${navbarOneData ? navbarOneData[0]?.boxDropPadding  : null}%`,
                                                "box-shadow": navbarOneData ? navbarOneData[0]?.boxShadow : null,

                                            }}  >
                                            {search_n.map((item) =>
                                                <>

                                                    <div
                                                        className="option cursor-pointer hover:opacity-50"
                                                        key={item}
                                                        tabIndex="0"
                                                        onClick={() => updateSearchBox(item.id)}
                                                        style={{
                                                            "backgroundColor": navbarOneData ? navbarOneData[0]?.searchBgColor : null,
                                                            "color": navbarOneData ? navbarOneData[0]?.searchTitleColor : null,
                                                        }} >
                                                        <span className="text-sm ">{item.name}</span>
                                                        <div className="aspect-w-16 aspect-h-9">
                                                            <img className="object-contain h-10 w-20 cursor-pointer" src={item?.images[0]?.image} alt="SketchApp SAS" />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    {/* <SearchIcon className="w-5 h-5 mx-1" /> */}
                </div>
                <div className="flex">
                    {/* <div className="mx-3 md:mx-5 mt-1">
                        <Toggle className="w-5 h-5" />
                    </div> */}
                    <button
                        className="mb-1 mx-3 mt-1 hover:text-accent relative flex flex-row"
                        onClick={cartToggler}
                        style={{
                            "color": navbarOneData ? navbarOneData[0]?.iconColor : null,
                        }} >
                        <ShoppingBagIcon className="w-5 h-5" />
                        {amount !== 0 ? (
                            <div className="text-xs absolute text-center bottom-0 -right-2 w-4 h-4 rounded-full bg-secondarycont text-secondarycont">
                                {amount}
                            </div>
                        ) : null}
                    </button>
                    <button className="mx-3 md:mx-5">
                        {/* <UserCircleIcon className="w-5 h-5" /> */}

                        <Menu as="div" className="relative"
                            style={{
                                "color": navbarOneData ? navbarOneData[0]?.iconColor : null,
                            }} >
                            <Menu.Button type="button">
                                {userProfileImage ? (
                                    <>
                                        <img
                                            src={userProfileImage}
                                            alt="avatar"
                                            className="inline-block h-8 w-8 rounded-full" />
                                    </>
                                ) : (
                                    <>
                                        <HiOutlineUserCircle size="20" className="mt-1" />
                                    </>
                                )}

                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95" >
                                <Menu.Items style={{
                                    "backgroundColor": navbarOneData ? navbarOneData[0]?.backgroundColor : null,
                                    "color": navbarOneData ? navbarOneData[0]?.searchTitleColor : null,
                                    "borderRadius":navbarOneData ?  navbarOneData[0]?.brDropRadius + "%" : null,
                                    "padding": `${ navbarOneData ? navbarOneData[0]?.boxDropPadding : null}%`,
                                    "box-shadow": navbarOneData ? navbarOneData[0]?.boxShadow : null,
                                }} className="absolute shadow-xl right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-layer-3 py-3 focus:outline-none">
                                    {AuthUserProfileID != null ? (
                                        <>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href="#">
                                                        <button
                                                            className={`${active ? "bg-muted-1 text-heading" : "text-text"
                                                                } flex w-full cursor-pointer items-center px-4 py-2 text-sm
                                                                 hover:opacity-70`}  >
                                                            Account
                                                        </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        //onClick={(e) => UserLogOut(e)}
                                                        className={`${active ? "bg-muted-1 text-heading" : "text-text"
                                                            } flex w-full cursor-pointer items-center px-4 py-2 text-sm 
                                                            hover:opacity-70`} >
                                                        Logout
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </>
                                    ) : (
                                        <>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href='#'>
                                                        <button
                                                            className={`${active ? "bg-muted-1 text-heading" : "text-text"
                                                                } flex w-full cursor-pointer items-center px-4 py-2 text-sm 
                                                                hover:opacity-70`} >
                                                            Login
                                                        </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </>
                                    )}
                                </Menu.Items>
                            </Transition>
                        </Menu>

                    </button>
                </div>
            </nav>


        </>
    )
}

export default NavBarOne;