import React from "react";
import style from "@mainST/PostContent.module.css";

const PostContent = ({data}) => {
  return (
    <div className={style.content}>
      <h1 className={style.title}>{data.titulo}</h1>
      <article className={style.text}>
        {data.resumo}
      </article>
    </div>
  );
};

export default PostContent;
