
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Auth from './components/Auth';
import AdminNavbar from './components/AdminNavbar';
import AddAcademy from './components/AddAcademy';
import AddCourse from './components/AddCourse';
import AddStudent from './components/AddStudent';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/adminNavbar" element={<AdminNavbar/>} />
        <Route path='/adminAcademy' element={<AddAcademy/>} />
        <Route path='/adminCourse' element={<AddCourse />} />
        
        {/* <Route path='/adminStudents' element={<AdminStudents/>} /> */}
        <Route path='/adminStudent' element={<AddStudent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
