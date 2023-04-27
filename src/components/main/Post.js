import React, { useState, useEffect } from "react";
import style from "@mainST/Post.module.css";

import heartIcon from "@assets/images/heart.png";
import filledHeartIcon from "@assets/images/filled_heart.png";

const Post = ({ data, edit, changePostValues }) => {
  const [favourited, setfavourited] = useState(false);
  const [show, setShow] = useState(edit ? true : false);

  const favourite = () => {
    setfavourited(!favourited);
  };

  const expandPost = () => {
    setShow(() => !show);
  };

  return (
    <div onClick={edit ? () => changePostValues(data) : expandPost} className={style.post}>
      <div className={style.meta}>
        <span className={style.date}>{data.date}</span>

        <div className={style.heartImgWrapper}>
          <img
            onClick={favourite}
            className={style.heartIcon}
            src={favourited ? filledHeartIcon : heartIcon}
            alt="heart icon"
          />
        </div>
      </div>

      <div className={style.content}>
        <h1 className={style.title}>{data.title}</h1>
        <small className={style.resume}>{data.resumo}</small>
        <article
          className={show || edit ? [style.text, style.show].join(" ") : style.text}>
          {data.article}
        </article>
      </div>
    </div>
  );
};

export default Post;
