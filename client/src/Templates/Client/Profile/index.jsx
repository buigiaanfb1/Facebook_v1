import React, { useEffect, useState } from "react";
import ProfileUp from "./../../../components/ProfileUp";
import Content from "./Content";
import { useDispatch } from "react-redux";

import { useStyles } from "./styles";

// BE (firebase)
import { projectFirestore } from "../../../firebase/config";
import { PROFILE_INFO, PROFILE_POSTS } from "../../../common/constants";
import { getDocumentPostProfile, getDocument } from "../../../firebase/data/getDocument";

const Profile = (props) => {
  console.log("profile render");
  const id = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
      getUserPosts();
      getProfileInfo();
  }, []);

  const getUserPosts = async () => {
    const res = await getDocumentPostProfile("user-posts", "posts", id);
    dispatch({
      type: PROFILE_POSTS,
      payload: res,
    });
  };

  const getProfileInfo = async () => {
    const res = await getDocument('users' , id);
    dispatch({
      type: PROFILE_INFO,
      payload: res,
    });
  }

  return (
    <div style={{ marginTop: "56px" }}>
      <ProfileUp />
      <Content />
    </div>
  );
};

export default Profile;
