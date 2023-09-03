/* eslint-disable @next/next/no-img-element */
import style from "./Post.module.scss";
import { FC } from "react";
import { faker } from "@faker-js/faker";
import { BsThreeDots } from "react-icons/bs";
interface PostCardProps {
  id: number;
  userName: string;
  userImg: string;
  img: string;
  caption: string;
}

export const PostCard: FC<PostCardProps> = ({
  id,
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
        <img src={img} alt="posting not found" />
      </div>
      <div className={style.caption}>
        <p># {caption}</p>
        <span></span>
        <div className={style.comment}></div>
        <input type="text" placeholder="comment" />
      </div>
    </div>
  );
};

interface PostProps {}
const posts = new Array(10).fill(null).map(() => {
  return {
    id: Math.ceil(Math.random() * 100),
    userName: faker.person.fullName(),
    userImg: faker.image.avatarLegacy(),
    img: faker.image.url(),
    caption: "nice picture",
  };
});
const Post: FC<PostProps> = (): JSX.Element => {
  return (
    <section className={style.postPage}>
      <div className={style.postDisplay}>
        {posts.map((post) => {
          return <PostCard key={post.id} {...post} />;
        })}
      </div>
    </section>
  );
};

export default Post;
