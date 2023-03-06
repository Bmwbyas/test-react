import * as React from 'react';
import {MouseEvent} from 'react';
import './ToolPanel.scss';
import cn from "classnames";
import {InlineStyle} from "../textEditor/config";
import {useEditorApi} from "../textEditor/context";
import Button from "@mui/material/Button";

const INLINE_STYLES_CODES = Object.values(InlineStyle);

const ToolPanel:React.FC = ( ) => {


    const { toggleInlineStyle} = useEditorApi();

    return (
        <div  className={cn('tool-panel')}>
            {INLINE_STYLES_CODES.map((code) => {
                const onMouseDown = (e:MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    toggleInlineStyle(code);
                };

                return (
                    <Button key={code} onMouseDown={onMouseDown}>
                        {code}
                    </Button>
                    // <button
                    //     key={code}
                    //     className={cn(
                    //         "tool-panel__item",
                    //         hasInlineStyle(code) && "tool-panel__item_active"
                    //     )}
                    //     onMouseDown={onMouseDown}
                    // >
                    //     {code}
                    // </button>
                );
            })}
        </div>
    );
}

export default ToolPanel;
