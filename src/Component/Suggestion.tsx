/* eslint-disable @next/next/no-img-element */
"use client";
import style from "./Suggestion.module.scss";
import { FC, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

interface SuggestionCardProps {
  username: string;
  img: string;
  status: string;
  id: number;
}

export const SuggestionCard: FC<SuggestionCardProps> = ({
  username,
  img,
  status,
}): JSX.Element => {
  return (
    <div className={style["suggestion-card"]}>
      <img src={img} alt="person" width={50} height={50} />
      <span>
        <h3>{username}</h3>
        <p>{status}</p>
      </span>
      <button>Follow</button>
    </div>
  );
};

interface SuggestionProps {}
const suggestionArr = new Array(5).fill(null).map(() => {
  return {
    username: faker.person.fullName(),
    img: faker.image.avatarLegacy(),
    status: faker.person.jobTitle(),
    id: Math.ceil(Math.random() * 1000),
  };
});
interface suggestion {
  username: string;
  img: string;
  status: string;
  id: number;
}

const Suggestion: FC<SuggestionProps> = (): JSX.Element => {
  const [suggestion, setSuggestion] = useState<suggestion[]>([]);
  useEffect(() => {
    setSuggestion(suggestionArr);
  }, []);
  return (
    <div className={style.suggestion}>
      <div className={style["suggestion-heading"]}>
        <p>suggestion for you</p>
        <button>See All</button>
      </div>
      <div>
        {suggestion.map((user) => (
          <SuggestionCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
