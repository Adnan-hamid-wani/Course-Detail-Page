import React from "react";
import "../styles/CourseInfoCard.css";

import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ArticleIcon from '@mui/icons-material/Article';


const CourseInfoCard = ({
  title,
  courseName,
  price,
  discountedPrice,
  students,
  duration,
  rating,
  reviews,
  certificate,
}) => {
  return (
    <div className="img__container">
      <div className="course-details">
        <h2>{title}</h2>
        <div className="course-header">
          <button className="course-btn">{courseName}</button>
          <div className="rating-section">
            <span>⭐  {rating} &nbsp; ({reviews} reviews)</span>
          </div>
        </div>
        <div className="price-section">
          <span className="discounted-price">${discountedPrice}</span>
          <span className="original-price">${price}</span>
        </div>

        
        <div className="course-info">
          <GroupsIcon/>
          <span>{students} Students</span>
          &nbsp;          &nbsp;          &nbsp;



          <AccessTimeFilledIcon/>

          <span> {duration} Hours</span>
          &nbsp;          &nbsp;          &nbsp;

          <ArticleIcon/>
          {certificate && <span>Certificate</span>}
        </div>
      </div>
    </div>
  );
};

export default CourseInfoCard;