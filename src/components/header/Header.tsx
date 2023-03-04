import React from 'react';
import {Box, Grid, IconButton, Stack} from "@mui/material";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {variables} from "../../assets/styled/variables";
import {ThemeType} from "../../App";
import {SearchComponent} from "./search/SearchComponent";


type HeaderTypes = {
    theme: ThemeType
    setListTheme: () => void
    setTableTheme: () => void

}

const Header: React.FC<HeaderTypes> = ({theme, setListTheme, setTableTheme}) => {
    const tableTheme = theme === "table" ? {borderRight: `1px solid ${variables.activeColor}`} : ""
    const viewMain = false
    const backtoMenu=()=>{

    }
    return (<>
            {
                <Grid container sx={{minHeight: 72}}>
                    <Grid item xs={viewMain ? 7 : 3} bgcolor={variables.secondBgColor}>
                        <Stack sx={{height: '100%', ...tableTheme}} direction="row"
                               justifyContent="space-between" alignItems="center">
                            <Box>
                                <IconButton onClick={setListTheme} disabled={theme === 'list' || viewMain}>
                                    <FormatListBulletedOutlinedIcon
                                        sx={{fontSize: '30px', color: variables.activeColor}}/>
                                </IconButton>
                                <IconButton onClick={setTableTheme} disabled={theme === 'table' || viewMain}>
                                    <GridViewOutlinedIcon sx={{fontSize: '30px', color: variables.activeColor}}/>
                                </IconButton>
                                {theme === "table" ?
                                    <IconButton onClick={backtoMenu} disabled={theme === 'table' || !viewMain}>
                                        <ArrowBackIosNewIcon sx={{fontSize: '30px', color: variables.activeColor}}/>
                                    </IconButton>
                                    : ""}
                            </Box>
                            <IconButton>
                                <DeleteForeverOutlinedIcon sx={{fontSize: '30px', color: variables.activeColor}}/>
                            </IconButton>
                        </Stack>

                    </Grid>

                    <Grid item container
                          bgcolor={theme === "list" ? variables.bgcolor : variables.secondBgColor}
                          xs={viewMain ? 5 : 9}>
                        <Grid item xs={2}>

                            <IconButton sx={{height: '100%'}}>
                                <AddBoxIcon sx={{color: variables.activeColor}}/>
                            </IconButton>

                        </Grid>
                        <Grid item xs={10}>
                            <Stack direction="row" justifyContent="space-between"
                                   alignItems="center" sx={{height: '100%'}}>
                                <IconButton>
                                    <TextFieldsIcon sx={{color: variables.activeColor}}/>
                                </IconButton>
                                <SearchComponent/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

            }
        </>
    )
        ;
};

export default Header;
