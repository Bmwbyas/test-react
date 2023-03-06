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
