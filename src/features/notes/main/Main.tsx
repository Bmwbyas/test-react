import React, {useContext} from 'react';
import {Grid, Typography} from "@mui/material";
import {variables} from "../../../assets/styled/variables";
import DataContext, {DataContextType} from "../../../store/store";
import TextEditor from "../../../common/components/textEditor/TextEditor";
import ToolPanel from "../../../common/components/toolPanel/ToolPanel";
import {TextEditorProvider} from "../../../common/components/textEditor/context";

export const Main: React.FC = () => {
    const {
        theme,
        setDateNote,
        viewMain,
        activeNoteId
    } = useContext(DataContext) as DataContextType
    const createDate = setDateNote()


    const currentTheme = theme === "list" ? 9 : 12
    const viewMainTable = theme === "table" && viewMain ? '' : 'none'
    return (
        <>
            {theme === "list"
                ? <Grid
                    item
                    xs={currentTheme}
                    sx={{
                        backgroundColor: variables.mainColor,
                        p: 0, m: 0, minHeight: "91vh",
                    }}

                >
                    <Typography
                        sx={{
                            color: variables.activeColor,
                            textAlign: 'center',
                            ml: 4, mt: 6
                        }}
                    >
                        {createDate}
                    </Typography>
                    {activeNoteId && <TextEditorProvider>
                        <ToolPanel/>
                        <TextEditor/>
                    </TextEditorProvider>}

                </Grid>
                : <Grid
                    item
                    xs={currentTheme}
                    sx={{
                        backgroundColor: variables.mainColor,
                        p: 0, m: 0, minHeight: "91vh",
                        display: viewMainTable
                    }}
                >
                    <TextEditorProvider>
                        <ToolPanel/>
                        <TextEditor/>
                    </TextEditorProvider>
                </Grid>
            }
        </>

    );
};

