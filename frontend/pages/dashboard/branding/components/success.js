import React from "react";

const SuccessAlert = ({ Title, OnFunc }) => {

    return (
        <>
            <div className="bg-green-100 p-3 mb-4 w-full ">
                <div className="flex justify-between">
                    <div className="flex space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-green-500 h-4 w-4">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" /></svg>
                        <div class="flex-1 leading-tight text-sm text-green-700 font-medium">{Title}</div>
                    </div>
                    <svg onClick={(e) => OnFunc(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-green-600 h-3 w-3">
                        <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>
                </div>
            </div>

        </>
    )
}

export default SuccessAlert;