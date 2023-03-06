import React, {useContext} from 'react';
import {Box, Divider, Grid, Link, Stack, Typography} from "@mui/material";
import {variables} from "../../../assets/styled/variables";
import DataContext  from "../../../store/store";
import {DataContextType, INote} from "../../../store/types";


export const Sidebar: React.FC = () => {
    const {
        notes,
        theme,
        viewMain,
        enableViewMain,
        filter: f,
        activeNoteId,
        changeActiveNote
    } = useContext(DataContext) as DataContextType

    const filtredNotes = notes.filter(p => p.text.indexOf(f) > -1)


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
                    {filtredNotes.map((el: INote) => {
                        const activeColor = activeNoteId === el.id ? variables.selectColor : ''
                        const activeNoteHandler = () => {
                            changeActiveNote(el.id)

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
                                }}>{el.text.slice(0, 40)}</Typography>
                                <Stack direction={"row"} spacing={1}>
                                    <Typography sx={{fontWeight: 700}}> {el.createDate.slice(-5)} </Typography>
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
                        minHeight: '92vh',
                        py: 2,
                        display: viewMain ? 'none' : ''
                    }}
            >

                <Typography variant="h6" sx={{pl: 4, mb: 4}}> Сегодня </Typography>
                <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"}
                       width={'90%'} mx={"auto"}>
                    {filtredNotes.map((el: INote) => {
                        const activeNoteHandler = () => {
                            changeActiveNote(el.id)
                            enableViewMain()
                        }
                        const borderItem = activeNoteId === el.id ? `3px solid yellow` : `3px solid ${variables.activeColor}`
                        return <Stack
                            key={el.id}
                            onClick={activeNoteHandler}
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
                                p: 2,
                                overflow: 'hidden'
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
                                {el.text.slice(0, 10)}
                            </Typography>
                            <Typography variant={"h6"}
                                        sx={{textAlign: 'center'}}> {el.createDate.slice(-5)}
                            </Typography>
                        </Stack>
                    })}
                </Stack>
            </Grid>

    )
};

