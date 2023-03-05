import React, {useContext} from 'react';
import {Box, Grid, IconButton, Stack} from "@mui/material";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {variables} from "../../assets/styled/variables";
import {SearchComponent} from "./search/SearchComponent";
import DataContext, {DataContextType} from "../../store/store";
import {BasicModal} from "../../common/components/modal/Modal";

const Header: React.FC = () => {
    const {
        theme,
        setThemeList,
        setThemeTable,
        viewMain,
        disableViewMain,
        deleteNote,
        activeNoteId
    } = useContext(DataContext) as DataContextType
    console.log(theme)
    const tableTheme = theme === "table" ? {borderRight: `1px solid ${variables.activeColor}`} : ""


    return (<>
            {
                <Grid container sx={{minHeight: 72}}>
                    <Grid item xs={viewMain ? 7 : 3} bgcolor={variables.secondBgColor}>
                        <Stack sx={{height: '100%', ...tableTheme}} direction="row"
                               justifyContent="space-between" alignItems="center">
                            <Box>
                                <IconButton onClick={setThemeList} disabled={theme === 'list' || viewMain}>
                                    <FormatListBulletedOutlinedIcon
                                        sx={{fontSize: '30px', color: variables.activeColor}}/>
                                </IconButton>
                                <IconButton onClick={setThemeTable} disabled={theme === 'table' || viewMain}>
                                    <GridViewOutlinedIcon sx={{fontSize: '30px', color: variables.activeColor}}/>
                                </IconButton>
                                {theme === "table" ?
                                    <IconButton onClick={disableViewMain} disabled={!viewMain}>
                                        <ArrowBackIosNewIcon sx={{fontSize: '30px', color: variables.activeColor}}/>
                                    </IconButton>
                                    : ""}
                            </Box>
                            <BasicModal text={'Do you really want to delete this post?'} action={deleteNote} disabledButton={activeNoteId===null}>
                                <DeleteForeverOutlinedIcon sx={{fontSize: '30px', color: variables.activeColor}}/>
                            </BasicModal>
                        </Stack>

                    </Grid>

                    <Grid item container
                          bgcolor={theme === "list" ? variables.bgcolor : variables.secondBgColor}
                          xs={viewMain ? 5 : 9}>
                        <Grid item xs={2}>

                            <IconButton sx={{height: '100%'}}>
                                <DriveFileRenameOutlineOutlinedIcon
                                    sx={{fontSize: '30px', color: variables.activeColor}}/>
                            </IconButton>

                        </Grid>
                        <Grid item xs={10}>
                            <Stack direction="row" justifyContent="space-between"
                                   alignItems="center" sx={{height: '100%'}}>
                                <IconButton>
                                    <TextFieldsIcon sx={{fontSize: '30px', color: variables.activeColor}}/>
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
