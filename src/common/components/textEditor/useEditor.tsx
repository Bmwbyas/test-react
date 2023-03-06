import {ContentState, convertFromHTML, EditorState, RichUtils} from 'draft-js';
import * as React from 'react';
import {useContext, useEffect} from 'react';
import {BlockType, InlineStyle} from "./config";
import DataContext, {DataContextType} from "../../../store/store";


export type EditorApi = {
    state: EditorState;
    onChange: (state: EditorState) => void;
    toggleBlockType: (blockType: BlockType) => void;
    toggleInlineStyle: (inlineStyle: InlineStyle) => void;
    hasInlineStyle: (inlineStyle: InlineStyle) => boolean;
}

export const useEditor = (): EditorApi => {
    const{setValueInnerHtml,activeNoteId}=useContext(DataContext) as DataContextType


    const [state, setState] = React.useState(() => EditorState.createEmpty());

    useEffect(()=>{
        const sampleMarkup =setValueInnerHtml();
        const blocksFromHTML = convertFromHTML(sampleMarkup);
        const defaultState = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap,
        );
        setState(EditorState.createWithContent(defaultState))

    },[activeNoteId])

    const toggleBlockType = React.useCallback((blockType: BlockType) => {
        setState((currentState) =>
            RichUtils.toggleBlockType(currentState, blockType)
        );
    }, []);
    const toggleInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
        setState((currentState) => RichUtils.toggleInlineStyle(currentState, inlineStyle))
    }, []);

    const hasInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
        /* Получаем иммутабельный Set с ключами стилей */
        const currentStyle = state.getCurrentInlineStyle();
        /* Проверяем содержится ли там переданный стиль */
        return currentStyle.has(inlineStyle);
    }, [state]);
    return React.useMemo(() => ({
        state,
        onChange: setState,
        toggleBlockType,
        toggleInlineStyle,
        hasInlineStyle,
    }), [state])
}
