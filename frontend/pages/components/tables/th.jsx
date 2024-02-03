import React from "react";

const TableTH = ({Title}) => {
    return (
        <>
           <th className="whitespace-nowrap bg-layer-2 py-3 px-4 text-left font-semibold text-text">
              {Title}
            </th>
        </>
    )
}

export default TableTH;