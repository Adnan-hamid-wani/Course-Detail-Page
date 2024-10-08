import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <div className="logo">
          <img
            src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-mashallah-3d-golden-calligraphy-arabic-written-text-transparent-background-png-image_6853056.png"
            alt="Logo"
          />
          <span className="logo-subtext">للبيع والتصميم والتطوير</span>
        </div>

        <div className="categories">
          <img
            src="https://www.iconbolt.com/iconsets/iconly-light/folder.svg"
            alt="Categories"
          />
          <span>Categories</span>
        </div>
      </div>

      <div className="header__center">
        <img
          className="search__circle"
          src="https://www.iconbolt.com/iconsets/anron-line/search.svg"
        />
        <input type="text" placeholder="Search" />
      </div>

      <div className="header__right">
        <button className="app-btn">
          <img
            className="app__img"
            src="https://www.iconbolt.com/iconsets/iconly-bulk/download.svg"
          />
          <p>Get the app</p>
        </button>

        <button className="lang-btn">
          <img
            className="img_en"
            src="https://www.iconbolt.com/iconsets/iconoir/language.svg"
          />
          <p>EN</p>
        </button>

        <button className="login-btn">Log In/Sign Up</button>
      </div>
    </header>
  );
}
