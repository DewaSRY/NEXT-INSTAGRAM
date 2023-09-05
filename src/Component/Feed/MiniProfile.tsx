/* eslint-disable @next/next/no-img-element */

"use client";
import style from "./MIniProfile.module.scss";
import { FC, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

interface ProfileCardProps {
  username: string;
  img: string;
  status: string;
  id: number;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  username,
  img,
  status,
}): JSX.Element => {
  return (
    <div className={style.profile}>
      <img src={img} alt="person" width={50} height={50} />

      <span>
        <h3>{username}</h3>
        <p>{status}</p>
      </span>

      <button>Follow</button>
    </div>
  );
};

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

interface MiniProfileProps {
  userImage: string;
  userName: string;
}

const MiniProfile: FC<MiniProfileProps> = ({
  userImage,
  userName,
}): JSX.Element => {
  const [suggestion, setSuggestion] = useState<suggestion[]>([]);
  useEffect(() => {
    setSuggestion(suggestionArr);
  }, []);
  return (
    <div className={style.miniProfile}>
      <ProfileCard
        id={12}
        username={userName}
        img={userImage}
        status="Welcome to Instagram"
      />

      <div className={style.suggestion}>
        <div className={style["suggestion-heading"]}>
          <p>suggestion for you</p>
          <button>See All</button>
        </div>

        {suggestion.map((user) => (
          <ProfileCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};
export default MiniProfile;
