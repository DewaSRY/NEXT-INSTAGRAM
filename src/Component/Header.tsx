/* eslint-disable @next/next/no-img-element */
import style from "./Header.module.scss";
import { FC } from "react";
import { BsSearch, BsHouseFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import Image from "next/image";
interface HeaderProps {}

const Header: FC<HeaderProps> = (): JSX.Element => {
  return (
    <div className={style.header}>
      {/* left */}
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        }
        width={200}
        height={50}
        alt="image"
      />
      <form action="">
        <input type="text" placeholder="Search .." />
        <BsSearch />
      </form>
      <span>
        <BsHouseFill />
        <AiFillPlusCircle />
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Savannah_Cat_portrait.jpg/1200px-Savannah_Cat_portrait.jpg"
          }
          alt="cat"
          width={50}
          height={50}
        />
      </span>
      {/* middle */}
      {/* right */}
    </div>
  );
};

export default Header;
