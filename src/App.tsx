import './App.css'
import {DataProvider} from "./store/store";
import {Content} from "./components/content/Content";
import React from "react";


function App() {


    return (
        <DataProvider>

            <Content/>
        </DataProvider>

    )
}

export default App
