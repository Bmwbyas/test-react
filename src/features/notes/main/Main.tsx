import React from 'react';
import {Grid, Stack, Typography} from "@mui/material";
import {MenuItemType} from "../Notes";
import {variables} from "../../../assets/styled/variables";
import {ThemeType} from "../../../App";

type MainType={
    menuItem:MenuItemType
    theme:ThemeType

}

export const Main:React.FC<MainType> = ({menuItem,theme}) => {
    const {name,text,createDate}=menuItem
    const currentTheme=theme==="list"?9:12
    return (

        <Grid item xs={currentTheme} sx={{backgroundColor:variables.mainColor, p:2, minHeight:"91vh"}}>
            <Stack sx={{color:variables.activeColor}}>
                <Typography sx={{textAlign:'center'}}>{createDate}</Typography>
                <Typography variant={"h5"}  sx={{fontWeight: 700, color:'white'}}>{name}</Typography>
                <Typography>{text}</Typography>
            </Stack>
        </Grid>
    );
};

