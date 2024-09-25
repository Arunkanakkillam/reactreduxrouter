import { Route, Routes } from "react-router-dom"
import { Notes } from "./notes"
import { CreateNotes } from "./createNote"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  

  return (
    <Provider store={store}>
    <>
      <Routes>
        <Route path="/" element={<Notes/>}/>
        <Route path="/createNote" element={<CreateNotes/>}/>
      </Routes>
    </>
    </Provider>
  )
}

export default App
