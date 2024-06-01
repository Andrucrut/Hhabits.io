import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import meditationImage from "../image/med.png";
import exerciseImage from "../image/hard.jpg";
import readingImage from "../image/read.jpg";

const HabitSlider = () => {
    const [habitDescription, setHabitDescription] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const showHabitDescription = (description) => {
        setHabitDescription(description);
    };

    return (
        <div className="habit-slider">
            <h2>Различные виды привычек</h2>
            <Slider {...settings}>
                <div className="habit-slide" onClick={() => showHabitDescription("Медитация - это практика, цель которой - обретение внутреннего спокойствия и покоя. Она помогает снять стресс, улучшить концентрацию и сосредоточенность. Медитация способствует улучшению самочувствия и эмоционального благополучия. Это простой способ позаботиться о своем физическом и психическом здоровье.")}>
                    <img src={meditationImage} alt="Медитация" />
                </div>
                <div className="habit-slide" onClick={() => showHabitDescription("Утренняя зарядка - это комплекс упражнений, направленных на пробуждение организма и подготовку к активному дню. Зарядка помогает улучшить кровообращение, укрепить мышцы и повысить тонус. Это отличный способ начать день с энергией и бодростью.")}>
                    <img src={exerciseImage} alt="Зарядка" />
                </div>
                <div className="habit-slide" onClick={() => showHabitDescription("Чтение - это замечательная привычка, которая расширяет кругозор, развивает мышление и воображение. Книги помогают нам погрузиться в другие миры и пережить множество приключений. Чтение также способствует расслаблению и уменьшению стресса. Это один из лучших способов провести время и инвестировать в свое развитие.")}>
                    <img src={readingImage} alt="Чтение" />
                </div>
            </Slider>
            {habitDescription && (
                <div className="habit-description">
                    <p>{habitDescription}</p>
                    <button onClick={() => setHabitDescription(null)}>Закрыть</button>
                </div>
            )}
        </div>
    );
};

export default HabitSlider;
