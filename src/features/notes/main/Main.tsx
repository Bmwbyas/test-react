import React from 'react';
import {Grid, Stack, Typography} from "@mui/material";
import {MenuItemType} from "../Notes";
import {variables} from "../../../assets/styled/variables";

type MainType={
    menuItem:MenuItemType
}

export const Main:React.FC<MainType> = ({menuItem}) => {
    const {name,text,createDate}=menuItem
    return (
        <Grid item xs={9} sx={{backgroundColor:variables.mainColor, p:2}}>
            <Stack sx={{color:variables.activeColor}}>
                <Typography sx={{textAlign:'center'}}>{createDate}</Typography>
                <Typography variant={"h5"}  sx={{fontWeight: 700, color:'white'}}>{name}</Typography>
                <Typography>{text}</Typography>
            </Stack>
        </Grid>
    );
};

