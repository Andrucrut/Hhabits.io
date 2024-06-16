import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const CalendarPage = ({ selectedHabits }) => {
    const events = selectedHabits.map(habit => ({
        date: new Date(habit.date),
        task: habit.task
    }));

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const dayEvents = events.filter(e => e.date.toDateString() === date.toDateString());
            return dayEvents.length > 0 ? (
                <div className="habit-container">
                    {dayEvents.map((event, index) => (
                        <div key={index} className="habit">{event.task}</div>
                    ))}
                </div>
            ) : null;
        }
    };

    return (
        <div className="calendar-container">
            <Calendar
                tileContent={tileContent}
            />
        </div>
    );
};

export default CalendarPage;
