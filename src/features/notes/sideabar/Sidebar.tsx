import React, {useState} from 'react';
import {Divider, Grid, Link, Stack, Typography} from "@mui/material";
import {variables} from "../../../assets/styled/variables";
import {MenuItemType} from "../Notes";



type SidebarType={
    menuItems:MenuItemType[]
}
export const Sidebar:React.FC<SidebarType> = ({menuItems}) => {
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
                {menuItems.map((el:any) => {
                    const activeColor = activeNote === el.id ? variables.selectColor : ''
                    const activeNoteHandler=()=>{
                        setActiveNote(el.id)
                    }

                    return <Link key={el.id} href="#" onClick={activeNoteHandler} color="inherit" underline="none"  >
                        <Stack
                            direction={"column"}
                            sx={{
                                bgcolor: activeColor,
                                borderRadius: 2,
                                p: 1,
                                borderBottom: `1px solid ${variables.selectColor}`
                            }}

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

