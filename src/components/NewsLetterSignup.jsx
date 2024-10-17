import React from "react";
import "../styles/NewsLetterSignup.css";

function NewsletterSignup() {
  return (
    <div className='newsLetter-cont'>
      <div className="newsLetter-box">
        <span className="newsLetter-left">Stay Updated with Tathria's Courses</span>
        <div className="newsLetter-right">
          <h2>Subscribe to our newsLetter</h2>
          <p>In tristique gravida libero sit amet ornare. Integer volutpat ligula vitae consequat interdum. Pellentesque a vehicula ligula.</p>
          <input  type="email" placeholder="Email Address" />
          <button className="newsLetter-btn">Subscribe</button>

        </div>
      </div>
      <div className="ellipse-2"></div>

    </div>
  );
}

export default NewsletterSignup;
