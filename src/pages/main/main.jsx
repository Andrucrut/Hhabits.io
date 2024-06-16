import React from 'react';
import "./main.css";
import HabitSlider from '../../components/slider.jsx'

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="background-overlay"></div>
            <div className="drop"></div>
            <div className="step"></div>
            <div className="second-image"></div>
            <h1 className="firstH">О ПРОЕКТЕ</h1>
            <div className="about-text">
                <p>
                    DropStep уникален тем, что составляет расписание по
                    внедрению новых полезных привычек, учитывая одно простое правило -
                </p>
            </div>
            <h2>Правило<br />двух минут</h2>
            <h2 className="secondH">ЧТО ЭТО И ПОЧЕМУ ЭТО ВАЖНО?</h2>
            <div className="what-is-it">
                <p>
                    Любая новая привычка должна начинаться с малого и не должна занимать более двух минут. Прежде чем вы сможете усовершенствовать привычку, она должна стать частью вашей жизни.
                </p>
            </div>
            {/* Добавляем компонент слайдера */}
        </div>
    );
};

export default AboutPage;
