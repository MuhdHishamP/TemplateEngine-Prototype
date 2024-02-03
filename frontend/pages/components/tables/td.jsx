import React from "react";

const TableTD = ({Title}) => {

    return (

        <>
            <td
                className={`bg-layer-3 whitespace-nowrap py-3 px-4 text-heading`} >
                {Title}
            </td>
        </>
    )
}

export default TableTD;