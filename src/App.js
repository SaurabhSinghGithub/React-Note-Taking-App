import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Notes from './Pages/Notes';
import AddNotes from './Pages/AddNotes';
import EditNote from "./Pages/EditNote";
import SingleNote from './Pages/SingleNote';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/notes' element={<Notes />} />
          <Route path='/addNotes' element={<AddNotes />} />
          <Route path='/editNotes/:id' element={<EditNote />} />
          <Route path='/singleNote/:id' element={<SingleNote />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
