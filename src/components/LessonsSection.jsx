import React from "react";
import "../styles/LessonsSection.css";

function LessonsSection({ cardsData }) {
  return (
    <div className="lessons-section">
      <div className="lesson-header-btns">
        <button className="btn-primary">Lessons</button>
        <button className="btn-primary">Reviews</button>
      </div>

      <div className="rating-btns">
        <button className="btns-6">⭐ All</button>
        <button className="btns-6">⭐ 5</button>
        <button className="btns-6">⭐ 4</button>
        <button className="btns-6">⭐ 3</button>
        <button className="btns-6">⭐ 2</button>
        <button className="btns-6">⭐ 1</button>
      </div>

      <div className="lesson-cards-container">
        {cardsData.map((card, index) => (
          <div className="lesson-card" key={index}>
            <div className="lesson-card-header">
              <img src={card.avatar} alt="Avatar" className="avatar" />
              <span>{card.name}</span>
              <button className="card-header-btn">{card.rating}</button>
            </div>
            <div className="lesson-content">
              <p>{card.content}</p>
            </div>
            <div className="lesson-card-time">{card.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LessonsSection;
