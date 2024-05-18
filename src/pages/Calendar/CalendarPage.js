import React, { useState, useEffect } from 'react';
import './calendar.css';
import dropImage from '../../image/DROP.png';
import stepImage from '../../image/STEP.png';

const eventTypes = {
    meditation: { label: 'Медитация', color: 'purple' },
    exercise: { label: 'Зарядка', color: 'green' },
    reading: { label: 'Чтение', color: 'yellow' },
};

const CalendarPage = () => {
    const [events, setEvents] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [eventType, setEventType] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [nearestEvent, setNearestEvent] = useState(null);

    useEffect(() => {
        const findNearestEvent = () => {
            const today = new Date().toISOString().split('T')[0];
            const upcomingDates = Object.keys(events)
                .filter(date => date >= today)
                .sort();
            if (upcomingDates.length > 0) {
                const nearestDate = upcomingDates[0];
                setNearestEvent({ date: nearestDate, ...events[nearestDate] });
            } else {
                setNearestEvent(null);
            }
        };

        findNearestEvent();
    }, [events]);

    const handleDayClick = (date) => {
        setSelectedDate(date);
        setModalOpen(true);
    };

    const handleSaveEvent = () => {
        if (eventType && eventTime) {
            setEvents({
                ...events,
                [selectedDate]: { type: eventType, time: eventTime }
            });
            setModalOpen(false);
            setEventType('');
            setEventTime('');
        }
    };

    return (
        <div className="calendar-page">
            <div className="header">
                <img src={dropImage} alt="Drop" className="header-image" />
                <img src={stepImage} alt="Step" className="header-image" />
            </div>
            <div className="legend">
                {Object.entries(eventTypes).map(([key, { label, color }]) => (
                    <span key={key} className="legend-item">
                        <span className="dot" style={{ backgroundColor: color }}></span> {label}
                    </span>
                ))}
            </div>
            <div className="calendar">
                <div className="calendar-header">
                    <div>Sunday</div>
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                </div>
                <div className="calendar-body">
                    {Array.from({ length: 42 }).map((_, index) => {
                        const date = new Date();
                        date.setDate(date.getDate() - date.getDay() + index);
                        const dateString = date.toISOString().split('T')[0];
                        return (
                            <div
                                key={index}
                                className="calendar-day"
                                onClick={() => handleDayClick(dateString)}
                            >
                                {events[dateString] && (
                                    <>
                                        <span className="dot" style={{ backgroundColor: eventTypes[events[dateString].type].color }}></span>
                                        {events[dateString].time}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="details">
                {nearestEvent ? (
                    <>
                        <span className="details-date">{nearestEvent.date}</span>
                        <div className="details-content">
                            <span className="dot" style={{ backgroundColor: eventTypes[nearestEvent.type].color }}></span>
                            {eventTypes[nearestEvent.type].label} {nearestEvent.time}
                        </div>
                    </>
                ) : (
                    <div className="details-empty">Нет ближайших событий</div>
                )}
            </div>
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Добавить событие</h2>
                        <div>
                            <label>
                                Тип события:
                                <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                                    <option value="">Выберите</option>
                                    {Object.entries(eventTypes).map(([key, { label }]) => (
                                        <option key={key} value={key}>{label}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>
                                Время:
                                <input type="time" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
                            </label>
                        </div>
                        <button onClick={handleSaveEvent}>Сохранить</button>
                        <button onClick={() => setModalOpen(false)}>Отмена</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarPage;
