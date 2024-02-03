import React, { useState, useEffect } from 'react';
import {
  MdOutlineDashboard, MdOutlineLogout
} from "react-icons/md";
import Link from 'next/link';


let activeValue;

const AdminSideBarMenu = () => {
  const [mounted, setMounted] = useState(false);
  const [tabActiveStatus, TabSetActiveStatus] = useState(activeValue);

  useEffect(() => {
    setMounted(true);
    SetDefaultValue();
  }, []);

  const SetDefaultValue = () => {
    if (activeValue == "") {
      activeValue = localStorage.getItem("SideBarActiveTab");
      TabSetActiveStatus(activeValue);
    }
    if (activeValue == undefined) {
      activeValue = localStorage.getItem("SideBarActiveTab");;
      TabSetActiveStatus(activeValue);
    }
  }

  const ActiveTabBar = (value) => {
    localStorage.setItem("SideBarActiveTab", value);
    activeValue = value;
    TabSetActiveStatus(value)
  }


  const UserLogout = async () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      window.location.href = "/login";
    }
  }

  return (
    <>
      <hr className="my-4 dark:border-gray-600 md:min-w-full" />
      {/* Heading */}
      <p className="md:min-w-full text-gary-700 dark:text-gray-200 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
        Quick Links
      </p>
      {/* Navigation */}

      <ul className="md:flex-col md:min-w-full flex flex-col list-none">
        <li className="items-center" onClick={(e) => ActiveTabBar(1)}>
          <Link href="/dashboard">
            <div className={tabActiveStatus == 1 ? `flex py-2 text-sm font-bold bg-gray-200 p-1 rounded-2xl text-gray-700 dark:text-gray-800` : `flex font-normal text-sm py-2 text-gray-800 dark:text-gray-200`}><MdOutlineDashboard className="mr-2" size="20" /> Home</div>
          </Link>
        </li>
      </ul>


      <ul className="md:flex-col md:min-w-full flex flex-col list-none">

        <hr className="my-4 dark:border-gray-600 md:min-w-full" />
        <h6 className="md:min-w-full text-gray-700 dark:text-gray-200 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
          Branding
        </h6>

        <li className="items-center" onClick={(e) => ActiveTabBar(2)}>
          <Link href="/dashboard/branding/themes">
            <div className={tabActiveStatus == 2 ? `flex py-2 text-sm font-bold bg-gray-200 p-1 rounded-2xl text-gray-700 dark:text-gray-800` : `flex font-normal text-sm py-2 text-gray-800 dark:text-gray-200`}><MdOutlineDashboard className="mr-2" size="20" /> Themes</div>
          </Link>
        </li>

        <hr className="my-4 dark:border-gray-600 md:min-w-full" />
        <h6 className="md:min-w-full text-gray-700 dark:text-gray-200 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
          Builder
        </h6>

        <li className="items-center" onClick={(e) => ActiveTabBar(3)}>
          <Link href="/dashboard/builder/layouts">
            <div className={tabActiveStatus == 3 ? `flex py-2 text-sm font-bold bg-gray-200 p-1 rounded-2xl text-gray-700 dark:text-gray-800` : `flex font-normal text-sm py-2 text-gray-800 dark:text-gray-200`}><MdOutlineDashboard className="mr-2" size="20" /> Manage Layouts</div>
          </Link>
        </li>


        <hr className="my-4 dark:border-gray-600 md:min-w-full" />
        {/* Heading */}
        <h6 className="md:hidden text-gray-700 dark:text-gray-200 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
          Logout
        </h6>

        <li className="items-center" onClick={(e) => UserLogout()}>
            <div className={tabActiveStatus == 0 ? `flex py-2 mb-10 text-sm font-bold bg-gray-200 p-1 rounded-2xl text-gray-700 dark:text-gray-800` : `flex font-normal text-sm py-2 text-gray-800 dark:text-gray-200`}><MdOutlineLogout className="mr-2" size="20" /> Logout </div>
        </li>

      </ul>

    </>
  )
}

export default AdminSideBarMenu;