import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './selectionPage.css';

import ErrorMessage from '../../components/ErrorMessage';
import { store } from '../../redux/store';
import { setLoggedIn, setUserName } from '../../redux/actions';
import { scheduleDelete, scheduleGenerate, scheduleGet } from '../../services/schedule';
import CalendarPage from "../Calendar/CalendarPage";

const Habits = ({ isLoggedIn }) => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [loginError, setLoginError] = useState('');
    const [schedule, setSchedule] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => getSchedule(), []);

    function getSchedule() {
        scheduleGet()
            .then(res => setSchedule(res))
            .catch((err) => setLoginError(err.message));
    }

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setCheckedItems((prevCheckedItems) =>
            checked ? [...prevCheckedItems, value] : prevCheckedItems.filter((item) => item !== value)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginError('');
        setErrorMessage('');

        if (checkedItems.length === 0) {
            setErrorMessage('Вы ничего не выбрали');
            return;
        }

        scheduleGenerate(isLoggedIn, checkedItems)
            .then(res => setSchedule(res))
            .catch((err) => setLoginError(err.message));
    };

    const handleSubmitDelete = (e) => {
        e.preventDefault();
        setLoginError('');
        setErrorMessage('');

        scheduleDelete()
            .then(() => {
                setSchedule([]);
                setCheckedItems([]);
            })
            .catch((err) => setLoginError(err.message));
    };

    return (
        <div>
            {store.getState().loggedIn && store.getState().userName != null && schedule.length === 0 && (
                <div className="selection-page">
                    <div className="drop"></div>
                    <div className="step"></div>

                    <div>
                        <h3>Выберите желаемый набор привычек</h3>
                        <div className="hab">
                            <div>
                                <input
                                    type="checkbox"
                                    value="медитация"
                                    onChange={handleCheckboxChange}
                                />
                                Медитация
                            </div>
                            <br/>
                            <div>
                                <input
                                    type="checkbox"
                                    value="зарядка"
                                    onChange={handleCheckboxChange}
                                />
                                Зарядка
                            </div>
                            <br/>
                            <div>
                                <input
                                    type="checkbox"
                                    value="чтение"
                                    onChange={handleCheckboxChange}
                                />
                                Чтение
                            </div>
                        </div>
                    </div>
                    <h2></h2>
                    <form onSubmit={handleSubmit}>
                        <input type="submit" value="Составить расписание" className="selection-pagebutton" />
                    </form>
                    <ErrorMessage error={errorMessage || loginError} />
                </div>
            )}

            {!store.getState().loggedIn && (
                <div className="forbBody">
                    <div className="forbMessage">Для доступа к этому разделу, пожалуйста, пройдите регистрацию или авторизуйтесь!</div>
                </div>
            )}

            {store.getState().loggedIn && store.getState().userName != null && schedule.length !== 0 && (
                <div>
                    <form className="calendarForm" onSubmit={handleSubmitDelete}>
                        <input type="submit" value="Удалить расписание" className="selection-pagebutton" />
                    </form>
                    <CalendarPage selectedHabits={schedule} />
                </div>
            )}
        </div>
    );
};

export default Habits;
