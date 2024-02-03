import React from "react";
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { useTheme } from 'next-themes';
import { Transition } from "@headlessui/react";
import Head from "next/head";
import AdminSideBarMenu from "./menu";

function NavLink({ to, children }) {
  return <div href={to} className={`mx-4`}>
    {children}
  </div>
}

export default function AdminSidebar({  }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const renderLogoChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme == "system" ? systemTheme : theme;
    if (currentTheme == "dark") {
      return (
        <img className="w-full" style={{ width: "100px" }} src="/img/logo-dark.png" />
      )
    } else {
      return (
        <img className="w-full" style={{ width: "100px" }} src="/img/logo-light.png" />
      )
    }
  }
  
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <>
      <Head>
        <meta name="theme-color" content="#3c1742" />
        <title>Dashboard</title>
      </Head>
      <nav className="md:left-0 hidden md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-lg bg-white dark:bg-[#1a1a1a]  flex-wrap items-center justify-between relative md:w-64 z-10 pt-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")} >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}

          <Link href="/dashboard">
            <div className="grid grid-flow-col cursor-pointer">
              <div className="row-span-3">
                {renderLogoChanger()}
              </div>
            </div>
          </Link>

          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">

            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95" >
              {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                  <div
                    ref={ref}
                    className="bg-white border-gray-200 px-2 sm:px-4 py-6 rounded dark:bg-gray-800" >

                    <div className="bg-gray-100 dark:bg-gray-700 h-8 w-24 mb-1 md:mb-0 rounded-md flex items-center justify-center">
                      <div tabIndex="0" aria-label="gray background badge" className="focus:outline-none flex items-center">
                        <Link href="/create-item">
                          <span className="text-xs text-gray-700 dark:text-gray-400 cursor-pointer font-normal">Create</span>
                        </Link>
                      </div>
                    </div>

                    


                    <div className="bg-gray-100 dark:bg-gray-700 h-8 w-24 mb-1 md:mb-0 rounded-md flex items-center justify-center">
                      <div tabIndex="0" aria-label="gray background badge" className="focus:outline-none flex items-center">
                        <NavLink>
                          {renderThemeChanger()}
                        </NavLink>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </Transition>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            } >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/dashboard">
                    <div className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0" >
                      Site Builder
                    </div>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")} >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal" />
              </div>
            </form>
            
            
              <AdminSideBarMenu />

            {/* Divider */}
          </div>
        </div>
      </nav>
    </>
  );
}
