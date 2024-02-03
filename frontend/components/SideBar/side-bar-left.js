

import { useState, useEffect } from "react";

export default function SideBarLeft() {
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

   


    return (
        <>
            <div className='hidden md:block sticky top-20 rounded-2xl w-full max-w-xs bg-[#fafafa] dark:bg-[#2a2a2a] py-7 px-5 flex-1' style={{ height: "calc(100vh - 0.5rem)" }} aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 rounded-2xl shadow-md hover:shadow-md dark:hover:shadow-md dark:shadow-gray-500 bg-white hover:bg-yellow-100 dark:hover:bg-[#484848]  dark:bg-[#1a1a1a]">
                    <ul className="space-y-2">
                        <br />
                        hi 
                    </ul>
                </div>
            </div>

        </>

    )
}
