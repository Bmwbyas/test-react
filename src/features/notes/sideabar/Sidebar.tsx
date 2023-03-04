import React, {useState} from 'react';
import {Box, Divider, Grid, Link, Stack, Typography} from "@mui/material";
import {variables} from "../../../assets/styled/variables";
import {MenuItemType} from "../Notes";
import {ThemeType} from "../../../App";


type SidebarType = {
    menuItems: MenuItemType[]
    theme: ThemeType
}
export const Sidebar: React.FC<SidebarType> = ({menuItems, theme}) => {
    const [activeNote, setActiveNote] = useState<null | string>(null)
    const viewTableMenu=false
    return (
        theme === "list" ?
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
                    {menuItems.map((el: any) => {
                        const activeColor = activeNote === el.id ? variables.selectColor : ''
                        const activeNoteHandler = () => {
                            setActiveNote(el.id)
                        }
                        return <Link key={el.id} href="#" onClick={activeNoteHandler} color="inherit" underline="none">
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
            : <Grid item xs={12}
                    sx={{
                        backgroundColor: variables.secondBgColor,
                        color: variables.activeColor,
                        height: '92vh',
                        py: 2,
                        display:viewTableMenu?'':'none'
                    }}
            >

                <Typography variant="h6" sx={{pl: 4, mb: 4}}> Сегодня </Typography>
                <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"}
                       width={'90%'} mx={"auto"}>
                    {menuItems.map((el: any) => {
                        const activeNoteHandler = () => {
                            setActiveNote(el.id)
                        }
                        const borderItem = activeNote === el.id ? `3px solid yellow` : `3px solid ${variables.activeColor}`
                        return <Link key={el.id} href="#" onClick={activeNoteHandler} color="inherit" underline="none">
                            <Stack
                                direction={"column"}
                                sx={{
                                    borderRadius: 2,
                                    p: 1,
                                }}

                            >
                                <Box sx={{
                                    width: 300,
                                    height: 200,
                                    borderRadius: 2,
                                    border: borderItem,
                                    p: 2
                                }}>
                                    <Typography variant={'h6'} color={"white"}>{el.text}</Typography>

                                </Box>
                                <Typography
                                    variant={"h5"}
                                    sx={{
                                        width: '100%',

                                        color: "white",
                                        textAlign: 'center'
                                    }}>
                                    {el.name}
                                </Typography>

                                <Typography variant={"h6"}
                                            sx={{textAlign: 'center'}}> {el.createDate.slice(0, 5)} </Typography>
                            </Stack>
                        </Link>
                    })}
                </Stack>
            </Grid>

    )
};

