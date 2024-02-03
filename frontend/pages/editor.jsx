import React, { useState, useEffect } from "react";
import GrapeJsEditor from './components/grape-js';


const TemplateEditor = () => {

    const handleSave = (updatedComponents) => {
        console.log('Updated components:', updatedComponents);
        let json = localStorage.getItem("gjsProject");
        console.log(json);
    };

    return (
        <>
            <button className="my-5 w-20 p-2 cursor-pointer">Publish</button>
            <GrapeJsEditor onSave={handleSave} components={[]} />
        </>
    )
}

export default TemplateEditor;