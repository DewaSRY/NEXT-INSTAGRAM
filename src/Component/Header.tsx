/* eslint-disable @next/next/no-img-element */
import style from "./Header.module.scss";
import { FC } from "react";
import { BsSearch, BsHouseFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import Image from "next/legacy/image";

// const myLoader = ({ src }: { src: string }) => {
//   return `https://upload.wikimedia.org/wikipedia/commons/thumb/${src}`;
// };

// const MyImage = ({ src }: { src: string }) => {
//   return (
//     <Image
//       loader={myLoader}
//       src={src}
//       alt="Picture of the author"
//       width={500}
//       height={500}
//       blurDataURL="/loading.svg"
//     />
//   );
// };
interface HeaderProps {}
const Header: FC<HeaderProps> = (): JSX.Element => {
  return (
    <div className={style.header}>
      {/* left */}

      <Image
        alt="Picture of the author"
        width={200}
        height={50}
        blurDataURL="/loading.svg"
        src={"/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"}
      />
      <form action="">
        <input type="text" placeholder="Search .." />
        <BsSearch />
      </form>
      <span>
        <BsHouseFill />
        <AiFillPlusCircle />
        <Image
          alt="Picture of the author"
          width={50}
          height={50}
          blurDataURL="/loading.svg"
          src={
            "/c/c4/Savannah_Cat_portrait.jpg/1200px-Savannah_Cat_portrait.jpg"
          }
        />
      </span>
      {/* middle */}
      {/* right */}
    </div>
  );
};

export default Header;
