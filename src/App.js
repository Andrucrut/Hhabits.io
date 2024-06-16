import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import Reg from './pages/registration/reg';
import Log from './pages/login/login';
import Contact from './pages/contact/contact';
import Main from './pages/main/main';
import Teoria from './pages/teoria/teoria';
import CalendarPage from './pages/Calendar/CalendarPage';
import SelectionPage from './pages/selectionPage/selectionPage';
import { store } from "./redux/store";


function App() {
    const [selectedHabits, setSelectedHabits] = useState({
        exercise: false,
        meditation: false,
        reading: false
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false); // Состояние для входа в аккаунт

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/theory" element={<Teoria />} />
                    <Route path="/habits" element={<SelectionPage onSubmit={setSelectedHabits} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/reg" element={<Reg />} />
                    <Route path="/login" element={<Log onLogin={handleLogin} />} /> {/* Передача функции onLogin */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
