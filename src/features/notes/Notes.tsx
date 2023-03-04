import React from 'react';
import {Grid} from "@mui/material";
import {Sidebar} from "./sideabar/Sidebar";
import {Main} from "./main/Main";
import {v1} from "uuid";
import {ThemeType} from "../../App";

export type MenuItemType={
    id: string
    name: string
    createDate: string
    text: string
}
const menuItems:MenuItemType[] = [{
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

    }, {
        id: v1(),
        name: "aaaa",
        createDate: '30.03.202020',
        text: 'Lorem  vfdvjsorkl; vlsdfv;lkfv '

    },
    {
        id: v1(),
        name: "aaaa",
        createDate: '30.03.202020',
        text: 'Lorem  vfdvjsorkl; vlsdfv;lkfv '

    }, {
        id: v1(),
        name: "aaaa",
        createDate: '30.03.202020',
        text: 'Lorem  vfdvjsorkl; vlsdfv;lkfv '

    },
    {
        id: v1(),
        name: "aaaa",
        createDate: '30.03.202020',
        text: 'Lorem  vfdvjsorkl; vlsdfv;lkfv '

    }, {
        id: v1(),
        name: "aaaa",
        createDate: '30.03.202020',
        text: 'Lorem  vfdvjsorkl; vlsdfv;lkfv '

    }]
type NotesType = {
    theme:ThemeType

}
const Notes:React.FC<NotesType> = ({theme}) => {

    return (
        <Grid container>
            <Sidebar theme={theme}  menuItems={menuItems} />
            <Main theme={theme} menuItem={menuItems[0]}/>
        </Grid>
    );
};

export default Notes;
