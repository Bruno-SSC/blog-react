import React from "react";
import style from "@assets/styles/Main.module.css";
import PostsList from "@components/PostsList";

const Main = () => {
  return (
    <main className={style.main}>
      <PostsList />
    </main>
  );
};

export default Main;
