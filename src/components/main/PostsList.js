import React, { useState } from "react";
import style from "@mainST/PostsList.module.css";
import Post from "@mainCP/Post";

const PostsList = ({ posts, newPost, changePostValues }) => {
  const [edit, setEdit] = useState(false);

  const toggleEditMode = () => {
    setEdit(() => !edit);
  };

  return (
    <section className={style.postsList}>
      <div className={style.actionsMenu}>
        <button onClick={() => newPost()} className={style.shadow__btn}>
          Add post
        </button>
        <button onClick={() => toggleEditMode()} className={style.shadow__btn}>
          Edit Mode
        </button>
      </div>

      {posts.map((p) => (
        <Post changePostValues={changePostValues} edit={edit} key={p.id} data={p} />
      ))}
    </section>
  );
};

export default PostsList;
