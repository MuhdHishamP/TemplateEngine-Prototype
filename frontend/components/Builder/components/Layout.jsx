import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/context";

function Layout() {
  const {
    font,
    PrimaryWeight,
    SecondaryWeight,
    ParagraphWeight,
    primaryColor,
    secondaryColor,
    paragraphColor,
    backgroundColor,
  } = useContext(ThemeContext);
  return (
    <>
      <div
        className="w-[47rem] bg-white h-[88vh] text-center flex justify-center items-center "
        style={{ backgroundColor: backgroundColor }}
      >
        <div className={`${font} p-3 `}>
          <div style={{ fontWeight: PrimaryWeight, color: primaryColor }}>
            Welcome to my app
          </div>
          <div style={{ fontWeight: SecondaryWeight, color: secondaryColor }}>
            You have chosen Layout 1
          </div>
          <div style={{ fontWeight: ParagraphWeight, color: paragraphColor }}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
