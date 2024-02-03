import React from "react";

const Publish = ({OnFunc}) => {

    return (
        <>
            <button type="button"
                onClick={() => OnFunc()}
                className="inline-flex mb-5 items-center justify-center w-auto px-3 py-2 space-x-2 text-xs font-medium text-white transition bg-gray-500 border hover:opacity-80">
                <span className="text-sm">Publish</span>
            </button>
        </>
    )
}

export default Publish;