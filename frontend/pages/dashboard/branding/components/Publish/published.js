import React from "react";

const Published = () => {

    return (
        <>
            <button type="button"
                className="inline-flex mb-5 items-center justify-center w-auto px-3 py-2 space-x-2 text-xs font-medium text-white transition bg-green-500 border appearance-none cursor-pointer select-none hover:border-green-500 hover:bg-green-500 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-green-300 disabled:pointer-events-none disabled:opacity-75">
                <span className="text-sm">Published</span>
            </button>
        </>
    )
}

export default Published;