/* eslint-disable @next/next/no-img-element */
"use client";
import style from "./Post.module.scss";
import { faker } from "@faker-js/faker";
import { FC, useEffect, useState } from "react";

import { BsThreeDots, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
interface PostCardProps {
  id: number;
  userName: string;
  userImg: string;
  img: string;
  caption: string;
}

export const PostCard: FC<PostCardProps> = ({
  userImg,
  userName,
  img,
  caption,
}): JSX.Element => {
  return (
    <div className={style.PostCard}>
      <div className={style.header}>
        <span>
          <img src={userImg} alt="user" />
          <p>{userName}</p>
        </span>
        <BsThreeDots />
      </div>

      <div className={style.post}>
        <img
          style={{
            objectFit: "cover",
          }}
          src={img}
          alt="posting not found"
        />
      </div>

      <div className={style.caption}>
        <div className={style["caption-tool"]}>
          <span>
            <AiOutlineHeart />
            <FaRegCommentDots />
          </span>
          <BsBookmark />
        </div>
        <p>
          {userName} # {caption}
        </p>
        <form className={style["caption-action"]}>
          <BsEmojiSmile />
          <input type="text" placeholder="comment" />
          <button>Posts</button>
        </form>
      </div>
    </div>
  );
};

interface PostProps {}
const postsArr = new Array(10).fill(null).map(() => {
  return {
    id: Math.ceil(Math.random() * 100),
    userName: faker.person.fullName(),
    userImg: faker.image.avatarLegacy(),
    img: faker.image.url(),
    caption: "nice picture",
  };
});
interface postsData {
  id: number;
  userName: string;
  userImg: string;
  img: string;
  caption: string;
}
const Post: FC<PostProps> = (): JSX.Element => {
  const [posts, setPosts] = useState<postsData[]>([]);
  useEffect(() => {
    setPosts(postsArr);
  }, []);
  return (
    <section className={style.postPage}>
      {posts.map((post) => {
        return <PostCard key={post.id} {...post} />;
      })}
    </section>
  );
};

export default Post;
