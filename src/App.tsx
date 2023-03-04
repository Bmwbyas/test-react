import './App.css'
import Header from "./components/header/Header";
import Notes from "./features/notes/Notes";
import {DataProvider} from "./store/store";


function App() {
    return (
      <DataProvider >
            <Header  />
            <Notes  />
      </DataProvider>
    )
}

export default App
