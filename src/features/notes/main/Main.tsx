import React, {useContext} from 'react';
import {Grid, Stack, Typography} from "@mui/material";
import {variables} from "../../../assets/styled/variables";
import DataContext, {DataContextType} from "../../../store/store";


export const Main: React.FC = () => {
    const {note, theme} = useContext(DataContext) as DataContextType

    const {name, text, createDate} = note
    const currentTheme = theme === "list" ? 9 : 12
    return (

        <Grid item xs={currentTheme} sx={{backgroundColor: variables.mainColor, p: 2, minHeight: "91vh"}}>
            <Stack sx={{color: variables.activeColor}}>
                <Typography sx={{textAlign: 'center'}}>{createDate}</Typography>
                <Typography variant={"h5"} sx={{fontWeight: 700, color: 'white'}}>{name}</Typography>
                <Typography>{text}</Typography>
            </Stack>
        </Grid>
    );
};

