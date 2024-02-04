import React, { useContext } from "react";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { ThemeContext } from "../context/context";

function TandC() {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("primaryColor");

  const {
    setFont,
    setPrimaryWeight,
    setSecondaryWeight,
    setParagraphWeight,
    primaryColor,
    setPrimaryColor,
    secondaryColor,
    setSecondaryColor,
    paragraphColor,
    setParagraphColor,
    backgroundColor,
    setBackgroundColor,
  } = useContext(ThemeContext);
  return (
    <>
      <div className=" bg-purple-100 w-80">
        <div className="text-white text-center bg-purple-900 h-10 flex items-center justify-center">
          TYPOGRAPHY
        </div>
        <div className=" flex items-center  p-1">
          <div className="text-sm">
            <div className="flex justify-between">
              <div className="my-auto">FONT</div>
              <select
                onChange={(e) => setFont(e.target.value)}
                class="bg-gray-50  mb-2 ml-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="font-sans" value="font-sans" selected>
                  Sans Serif
                </option>
                <option className="font-serif" value="font-serif">
                  Serif
                </option>
                <option className="font-mono" value="font-mono">
                  Monospace
                </option>
              </select>
            </div>
            <div className="flex justify-between">
              <div className="my-auto">PRIMARY WEIGHT</div>
              <select
                onChange={(e) => setPrimaryWeight(e.target.value)}
                class="bg-gray-50  mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="600">600</option>
                <option selected value="700">
                  700
                </option>
                <option value="800">800</option>
                <option value="900">900</option>
              </select>
            </div>
            <div className="flex justify-between">
              <div className="my-auto">SECONDARY WEIGHT</div>
              <select
                onChange={(e) => setSecondaryWeight(e.target.value)}
                class="bg-gray-50  border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option selected value="400">
                  400
                </option>
                <option value="500">500</option>
                <option value="600">600</option>
                <option value="700">700</option>
                <option value="800">800</option>
                <option value="900">900</option>
              </select>
            </div>
            <div className="flex justify-between">
              <div className="my-auto">PARAGRAPH WEIGHT</div>

              <select
                onChange={(e) => setParagraphWeight(e.target.value)}
                class="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="100">
                  100
                </option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="600">600</option>
                <option value="700">700</option>
                <option value="800">800</option>
                <option value="900">900</option>
              </select>
            </div>
            {showPicker && (
              <SketchPicker
                position="top"
                color={
                  selectedColor === "primaryColor"
                    ? primaryColor
                    : selectedColor === "secondaryColor"
                    ? secondaryColor
                    : selectedColor === "paragraphColor"
                    ? paragraphColor
                    : backgroundColor
                }
                className="absolute"
                onChangeComplete={(color) => {
                  selectedColor === "primaryColor"
                    ? setPrimaryColor(color.hex)
                    : selectedColor === "secondaryColor"
                    ? setSecondaryColor(color.hex)
                    : selectedColor === "paragraphColor"
                    ? setParagraphColor(color.hex)
                    : setBackgroundColor(color.hex);

                  setShowPicker(false);
                }}
              />
            )}
          </div>
        </div>
        <div className="text-white text-center bg-purple-900 h-10 flex items-center justify-center">
          COLOUR SCHEME
        </div>
        <div className=" h-64 flex items-center justify-center">
          <div className="text-sm text-right">
            <div
              className="mb-2 hover:cursor-pointer"
              onClick={() => {
                setShowPicker(true);
                setSelectedColor("primaryColor");
              }}
            >
              PRIMARY COLOUR
            </div>
            <div
              className="mb-2 hover:cursor-pointer"
              onClick={() => {
                setShowPicker(true);
                setSelectedColor("secondaryColor");
              }}
            >
              SECONDARY COLOUR
            </div>
            <div
              className="mb-2 hover:cursor-pointer"
              onClick={() => {
                setShowPicker(true);
                setSelectedColor("paragraphColor");
              }}
            >
              PARAGRAPH COLOUR
            </div>
            <div
              className="mb-2 hover:cursor-pointer"
              onClick={() => {
                setShowPicker(true);
                setSelectedColor("backgroundColor");
              }}
            >
              BACKGROUND COLOUR
            </div>
          </div>
          <div className="text-sm ml-5">
            <div
              className="w-5 h-5 mb-2"
              style={{ backgroundColor: primaryColor }}
            ></div>

            <div
              className="w-5 h-5  mb-2"
              style={{ backgroundColor: secondaryColor }}
            ></div>
            <div
              className="w-5 h-5  mb-2"
              style={{ backgroundColor: paragraphColor }}
            ></div>
            <div
              className="w-5 h-5  mb-2"
              style={{ backgroundColor: backgroundColor }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TandC;
