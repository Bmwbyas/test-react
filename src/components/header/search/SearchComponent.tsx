import React, {useState} from 'react';
import {Box, FormControl, IconButton, styled, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {variables} from "../../../assets/styled/variables";

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
type SearchPropsType = {}
export const SearchComponent: React.FC<SearchPropsType> = ({}) => {
    const [viewSearch, setViewSearch] = useState(false)
    const viewMain = true

    return (
        <Box >
            {viewMain ?
                <>                    {viewSearch ?
                        <FormControl >
                            <Search
                                sx={{my: 2, mr: 2}}
                                size="small"
                                placeholder='Поиск'
                                onBlur={()=>setViewSearch(false)}
                                autoFocus
                                InputProps={{
                                    startAdornment: <SearchIcon color={"inherit"} sx={{color: variables.activeColor}}/>,
                                }}/>
                        </FormControl> :<IconButton onClick={() => setViewSearch(true)}>
                            <SearchIcon color={"inherit"} sx={{color: variables.activeColor}}/>
                        </IconButton>}
                </>
                :
                <FormControl>
                    <Search
                        sx={{my: 2, mr: 2}}
                        size="small"
                        placeholder='Поиск'
                        InputProps={{
                            startAdornment: <SearchIcon color={"inherit"} sx={{color: variables.activeColor}}/>,
                        }}/>
                </FormControl>
            }
        </Box>

    );
};

