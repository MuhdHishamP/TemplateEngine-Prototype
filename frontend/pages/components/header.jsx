import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  MenuAlt1Icon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <nav className="relative z-20 flex shrink-0 items-center shadow-md space-x-2 bg-layer-2 py-3 px-4 sm:px-6">

    <a href="#">
      {/* Logo */}
      <div className="h-7 text-heading font-semibold">
       Logo Here
      </div>
    </a>
    <div className="flex-1" />
    <div className="flex items-center space-x-3">
      
    
      <Menu as="div" className="relative">
        <Menu.Button type="button">
          {/* <img
            src="/assets/avatars/nicholas-turner.png"
            alt="avatar"
            className="inline-block h-8 w-8 rounded-full"
          /> */}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-layer-3 py-3 shadow-xl focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                >
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                >
                  Settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  </nav>
  );
}
