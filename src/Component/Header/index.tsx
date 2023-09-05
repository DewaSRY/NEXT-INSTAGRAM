import style from "./Header.module.scss";
import { FC } from "react";
import { BsSearch, BsHouseFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import Image from "next/legacy/image";

interface HeaderProps {}
const Header: FC<HeaderProps> = (): JSX.Element => {
  return (
    <div className={style.header}>
      {/* left */}

      <Image
        className={style["header-logo"]}
        alt="Picture of the author"
        width={200}
        height={50}
        blurDataURL="/loading.svg"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        }
      />
      <form action="">
        <input type="text" placeholder="Search .." />
        <BsSearch />
      </form>

      <span className={style["header-menu"]}>
        <BsHouseFill />
        <AiFillPlusCircle />
        <Image
          alt="Picture of the author"
          width={50}
          height={50}
          blurDataURL="/loading.svg"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Savannah_Cat_portrait.jpg/1200px-Savannah_Cat_portrait.jpg"
          }
        />
      </span>
    </div>
  );
};

export default Header;
