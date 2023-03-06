import React, {useState} from "react";
import {v1} from "uuid";
import {saveInLocalStorage} from "../localstorage/localStorage";



export interface INote {
    id: string
    createDate: string
    text: string
    innerHtml: string
}

export type ContextType = {
    notes: INote[]
    theme: string
    viewMain: boolean
    activeNoteId: string | null
    filter: string
    editMode: boolean
};


type ActionsType = {
    setThemeList: () => void
    setThemeTable: () => void
    enableViewMain: () => void
    disableViewMain: () => void
    activeEditMode: () => void
    disableEditMode: () => void
    changeActiveNote: (id: string) => void
    deleteNote: () => void
    searchNotes: (value: string) => void
    setNoteHandler: (text: string, innerHtml: string) => void
    setValueInnerHtml: () => string
    setlocalStorageData: (data: INote[]) => void
    setDateNote:()=>string
}
export type DataContextType = ContextType & ActionsType
const DataContext = React.createContext<DataContextType | null>(null);

type DataProviderType = {
    children: React.ReactNode
}
export const DataProvider: React.FC<DataProviderType> = ({children}) => {
    //data notes
    const [notes, setNotes] = useState<INote[]>([])

    //filter fo notes
    const [filter, setFilter] = useState<string>('')

    //theme variant note
    const [theme, setTheme] = useState<string>("list")

    // view table main component
    const [viewMain, setViewMain] = useState<boolean>(false)

    // active node id
    const [activeNoteId, setActiveNoteId] = useState<null | string>(null)

    //edit mode note
    const [editMode, setEditMode] = useState(false)

    // console.log(editMode)
    const setThemeTable = () => {
        setTheme("table")
    }
    const setThemeList = () => {
        setTheme("list")
    }

    const enableViewMain = () => {
        setViewMain(true)
    }
    const disableViewMain = () => {
        setViewMain(false)
    }

    const changeActiveNote = (id: string) => {
        setActiveNoteId(id)
    }
    const setDateNote = (): string => {
        const note = notes.find(n => n.id === activeNoteId)
        if (note) return note.createDate
        else return ''
    }


    const deleteNote = () => {
        setNotes(notes.filter(n => n.id != activeNoteId))
        saveInLocalStorage(notes)
    }


    const searchNotes = (value: string) => {
        setFilter(value)
    }
    const activeEditMode = () => {
        setEditMode(true)
    }
    const disableEditMode = () => {
        setEditMode(false)
    }


    const setNoteHandler = (text: string, innerHtml: string) => {
        const options: any = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timezone: 'UTC'
        };

        const createDate = new Date().toLocaleString("ru", options);

        setNotes(notes.map(n => n.id === activeNoteId ? {...n, text, innerHtml, createDate} : n))
    }

    const setValueInnerHtml = () => {
        const note = notes.find(n => n.id === activeNoteId)
        if (!note) {
            return ''
        }
        return note.innerHtml
    }

    const setlocalStorageData = (data: INote[]) => {
        setNotes(data)
    }
    return (
        <DataContext.Provider value={{
            theme, setThemeTable, setThemeList, viewMain, enableViewMain,
            disableViewMain, activeNoteId, changeActiveNote, setDateNote,
            deleteNote, searchNotes, notes, filter, activeEditMode, disableEditMode, editMode,
            setNoteHandler, setValueInnerHtml,
            setlocalStorageData,

        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext


export const notesData: INote[] = [{
    id: v1(),
    innerHtml: "<div class=\"text-editor\"><div class=\"DraftEditor-root\"><div class=\"DraftEditor-editorContainer\"><div class=\"notranslate public-DraftEditor-content\" contenteditable=\"true\" role=\"textbox\" spellcheck=\"false\" style=\"outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;\"><div data-contents=\"true\"><div class=\"\" data-block=\"true\" data-editor=\"41v35\" data-offset-key=\"6jjlp-0-0\"><div data-offset-key=\"6jjlp-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6jjlp-0-0\" style=\"\"><span data-text=\"true\"> текст</span></span></div></div></div></div></div></div></div>",
    createDate: '5 марта 2023 г. в 13:54',
    text: 'текст'

},
    {
        id: v1(),
        innerHtml: "<div class=\"text-editor\"><div class=\"DraftEditor-root\"><div class=\"DraftEditor-editorContainer\"><div class=\"notranslate public-DraftEditor-content\" contenteditable=\"true\" role=\"textbox\" spellcheck=\"false\" style=\"outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;\"><div data-contents=\"true\"><div class=\"\" data-block=\"true\" data-editor=\"41v35\" data-offset-key=\"6jjlp-0-0\"><div data-offset-key=\"6jjlp-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6jjlp-0-0\" style=\"\"><span data-text=\"true\">тут есть </span></span></div></div></div></div></div></div></div>",
        createDate: '5 марта 2023 г. в 13:54',
        text: 'тут есть '

    },
    {
        id: v1(),
        innerHtml: "<div class=\"text-editor\"><div class=\"DraftEditor-root\"><div class=\"DraftEditor-editorContainer\"><div class=\"notranslate public-DraftEditor-content\" contenteditable=\"true\" role=\"textbox\" spellcheck=\"false\" style=\"outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;\"><div data-contents=\"true\"><div class=\"\" data-block=\"true\" data-editor=\"41v35\" data-offset-key=\"6jjlp-0-0\"><div data-offset-key=\"6jjlp-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6jjlp-0-0\" style=\"\"><span data-text=\"true\">it-incubator</span></span></div></div></div></div></div></div></div>",
        createDate: '5 марта 2023 г. в 13:54',
        text: 'it-incubator'

    },
    {
        id: v1(),
        innerHtml: "<div class=\"text-editor\"><div class=\"DraftEditor-root\"><div class=\"DraftEditor-editorContainer\"><div class=\"notranslate public-DraftEditor-content\" contenteditable=\"true\" role=\"textbox\" spellcheck=\"false\" style=\"outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;\"><div data-contents=\"true\"><div class=\"\" data-block=\"true\" data-editor=\"41v35\" data-offset-key=\"6jjlp-0-0\"><div data-offset-key=\"6jjlp-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6jjlp-0-0\" style=\"\"><span data-text=\"true\">false</span></span></div></div></div></div></div></div></div>",
        createDate: '5 марта 2023 г. в 13:54',
        text: 'false'

    },
]
