import React from 'react';
import {Box, FormControl, Grid, IconButton, Stack, styled, TextField} from "@mui/material";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchIcon from '@mui/icons-material/Search';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {variables} from "../../assets/styled/variables";


const Search = styled(TextField)({
    '& input': {

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

const Header = () => {
    return (
        <Grid container>
            <Grid xs={3} bgcolor={variables.secondBgColor}>
                <Stack sx={{height: '100%'}} direction="row"
                       justifyContent="space-between" alignItems="center">
                    <Box>
                        <IconButton>
                            <FormatListBulletedOutlinedIcon sx={{color: variables.activeColor}}/>
                        </IconButton>
                        <IconButton>
                            <GridViewOutlinedIcon sx={{color: variables.activeColor}}/>
                        </IconButton>
                    </Box>
                    <IconButton>
                        <DeleteForeverOutlinedIcon sx={{color: variables.activeColor}}/>
                    </IconButton>
                </Stack>
            </Grid>
            <Grid container bgcolor={variables.bgcolor} xs={9}>
                <Grid item xs={2}>

                    <IconButton sx={{height: '100%'}}>
                        <AddBoxIcon sx={{color: variables.activeColor}}/>
                    </IconButton>

                </Grid>
                <Grid item xs={10}>
                    <Stack direction="row" justifyContent="space-between"
                           alignItems="center">
                        <IconButton>
                            <TextFieldsIcon sx={{color: variables.activeColor}}/>
                        </IconButton>
                        <FormControl>
                            <Search
                                sx={{my: 2, mr: 2}}
                                size="small"
                                placeholder='Поиск'
                                InputProps={{
                                    startAdornment: <SearchIcon color={"inherit"} sx={{color: variables.activeColor}}/>,
                                }}/>
                        </FormControl>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Header;
