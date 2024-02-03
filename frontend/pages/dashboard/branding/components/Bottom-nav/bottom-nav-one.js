import React, { useState, useEffect, } from 'react';
import { FiTwitter, FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlinePhone, HiOutlineCollection,
  HiOutlineNewspaper, HiOutlineHome, HiOutlineSearch
} from "react-icons/hi";

const BottomNavOne = ({ navBarOneData }) => {
  const [navBarId, NavBarId] = useState(1);
  const [storeName, StoreName] = useState([]);
  useEffect(() => {
    let store = localStorage.getItem('StoreName');
    StoreName(store)
  }, []);


  const isClassName = `inline-flex flex-col text-sm items-center justify-center px-5 group hover:opacity-70`;
  const isNotClassName = "inline-flex flex-col text-sm items-center justify-center px-5 group hover:opacity-70";

  return (
    <>
      <div className="w-full h-16"
        style={{
          "backgroundColor": navBarOneData ? navBarOneData[0]?.backgroundColor : null,
          "color": navBarOneData? navBarOneData[0]?.titleColor : null,
        }} >
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <button onClick={() => { NavBarId(1) }}
            type="button" className={navBarId === 1 ? isClassName : isNotClassName}
            style={{
              "backgroundColor": navBarId === 1 ? navBarOneData ?  navBarOneData[0]?.selectedColor : null : "",
            }} >
            <HiOutlineHome size="30"
              style={{
                "color": navBarOneData ?  navBarOneData[0]?.iconColor : null,
              }} />
            <span className={navBarId === 1 ? isClassName : isNotClassName} >Home</span>
          </button>
          <button onClick={() => NavBarId(2)}
            type="button" className={navBarId === 2 ? isClassName : isNotClassName}
            style={{
              "backgroundColor": navBarId === 2 ?  navBarOneData ? navBarOneData[0]?.selectedColor : null : "",
            }}>
            <HiOutlineSearch size="30"
              style={{
                "color": navBarOneData ? navBarOneData[0]?.iconColor : null,
              }} />
            <span className={navBarId === 1 ? isClassName : isNotClassName}>Search</span>
          </button>
          <button onClick={() => NavBarId(3)}
            type="button" className={navBarId === 3 ? isClassName : isNotClassName}
            style={{
              "backgroundColor": navBarId === 3 ? navBarOneData ? navBarOneData[0]?.selectedColor : null : "",
            }}>
            <HiOutlineNewspaper size="30"
              style={{
                "color": navBarOneData ? navBarOneData[0]?.iconColor :null,
              }} />
            <span className={navBarId === 1 ? isClassName : isNotClassName}>Blogs</span>
          </button>
          <button onClick={() => NavBarId(4)}
            type="button" className={navBarId === 4 ? isClassName : isNotClassName}
            style={{
              "backgroundColor": navBarId === 4 ? navBarOneData ? navBarOneData[0]?.selectedColor : null : "",
            }}>
            <HiOutlinePhone size="30"
              style={{
                "color": navBarOneData ? navBarOneData[0]?.iconColor : null,
              }} />
            <span className={navBarId === 1 ? isClassName : isNotClassName}>Contact</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default BottomNavOne;