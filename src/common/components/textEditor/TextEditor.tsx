import * as React from 'react';
import {useContext, useEffect, useRef} from 'react';
import {Editor} from 'draft-js';
import {useEditorApi} from './context';
import cn from 'classnames';
import './TextEditor.scss';
import {BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP} from './config';
import DataContext, {DataContextType} from "../../../store/store";
import {saveInLocalStorage} from "../../../localstorage/localStorage";

export type TextEditorProps = {
    className?: string;
}

const TextEditor: React.FC<TextEditorProps> = ({className}) => {
    const {onChange, state} = useEditorApi();
    const {setNoteHandler, notes} = useContext(DataContext) as DataContextType
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
        console.log('sdasasdas')
        saveInLocalStorage(notes)
    },[state])

    const getDataEditor = () => {
        let text = ref.current?.innerText
        let innerHtml = ref.current?.innerHTML
        if (text === undefined || innerHtml === undefined) {
            text = ''
            innerHtml = ''
        }
        setNoteHandler(text, innerHtml)
    }
    return (
        <div ref={ref} className={cn("text-editor", className)}>
            <Editor
                placeholder="Введите ваш текст"
                editorState={state}
                onChange={state => {
                    onChange(state)
                    getDataEditor()
                }}
                blockRenderMap={BLOCK_RENDER_MAP}
                customStyleMap={CUSTOM_STYLE_MAP}
            />
        </div>
    );
}

export default TextEditor;
