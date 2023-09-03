import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Component/Header";
import Feed from "@/Component/Feed";
import Post from "@/Component/Post";

export default function Home() {
  return (
    <main>
      <Header />
      <Feed />
      <Post />
    </main>
  );
}
