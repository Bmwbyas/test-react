import React, {useContext, useEffect} from 'react';
import Header from "../header/Header";
import Notes from "../../features/notes/Notes";
import {getLocalStorage} from "../../localstorage/localStorage";
import DataContext from "../../store/store";
import {DataContextType} from "../../store/types";

export const Content = () => {
    const {setlocalStorageData}=useContext(DataContext) as DataContextType

    useEffect(()=>{
        const localData=getLocalStorage()
        setlocalStorageData(localData)
    },[])



    return (
        <>
            <Header/>
            <Notes/>
        </>
    );
};

