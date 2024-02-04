import React, { useState } from "react";
import Layout from "./Layout";
import TandC from "./TandC";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../context/context";

function body() {
  const [font, setFont] = useState("font-sans");
  const [PrimaryWeight, setPrimaryWeight] = useState(700);
  const [SecondaryWeight, setSecondaryWeight] = useState(400);
  const [ParagraphWeight, setParagraphWeight] = useState(100);
  const [primaryColor, setPrimaryColor] = useState("#D7263D");
  const [secondaryColor, setSecondaryColor] = useState("#F46036");
  const [paragraphColor, setParagraphColor] = useState("#2E294E");
  const [backgroundColor, setBackgroundColor] = useState("#1B998B");

  console.log(PrimaryWeight);
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <div className="w-14 bg-purple-800 flex-1">
            <div className="pt-10 w-8 pl-1 text-white">
              <FontAwesomeIcon icon={faHouseChimney} />
            </div>
            <div className="pt-10 w-8 pl-1 text-white">
              <FontAwesomeIcon icon={faGear} />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="w-48 bg-purple-100 h">
            <div className="text-white text-center bg-purple-900 h-10 flex items-center justify-center">
              LAYOUTS
            </div>
            <div className="flex justify-center">
              <div className="h-28 w-48 m-3 rounded-xl border-2 border-purple-800 text-center">
                Layout 1
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-28 w-48 m-3 rounded-xl border-2  text-center">
                Layout 2
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-28 w-48 m-3 rounded-xl border-2  text-center">
                Layout 3
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-28 w-48 mt-3 mx-3 rounded-xl border-2  text-center">
                Layout 4
              </div>
            </div>
          </div>
        </div>
        <ThemeContext.Provider
          value={{
            font,
            setFont,
            PrimaryWeight,
            setPrimaryWeight,
            SecondaryWeight,
            setSecondaryWeight,
            ParagraphWeight,
            setParagraphWeight,
            primaryColor,
            setPrimaryColor,
            secondaryColor,
            setSecondaryColor,
            paragraphColor,
            setParagraphColor,
            backgroundColor,
            setBackgroundColor,
          }}
        >
          <Layout />
          <TandC />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default body;
