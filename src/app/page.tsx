import Stories from "@/Component/Feed/Stories";
import Post from "@/Component/Feed/Posts";
import MiniProfile from "@/Component/Feed/MiniProfile";

export default function Home() {
  return (
    <>
      <Stories />
      <Post />
      <MiniProfile
        userImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Savannah_Cat_portrait.jpg/1200px-Savannah_Cat_portrait.jpg"
        userName="jeri"
      />
    </>
  );
}
