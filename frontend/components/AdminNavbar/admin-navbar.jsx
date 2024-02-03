import { useState, useEffect, useRef, Fragment } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import Link from "next/link";
import { authUserProfileId, authToken } from "../../auth";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { useRouter } from 'next/router';
import AdminSideBarMenu from "../AdminSidebar/menu";

function NavLink({ to, children }) {
  return <a href={to} className={`mx-4`}>
    {children}
  </a>
}

let creator = true;

const AdminNavbar = () => {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const wrapperRef = useRef(null);
  const [search_n, searchData] = useState([]);
  const [display, setDisplay] = useState(true);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [storeLogo, StoreLogo] = useState("");
  const [userName, UserName] = useState("");

  useEffect(() => {
    setMounted(true);
    let name = localStorage.getItem("UserNameX");
    UserName(name)
  }, []);

  async function FetchLogo() {
    let logo = localStorage.getItem('StoreLogoImage');
    StoreLogo(logo);
  }

  const UserLogout = async () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      window.location.href = "/login";
    }
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme == "system" ? systemTheme : theme;
    if (currentTheme == "dark") {
      return (
        <SunIcon className="w-6 h-6 text-[#fafafa]" role="button" onClick={() => setTheme('light')} />
      )
    } else {
      return (
        <MoonIcon className="w-6 h-6 text-[#3a3a3a]" role="button" onClick={() => setTheme('dark')} />
      )
    }
  }

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



  return (
    <>
      {/* Navbar */}
      <nav className="shadow-md  shadow-indigo-500/40 dark:shadow-gray-200 dark:shadow-lg sticky top-0 w-full z-10 bg-white border-[#fafafa] h-16 px-2 sm:px-4 dark:bg-[#1a1a1a]">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  md:mx-20 mx-10 justify-between w-full">
              <div className="md:hidden justify-center items-left flex-shrink-0 ">
                <Link href="/dashboard">
                  <div className="grid grid-flow-col cursor-pointer mb-4">
                    {renderLogoChanger()}
                  </div>
                </Link>
              </div>


              <div className="header-class text-right hidden text-sm items-baseline md:block pt-2">
                Hello, {userName}
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">

                  {/* <NavLink>
                    {renderThemeChanger()}
                  </NavLink> */}


                  <Menu as="div" className="relative">
                    <Menu.Button type="button">
                      <div
                        type="button"
                        className="bg-yellow-500 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                          <svg
                            className="block h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        ) : (
                          <svg
                            className="block h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95" >
                      <Menu.Items className="absolute bg-white dark:bg-[#2a2a2a] right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-layer-3 py-3 shadow-xl focus:outline-none ">


                        {authToken != null ? (
                          <>

                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={(e) => UserLogout(e)}
                                  className={`${active ? "bg-muted-1 text-heading" : "text-text"
                                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#1a1a1a]`}
                                >
                                  Logout
                                </button>
                              )}
                            </Menu.Item>
                          </>
                        ) : (
                          <>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href='/login'>
                                  <button
                                    className={`${active ? "bg-muted-1 text-heading" : "text-text"
                                      } flex w-full cursor-pointer items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#1a1a1a]`} >
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


                </div>
              </div>
            </div>
            <div className="mr-2 flex md:hidden">


              <div className="mt-2 mx-6">
                {renderThemeChanger()}
              </div>


              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-yellow-500 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {(ref) => (
            <div className="md:hidden block overflow-x table-auto z-50 overflow-scroll" id="mobile-menu">
              <div ref={ref} className="bg-white block overflow-x table-auto overflow-scroll border-gray-200 px-2 sm:px-4 py-6 rounded dark:bg-[#1a1a1a]">
                <AdminSideBarMenu />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}
export default AdminNavbar;