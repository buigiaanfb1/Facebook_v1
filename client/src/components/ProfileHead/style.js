import { makeStyles } from "@material-ui/core";
import Cover from "../../common/images/content1.jpeg";
import Angry from "../../common/images/angry.png";

const useStyles = makeStyles((theme) => ({
  profileHead: {
    maxWidth: 1920,
    height: 530,

    background: "linear-gradient( #b9c4d7 -50%,var(--background-main))",
    marginTop: 56,
  },
  container: {
    maxWidth: 880,
    margin: "0 auto",
    width: "100%",
    height: "100%",
    // position: "relative",
    top: 0,
  },
  columnCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  profilePicture: {
    width: 940,
    height: 350,
    position: "relative",
  },
  cover: {
    width: "100%",
    height: 350,
  },
  coverImg: {
    width: "100%",
    height: "100%",
    borderRadius: "0px 0px 7px 7px",
  },
  changeCover: {
    textTransform: "none",
    width: 180,
    height: 40,
    fontSize: 8,
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "white",
    color: "var(--background-main)",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 7,
    fontWeight: 600,
    position: "absolute",
    right: 32,
    bottom: 20,
    translate: "backgroundColor 0.2s ease",
    "&:hover": {
      backgroundColor: "var(--primary-text)",
    },
  },
  cameraIcon: { color: "var(--background-main)" },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: "50%",
    border: "3px solid var(--background-main)",
    position: "absolute",
    bottom: -15,
    left: "50%",
    transform: "translateX(-50%)",
    boxSizing: "border-box",
    backgroundColor: "var(--background-main)",
  },
  avatarImg: {
    width: "100%",
    display: "block",
  },
  changeAvatar: {
    width: 40,
    height: 40,
    display: "block",
    backgroundColor: "var(--background-main)",
    borderRadius: "50%",
    color: "white",
    fontSize: 20,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: 15,
  },
  profileText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // marginTop: 30,
    // marginBottom: 60,
    height: 145,
  },
  profileName: {
    color: "#e4e6eb",
    fontSize: 32,
    fontWeight: 800,
  },
  profileIntro: {
    fontSize: 20,
    color: "#b0b3b8",
  },
  changeInfo: {
    color: "var(--button-blue)",
    fontSize: 18,
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  profileNav: {
    display: "flex",
    alignItems: "center",
    bottom: 0,
    height: 65,
    borderTop: "1px solid #3d3f41",
  },
  navItem: {
    display: "flex",
    padding: "0 15px",
    height: 45,
    lineHeight: "50px",
    backgroundColor: "transparent",
    color: "#b0b3b8",
    cursor: "pointer",
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#3a3b3c ",
    },
  },
  itemActive: {
    color: "var(--button-blue) ",
    position: "relative",

    "&:after": {
      content: '""',
      width: "100%",
      height: 3,
      backgroundColor: "var(--button-blue)",
      display: "block",
      position: "absolute",
      bottom: "-5px",
      left: 0,
      borderRadius: 5,
    },
  },

  friendNumber: { color: "#b0b3b8", marginLeft: 5 },
  dropIcon: {},
  addIcon: {
    marginRight: 10,
  },
  navAction: {
    padding: 10,
    display: "flex",
    cursor: "pointer",
    borderRadius: 5,
    height: 35,
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: "#3a3b3c",
    "&:hover": {
      backgroundColor: "#454647",
    },
  },
  navAdd: {
    backgroundColor: "var(--button-blue)",
    color: "#fff",

    "&:hover": {
      backgroundColor: "var(--color-blue)",
    },
  },
  fixIcon: {
    marginRight: 5,
  },
}));

export default useStyles;
