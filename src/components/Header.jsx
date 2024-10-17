import React from "react";
import "../styles/Header.css";
import { FolderMinus } from "lucide-react";
import { Globe } from "lucide-react";
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <div className="logo">
          <img
            src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-mashallah-3d-golden-calligraphy-arabic-written-text-transparent-background-png-image_6853056.png"
            alt="Logo"
          />
        </div>

        <div className="categories">
        <FolderMinus className="cat__img"/>
          
          <span>Categories</span>
        </div>
      </div>

      <div className="header__center">
        <SearchOutlinedIcon className="search__circle"/>
        <input type="text" placeholder="Search" />
      </div>

      <div className="header__right">
        <button className="app-btn">
        
        <GetAppOutlinedIcon className="app__img"/>

          <p>Get the app</p>
        </button>

        <button className="lang-btn">
        <Globe  className=" img_en"/>
          <p>EN</p>
        </button>

        <button className="login-btn">Log In/Sign Up</button>
      </div>
    </header>
  );
}
