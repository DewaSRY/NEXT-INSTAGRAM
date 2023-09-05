/* eslint-disable @next/next/no-img-element */
"use client";
import style from "./Stories.module.scss";
import { FC, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

interface StoreysCardProps {
  userName: string;
  img: string;
}

const StoreysCard: FC<StoreysCardProps> = ({ img, userName }): JSX.Element => {
  return (
    <div className={style["storeys-card"]}>
      <img src={img} width={70} height={70} alt={userName} />
      <p>{userName}</p>
    </div>
  );
};

const storyUsers = new Array(20).fill(null).map(() => {
  return {
    userName: faker.person.firstName(),
    img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
    id: Math.random() * 100,
  };
});
interface UserStoreys {
  userName: string;
  img: string;
  id: number;
}
interface StoriesProps {}
const Stories: FC<StoriesProps> = (): JSX.Element => {
  const [story, setStory] = useState<UserStoreys[]>([]);
  useEffect(() => {
    setStory(storyUsers);
  }, []);
  return (
    <div className={style.stories}>
      {story.map((user) => (
        <StoreysCard key={user.id} {...user} />
      ))}
    </div>
  );
};
export default Stories;
