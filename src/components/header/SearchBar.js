import React, { useState } from "react";
import loupeIcon from "@assets/images/loupe.svg";
import style from "@headerST/SearchBar.module.css";

const SearchBar = ({ setInputText }) => {
  return (
    <div className={style.searchBar}>
      <div className={style.loupeImgWrapper}>
        <img className={style.loupeIcon} src={loupeIcon} alt="loupe icon" />
      </div>

      <input
        onBlur={(e) => setInputText(e.target.value)}
        className={style.input}
        type="text"
        placeholder="The article you're looking for has a title. Use a word of it."
      />
    </div>
  );
};

export default SearchBar;
