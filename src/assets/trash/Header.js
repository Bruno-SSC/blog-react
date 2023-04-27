import React from "react";
import style from "@assets/styles/Header.module.css";

import TopTitles from "@components/TopTitles";
import SearchBar from "@components/SearchBar";

const Header = () => {
  return (
    <header className={style.header}>
      <TopTitles />
      <SearchBar />
    </header>
  );
};

export default Header;
