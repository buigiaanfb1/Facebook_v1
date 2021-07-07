import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  child: {
    display: "flex",
    alignItems: "center",
    height: 45,
    cursor: "pointer",
    borderRadius: 5,
    padding: "0 10px",

    "&:hover": {
      backgroundColor: "var(--border-bottom-nav)",
    },
  },
  icon: { marginRight: 10 },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "auto",
  },
  themeChangeModal: {
    width: 340,
  },

  allModal: {
    borderRadius: "10px",
    backgroundColor: "var(--background-post)",
    "&:focus-visible": {
      outline: "none",
    },
  },

  headModal: {
    display: "flex",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderBottom: "1px solid var(--border-bottom-nav)",
  },
  title: {
    margin: "auto",
    color: "var(--primary-text)",
    fontSize: 20,
    fontWeight: 600,
  },
  closeIcon: {
    position: "absolute",
    right: 20,
    height: 40,
    width: 40,
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: "#3a3b3c",
    textAlign: "center",
    lineHeight: "39px",
  },
  botThemeChange: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridGap: "16px",
    margin: "16px 0",
  },
  colorItem: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    cursor: "pointer",
    padding: 0,
    margin: "0 auto",
    // marginTop: 20,
  },
  emojiChangeModal: {
    width: 360,
  },
  usedContainer: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
    // textAlign: "start",
    margin: "10px",
  },
  iconItem: { display: "block", fontSize: "25px", cursor: "pointer" },
  usedBorder: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emojiList: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto auto ",
  },
  nickNameChangeModal: { width: 500 },
  botNickName: {
    margin: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: 10,
    borderRadius: 10,

    "&:hover": {
      backgroundColor: "var(--border-bottom-nav)",
    },
  },
  friendInfo: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  avatar: { marginRight: 10 },
  changeField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    display: "none  ",
  },
  textField: {
    width: "22rem",
    backgroundColor: "transparent",
    color: "var(--primary-text)",
    margin: "10px",
    height: "50px",
    borderRadius: 10,
    paddingLeft: 10,

    "&:focus-visible": {
      outline: "none",
    },
  },
}));

export default useStyles;
