import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

function Builder() {
  return (
    <>
      <div class="flex flex-col h-screen">
        <Header />
        <Body />
      </div>
    </>
  );
}

export default Builder;
