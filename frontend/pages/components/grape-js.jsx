import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

const GrapeJsEditor = ({ onSave, components }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      allowScripts: 1,
      components,
      storageManager: {
        id: 'gjs-', 
        autosave: true, 
        type: 'local', 
      },
      styleManager: {
        clearProperties: 1,
      },
   
      // Add more configuration options as needed
    });

    // Event listener for saving the component
    editor.on('storage:end', () => {
      const updatedComponents = editor.getComponents();
      const html = editor.getHtml();
      const css = editor.getCss();
      onSave(html, css);
    });

    editorRef.current = editor;

    return () => {
      editor.destroy();
    };
  }, [onSave, components]);

  return <div id="gjs" />;
};

export default GrapeJsEditor;
