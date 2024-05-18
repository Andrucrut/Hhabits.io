import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import  Reg  from "./pages/registration/reg";
import Log from "./pages/login/login";
import Contact from "./pages/contact/contact";
import Main from './pages/main/main';
import Teoria from "./pages/teoria/teoria";
import Calendar from "./pages/Calendar/CalendarPage"

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/theory" element={<Teoria/>} />
                    <Route path="/habits" element={<Calendar/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/reg" element={<Reg/>} />
                    <Route path="/login" element={<Log/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
