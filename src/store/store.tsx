import React, {useState} from "react";
import {v1} from "uuid";

const  notesData=[{
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
export interface INote {
    id: string
    name: string
    createDate: string
    text: string
}
export type ContextType = {
    notes: INote[]
    note:INote
    theme:string
    editMode:boolean
    activeNoteId:string|null
    filter:string
};


type ActionsType= {
    setThemeList:()=>void
    setThemeTable:()=>void
    enableEditMode:()=>void
    disableEditMode:()=>void
    changeActiveNote:(id:string)=>void
    setCurrentNote:(id:string)=>void
    deleteNote:()=>void
    searchNotes:(value:string)=>void



}
export type DataContextType=ContextType&ActionsType
const DataContext = React.createContext<DataContextType|null>(null);

type DataProviderType={
    children:React.ReactNode
}
export const DataProvider:React.FC<DataProviderType> = ({children}) => {
    //data notes
    const [notes,setNotes]=useState<INote[]>(notesData)

    //filter fo notes
    const [filter,setFilter]=useState<string>('')

    //current note
    const [note,setNote]=useState<INote>({name:'',text:'',createDate:'',id:''})

   //theme variant note
    const [theme,setTheme]=useState<string>("list")

    // assets view header
    const [editMode,setEditMode]=useState<boolean>(false)

    const [activeNoteId, setActiveNoteId] = useState<null | string>(null)

    const setThemeTable=()=>{
        setTheme("table")
    }
    const setThemeList=()=>{
        setTheme("list")
    }

    const enableEditMode=()=>{
        setEditMode(true)
    }
    const disableEditMode=()=>{
        setEditMode(false)
    }

    const changeActiveNote=(id:string)=>{
        setActiveNoteId(id)
    }
    const setCurrentNote=(id:string)=>{
        const note=notes.find(n=>n.id===id)
        if(note) setNote(note)
    }


    const deleteNote=()=>{
        setNotes(notes.filter(n=>n.id!=activeNoteId))
        setNote({id:'',createDate:'',text:'',name:''})
    }


    const searchNotes=(value:string)=>{
        setNote({id:'',createDate:'',text:'',name:''})
       setFilter(value)

    }


    return (
        <DataContext.Provider value={{
            theme,setThemeTable,setThemeList,editMode,enableEditMode,
            disableEditMode, activeNoteId,changeActiveNote,setCurrentNote,note,
            deleteNote,searchNotes,notes,filter
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext
