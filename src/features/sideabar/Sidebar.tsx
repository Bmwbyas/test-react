import React from 'react';
import {
    Box,
    Button,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Stack, Typography
} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {variables} from "../../assets/styled/variables";

const menuItems = [{
    name: "blabla",
    createDate: '30.01.202020',
    text: 'tilitili tralbasdff'

},
    {
        name: "bbbb",
        createDate: '30.01.202022220',
        text: 'fdsffdssf trafdsfds lbasdff'

    },
    {
        name: "aaaa",
        createDate: '30.03.202020',
        text: 'Lorem  vfdvjsorkl; vlsdfv;lkfv '

    }]

export const Sidebar = () => {
    return (
        <Grid item xs={3}
              sx={{
                  backgroundColor: variables.secondBgColor,
                  color: variables.activeColor,
                  height: '90vh',
                  py: 2
              }}
        >
            <Typography variant="h6" sx={{pl: 4}}> Сегодня </Typography>
            <Divider sx={{bgcolor: variables.activeColor, mt: 1, mb: 2}}/>
            <Stack  spacing={2} width={'90%'} mx={"auto"}>
                {menuItems.map((el, index) => {
                    return <Stack
                        direction={"column"}
                        sx={{bgcolor: variables.selectColor, borderRadius: 2, p: 1,}}
                        key={index}
                    >
                        <Typography sx={{

                            width: '100%',
                            fontWeight: 700,
                            color: "white"
                        }}>{el.name}</Typography>
                        <Stack direction={"row"} spacing={1}>
                            <Typography sx={{fontWeight: 700}}> {el.createDate.slice(0, 5)} </Typography>
                            <Typography>{el.text}</Typography>
                        </Stack>
                        
                    </Stack>
                })}
            </Stack>
        </Grid>
    )
};

