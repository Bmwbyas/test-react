import React, {useState} from 'react';
import {Divider, Grid, Link, Stack, Typography} from "@mui/material";
import {variables} from "../../assets/styled/variables";
import {v1} from "uuid";

const menuItems = [{
    id: v1(),
    name: "blabla",
    createDate: '30.01.202020',
    text: 'tilitili tralbasdff'

},
    {
        id: v1(),
        name: "bbbb",
        createDate: '30.01.202022220',
        text: 'fdsffdssf trafdsfds lbasdff'

    },
    {
        id: v1(),
        name: "aaaa",
        createDate: '30.03.202020',
        text: 'Lorem  vfdvjsorkl; vlsdfv;lkfv '

    }]

export const Sidebar = () => {
    const [activeNote, setActiveNote] = useState<null | string>(null)

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
            <Stack spacing={2} width={'90%'} mx={"auto"}>
                {menuItems.map((el, index) => {
                    const activeColor = activeNote === el.id ? variables.selectColor : ''
                    const activeNoteHandler=()=>{
                        setActiveNote(el.id)
                    }

                    return <Link href="#" onClick={activeNoteHandler} color="inherit" underline="none"  >
                        <Stack
                            direction={"column"}
                            sx={{
                                bgcolor: activeColor,
                                borderRadius: 2,
                                p: 1,
                                borderBottom: `1px solid ${variables.selectColor}`
                            }}
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
                    </Link>
                })}
            </Stack>
        </Grid>
    )
};

