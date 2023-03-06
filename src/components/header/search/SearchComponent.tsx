import React, {ChangeEvent, useContext, useState} from 'react';
import {Box, FormControl, IconButton, styled, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {variables} from "../../../assets/styled/variables";
import DataContext from "../../../store/store";
import {DataContextType} from "../../../store/types";

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

export const SearchComponent: React.FC = () => {
    const {viewMain, filter, searchNotes} = useContext(DataContext) as DataContextType
    const [viewSearch, setViewSearch] = useState(false)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        searchNotes(event.currentTarget.value)
    }

    return (
        <Box>
            {viewMain ?
                <>
                    {viewSearch ?

                        <Search
                            sx={{my: 2, mr: 2}}
                            value={filter}
                            size="small"
                            placeholder='Поиск'
                            onChange={onChangeHandler}
                            onBlur={() => setViewSearch(false)}
                            autoFocus
                            InputProps={{
                                startAdornment: <SearchIcon color={"inherit"} sx={{color: variables.activeColor}}/>,
                            }}/>
                        : <IconButton onClick={() => setViewSearch(true)}>
                            <SearchIcon color={"inherit"} sx={{color: variables.activeColor}}/>
                        </IconButton>}
                </>
                :
                <FormControl>
                    <Search
                        sx={{my: 2, mr: 2}}
                        size="small"
                        placeholder='Поиск'
                        value={filter}
                        onChange={onChangeHandler}
                        InputProps={{
                            startAdornment: <SearchIcon color={"inherit"} sx={{color: variables.activeColor}}/>,
                        }}/>
                </FormControl>
            }
        </Box>

    );
};

