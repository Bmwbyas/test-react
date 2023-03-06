import React from 'react';
import {Grid} from "@mui/material";
import {Sidebar} from "./sideabar/Sidebar";
import {Main} from "./main/Main";

const Notes:React.FC = () => {

    return (
        <Grid container>
            <Sidebar  />
            <Main />
        </Grid>
    );
};

export default Notes;
