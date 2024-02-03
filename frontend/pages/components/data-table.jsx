import React from "react";
import TableTD from "./tables/td"
import TableTH from "./tables/th"
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const DataTable = ({ businessData }) => {
    
  return (
    <div className="h-full w-full overflow-x-auto rounded-xl bg-layer-2 px-11 py-6 scrollbar bg-[#fafafa] p-2 my-10">
      <table className="w-full">
        <thead className="text-xs font-semibold uppercase text-text">
          <tr>
            <TableTH Title="Name" />
            <TableTH Title="Number" />
            <TableTH Title="Action" />
          </tr>
        </thead>
        <tbody className="text-sm font-medium">
          {businessData?.map((data, i) => {
            return (
              <tr key={i}>
                <TableTD Title={data?.name} />
                <TableTD Title={data?.number} />
                <td
                  className={`whitespace-nowrap py-0 px-4 text-heading`}  >
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border-none 
                        border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 
                        hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 
                        focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 
                        disabled:hover:bg-transparent disabled:hover:text-text"  >
                    <FiEdit className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border-none 
                        border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 
                        hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 
                        focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 
                        disabled:hover:bg-transparent disabled:hover:text-text"  >
                    <MdDeleteOutline className="h-4 w-4" />
                  </button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
