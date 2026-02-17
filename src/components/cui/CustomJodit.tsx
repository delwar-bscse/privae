import { useState, useRef, useMemo, useCallback } from 'react';
import JoditEditor from 'jodit-react';

function CustomJodit() {
  const editor = useRef(null);
  const [content, setContent] = useState('<p>Type something...</p>');

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: 'Start typing...',
      buttons: [
        'bold',
        'italic',
        'underline',
        '|',
        'ul',
        'ol',
        '|',
        'font',
        'fontsize',
        'brush',
        // '|',
        // 'image',
        // 'link',
        '|',
        'align',
        'undo',
        'redo'
      ],
      height: 'calc(100vh - 230px)',
      uploader: {
        insertImageAsBase64URI: true
      }
    }),
    []
  );

  const handleBlur = useCallback((newContent: string) => {
    setContent(newContent);
  }, []);

  const handleChange = useCallback((newContent: string) => {
    // You can handle onChange here if needed
    console.log(newContent);
  }, []);

  const handleOnSave = () => {
    console.log(content);
  }

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <div className="flex justify-end mt-4">
        <button onClick={handleOnSave} className="inline-block w-100 px-10 py-2 bg-[#272727] hover:bg-[#272727]/90 text-white border border-gray-400 rounded transitionClr">Save</button>
      </div>
    </div>
  );
}

export default CustomJodit;
