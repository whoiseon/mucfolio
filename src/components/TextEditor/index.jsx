import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {useMemo, useRef} from "react";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote"],
  [{ header: [1, 2, 3, false] }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: ["#D3D8DE", "#646B74", "#6841DB", "#E54980"] }, { background: [] }],
  [{ align: [] }],
];

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "video",
  "width",
];

const TextEditor = ({ value, onChange }) => {
  const QuillRef = useRef();

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
      },
    };
  }, [toolbarOptions]);

  return (
    <ReactQuill
      placeholder="스케줄을 기록해주세요"
      onChange={onChange}
      theme="snow"
      modules={modules}
      formats={formats}
      preserveWhitespace
    />
  );
};

export default TextEditor;
