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
    viewMain:boolean
    activeNoteId:string|null
    filter:string
    editMode:boolean
};


type ActionsType= {
    setThemeList:()=>void
    setThemeTable:()=>void
    enableViewMain:()=>void
    disableViewMain:()=>void
    activeEditMode:()=>void
    disableEditMode:(text:string)=>void
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

    // view table main component
    const [viewMain,setViewMain]=useState<boolean>(false)

    // active node id
    const [activeNoteId, setActiveNoteId] = useState<null | string>(null)

    //edit mode note
    const [editMode,setEditMode]=useState(false)

    console.log(editMode)
    const setThemeTable=()=>{
        setTheme("table")
    }
    const setThemeList=()=>{
        setTheme("list")
    }

    const enableViewMain=()=>{
        setViewMain(true)
    }
    const disableViewMain=()=>{
        setViewMain(false)
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
    const activeEditMode=()=>{
        setEditMode(true)
    }
    const disableEditMode=(text:string)=>{
        const options:any = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour:'numeric',
            minute:'numeric',
            second:'numeric',
            timezone: 'UTC'
        };
        const date=new Date().toLocaleString("ru", options);
        setEditMode(false)
        setNote({...note,text, createDate:date})
    }

    return (
        <DataContext.Provider value={{
            theme,setThemeTable,setThemeList, viewMain,enableViewMain,
            disableViewMain, activeNoteId,changeActiveNote,setCurrentNote,note,
            deleteNote,searchNotes,notes,filter,activeEditMode,disableEditMode,editMode
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext
