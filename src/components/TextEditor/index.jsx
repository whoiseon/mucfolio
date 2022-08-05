import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import draftToHtml from 'draftjs-to-html';
import {useEffect} from "react";
import {Toolbar} from "./styles";

const TextEditor = ({ editorState, setEditorState, content, setContent }) => {
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  useEffect(() => {
    setContent(editorToHtml);
  }, [editorToHtml]);

  const handleToggleClick = (e, inlineStyle) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const handleBlockClick = (e, blockType) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <div>
      <Toolbar>
        <button type="button" onMouseDown={(e) => handleBlockClick(e, "header-one")}>h1</button>
        <button type="button" onMouseDown={(e) => handleBlockClick(e, "header-two")}>h2</button>
        <button type="button" onMouseDown={(e) => handleBlockClick(e, "header-three")}>h3</button>
        <button type="button" onMouseDown={(e) => handleBlockClick(e, "unstyled")}>normal</button>
        <button type="button" onMouseDown={(e) => handleToggleClick(e, "BOLD")}>bold</button>
        <button type="button" onMouseDown={(e) => handleToggleClick(e, "ITALIC")}>italic</button>
        <button type="button" onMouseDown={(e) => handleToggleClick(e, "STRIKETHROUGH")}>strikethrough</button>
        <button type="button" onMouseDown={(e) => handleBlockClick(e, "ordered-list-item")}>ol</button>
        <button type="button" onMouseDown={(e) => handleBlockClick(e, "unordered-list-item")}>ul</button>
      </Toolbar>
      <Editor
        placeholder="무슨 일을 하실건가요?"
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
};

export default TextEditor;
