/* eslint-disable @next/next/no-img-element */
"use client";
import style from "./Stories.module.scss";
import { FC, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
interface StoriesProps {}
interface User {
  userName: string;
  img: string;
  id: number;
}
export const Stories: FC<StoriesProps> = (): JSX.Element => {
  const [story, setStory] = useState<User[]>([]);
  useEffect(() => {
    const storyUsers = new Array(20).fill(null).map(() => {
      return {
        userName: faker.person.firstName(),
        img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
        id: Math.random() * 100,
      };
    });
    setStory(storyUsers);
  }, []);
  return (
    <div className={style.stories}>
      {story.map((user, id) => (
        <span key={id}>
          <img src={user.img} width={70} height={70} alt={user.userName} />
          <p>{user.userName}</p>
        </span>
      ))}
    </div>
  );
};
