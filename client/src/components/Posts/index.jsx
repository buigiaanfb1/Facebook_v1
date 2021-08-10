import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import FacebookStyle from "../../componentsLoader/PostLoader";
import Post from "./Post";

const Posts = () => {
  const profilePosts = useSelector((state) => state.shareStore.profilePosts);
  const handleRenderPost = () => {
    return profilePosts
      .slice(0)
      .reverse()
      .map((post) => {
        return <Post key={uuidv4()} post={post} />;
      });
  };

  const handleNothing = () => {
    return (
      <>
        <FacebookStyle />
        <FacebookStyle />
        <FacebookStyle />
      </>
    );
  };

  return profilePosts ? handleRenderPost() : handleNothing();
};

export default Posts;
