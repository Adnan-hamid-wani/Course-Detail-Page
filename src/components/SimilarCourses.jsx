import React from "react";
import "../styles/SimilarCourses.css";

function SimilarCourses() {
  const coursesData = [
    {
      image: "https://www.shutterstock.com/image-photo/business-financing-accounting-banking-concept-600nw-2441922909.jpg",
      tag:"Finance",
      title: "Budgeting and Money",
      price: "48 kd",
      oldPrice: "80 kd",
      rating: "4.8",
      students: "8,289 students",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpp031fPYiTyyiQMHteuQQEThs3exDjcCDaCQuhU_rnK4_LiO6F7z_B03CeC_zzCOlZSY&usqp=CAU",
      tag:"Entrepreneurship",
      title: "Digital Entrepreneurship",
      price: "39 kd",
      oldPrice: "80 kd",
      rating: "4.9",
      students: "6,182 students",
    },
    {
      image: "https://cdnblog.etmoney.com/wp-content/uploads/2019/10/gold-investment.jpg",
      tag:"Wealth",
      title: "Learn investment in gold",
      price: "42 kd",
      oldPrice: "75 kd",
      rating: "4.7",
      students: "7,983 students",
    },

   
   
  ];

  return (
    <div className="similar-courses-cont">
      <div className="similar-courses-box">
        <h2>Similar Courses !</h2>
        <span className="see-all-cards">See All</span>
      </div>

      <div className="similar-courses-card-container">
        {coursesData.map((course, index) => (
          <div className="similar-courses-card" key={index}>
            <img src={course.image} alt={course.title} className="similar-courses-image" />
            <div className="similar-courses-info">
              <span className="similar-category-tag">{course.tag}</span>
              <h3>{course.title}</h3>
              <div className="similar-price-section">
                <span className="similar-price">{course.price}</span>
                <span className="similar-old-price">{course.oldPrice}</span>
              </div>
              <div className="similar-rating-section">
                <span>⭐ {course.rating}</span>
                <span>{course.students}</span>
              </div>
              <button className="similar-sign-up-btn">Sign up</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarCourses;
