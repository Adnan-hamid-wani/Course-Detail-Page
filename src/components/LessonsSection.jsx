import React from "react";
import "../styles/LessonsSection.css";

function LessonsSection() {
  const cardsData = [
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJLmoNFPe87NVMmOpesD213akzbE7ATJl6w&s",
      name: "John Doe",
      rating: "⭐ 5",
      content:
        "This is the lesson content for John. This is the lesson content for John. This is the lesson content for John. This is the lesson content for John.This is the lesson content for John.✌️❤️",
      date: "2 weeks ago",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTLxG4I5b-TQJ3iHv9K0tOG-22-UtGKN-UUvgiMQY5p10Jcs_RUeqUWM-guw1_guXOwU&usqp=CAU",
      name: "Jane Smith",
      rating: "⭐ 3",
      content:
        "This is the lesson content for Jane.😍👌This is the lesson content for Jane",
      date: "October 14, 2024",
    },
    
  ];
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
