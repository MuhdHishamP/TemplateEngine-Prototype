import React from "react";

function Header() {
  return (
    <>
      <nav className="bg-white py-4 px-6 flex items-center justify-between border-b border-gray-200   w-full">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl">Site</h1>
          <span className="text-2xl ml-2">builder</span>
        </div>
        <div className="flex">
          <img
            src="/pngtree-laptop-icon-png-image_1753317.jpg"
            className="w-12 h-12 border-2 rounded-md border-purple-800"
          />
          <img src="/319.png" className="w-5 h-6 mt-2.5 ml-2 " />
          <img
            src="/mobile-phone-icon.webp"
            className="w-2.5 h-5 mt-3.5 ml-3 "
          />
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <div className="mt-2">
              <a href="#" className="hover:text-blue-500 underline">
                save as draft
              </a>
            </div>
          </li>
          <li>
            <button
              className="
        inline-flex items-center px-3 py-1 bg-purple-800 text-white font-bold rounded-full cursor-pointer
      "
            >
              Publish
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
