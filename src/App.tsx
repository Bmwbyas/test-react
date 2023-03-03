import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Sidebar} from "./features/sideabar/Sidebar";
import {Main} from "./features/main/Main";
import {Grid} from "@mui/material";
import Header from "./components/header/Header";

function App() {

    return (
        <>
            <Header/>
            <Grid container>
                <Sidebar/>
                <Main/>
            </Grid>
        </>
    )
}

export default App
