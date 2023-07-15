import { notesData} from "../store/store";
import {INote} from "../store/types";

export const saveInLocalStorage=(notes:INote[])=>{

if(notes.length===0){return}
  localStorage.setItem('notes', JSON.stringify(notes) )
}

export const getLocalStorage=()=>{

    const notes=localStorage.getItem('notes')

    let parseNotes:INote[]=JSON.parse(notes!)
    if(parseNotes===null){
        parseNotes=notesData
    }
    return parseNotes
}
