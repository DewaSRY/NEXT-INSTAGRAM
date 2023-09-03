/* eslint-disable @next/next/no-img-element */
import style from "./Post.module.scss";
import { FC } from "react";
import { faker } from "@faker-js/faker";
import { BsThreeDots, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import Suggestion from "./Suggestion";

interface MiniProfileProps {
  userImage: string;
  userName: string;
}

export const MiniProfile: FC<MiniProfileProps> = ({
  userImage,
  userName,
}): JSX.Element => {
  return (
    <div className={style.miniProfile}>
      <div className={style.profile}>
        <img src={userImage} alt="cat" width={100} height={100} />
        <div>
          <h2>{userName}</h2>
          <p>Welcome to Instagram</p>
        </div>
        <button>Sign Out</button>
      </div>
      <Suggestion />
    </div>
  );
};

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
        <div className={style["caption-icon"]}>
          <span>
            <AiOutlineHeart />
            <FaRegCommentDots />
          </span>
          <BsBookmark />
        </div>
        <p>
          {userName} # {caption}
        </p>
        <div className={style.comment}></div>
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
      <MiniProfile
        userImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Savannah_Cat_portrait.jpg/1200px-Savannah_Cat_portrait.jpg"
        userName="jeri"
      />
    </section>
  );
};

export default Post;
