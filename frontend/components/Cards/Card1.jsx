import React from "react";

function Card1({ result }) {
  console.log(result[0]?.id);
  return (
    <div className="max-w-sm min-w-[30rem] bg-slate-200 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          Layout : {result[0]?.meta_data?.layout}
        </div>
        <div className="font-bold text-md mb-2">User : {result[0]?.user}</div>
        <div className="flex">
          <div className="flex-1 ">
            <div className="text-center border-b-black border-2 mb-2">
              Color
            </div>

            <ul className="text-sm">
              <li>
                Primary Color :{" "}
                {result[0]?.meta_data?.themes?.color?.primary_color}
              </li>{" "}
              <li>
                Secondary Color :{" "}
                {result[0]?.meta_data?.themes?.color?.seconday_color}
              </li>{" "}
              <li>
                Paragraph Color :{" "}
                {result[0]?.meta_data?.themes?.color?.paragraph_color}
              </li>{" "}
              <li>
                Background Color :{" "}
                {result[0]?.meta_data?.themes?.color?.background_color}
              </li>
            </ul>
          </div>

          <div className="flex-1 ">
            <div className="text-center border-b-black border-2 mb-2">
              Typography
            </div>
            <ul className="text-sm">
              <li>Font : {result[0]?.meta_data?.themes?.typography?.font}</li>{" "}
              <li>
                Primary Weight :{" "}
                {result[0]?.meta_data?.themes?.typography?.primary_w}
              </li>{" "}
              <li>
                Secondary Weight :{" "}
                {result[0]?.meta_data?.themes?.typography?.seconday_w}
              </li>{" "}
              <li>
                Paragraph Weight :{" "}
                {result[0]?.meta_data?.themes?.typography?.paragraph_w}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
