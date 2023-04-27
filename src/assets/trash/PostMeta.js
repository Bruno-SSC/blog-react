import React from "react";
import style from "@mainST/PostMeta.module.css";
import heartIcon from "@assets/images/heart.png";
import filledHeartIcon from "@assets/images/filled_heart.png";

const PostMeta = ({ data }) => {

  function unfavourite(){
    console.log("unfavourite")
  }

  return (
    <div className={style.meta}>
      <span className={style.date}>{data.date}</span>
     
      <div className={style.heartImgWrapper}>
        <img
          onClick={unfavourite}
          className={style.heartIcon}
          src={data.favorite ? filledHeartIcon : heartIcon}
          alt="heart icon"
        />
      </div>

    </div>
  );
};

export default PostMeta;
