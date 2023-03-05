import React, {ChangeEvent, ChangeEventHandler,MouseEvent, KeyboardEvent, useContext, useState} from 'react';
import {Grid, Stack, styled, TextField, Typography} from "@mui/material";
import {variables} from "../../../assets/styled/variables";
import DataContext, {DataContextType} from "../../../store/store";

const TextArea = styled(TextField)({
    '& textarea': {

        color: variables.activeColor,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: variables.activeColor,
            color: variables.activeColor,
        },
        '&:hover fieldset': {
            borderColor: variables.activeColor,
        },
        '&.Mui-focused fieldset': {
            borderColor: variables.activeColor,
        },
    },
});

export const Main: React.FC = () => {
    const {note, theme, editMode, disableEditMode,activeEditMode} = useContext(DataContext) as DataContextType
    const {name, text, createDate} = note
    const [value, setValue] = useState(text)


    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key == 'Enter'&&'Control' ){
            disableEditMode(value)
        }
        // return
    }
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setValue(e.currentTarget.value)
    }
    const activeModeHandler=(e:MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation()
      activeEditMode()
    }
    const onBlurHandler=(e:any)=>{
        disableEditMode(value)
    }
    const currentTheme = theme === "list" ? 9 : 12
    return (
        <>
        {editMode
            ? <Grid item xs={currentTheme}
                     sx={{backgroundColor: variables.mainColor, p: 2, minHeight: "91vh"}}
            >
                    <TextArea minRows={30} fullWidth multiline autoFocus onKeyDown={onKeyDownHandler}
                        onBlur={onBlurHandler}
                       onChange={onChangeHandler }/>

            </Grid>
           : <Grid item xs={currentTheme}
                  sx={{backgroundColor: variables.mainColor, p: 2, minHeight: "91vh"}}
                  onClick={activeModeHandler}
            >
                <Stack sx={{color: variables.activeColor}} >
                    <Typography sx={{textAlign: 'center'}}>{createDate}</Typography>
                    <Typography variant={"h5"} sx={{fontWeight: 700, color: 'white'}}>{name}</Typography>
                    <Typography>{text}</Typography>

                </Stack>
            </Grid>
}
</>

    );
};

