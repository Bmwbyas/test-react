import './App.css'
import Header from "./components/header/Header";
import Notes from "./features/notes/Notes";
import {useState} from "react";

export type ThemeType ="list"|"table"
function App() {
    const [theme, setTheme]=useState<ThemeType>("table")
    const setListTheme=()=>{
        setTheme("list")
        console.log(theme)
    }
    const setTableTheme=()=>{
        setTheme("table")
        console.log(theme)

    }


    return (
        <>
            <Header theme={theme} setListTheme={setListTheme} setTableTheme={setTableTheme} />
            <Notes theme={theme} />
        </>
    )
}

export default App
