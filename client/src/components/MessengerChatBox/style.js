import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  messengerChatBox: { width: "100%" },
  boxHead: {
    height: 65,
    width: "100%",
    backgroundColor: "var(--background-nav)",
    boxShadow: "0 0 4px rgb(0,0,0,0.2)",
  },
  headLeft: {},
  infoBox: { display: "flex" },
  userAvatar: { position: "relative" },
  avatarImg: { width: 45, height: 45, borderRadius: "50%" },
  status: {
    width: 14,
    height: 14,
    borderRadius: "50%",

    border: "2.5px solid #3a3b3c",
    position: "absolute",
    right: 0,
    top: "70%",
  },
  online: { backgroundColor: "#31A24C" },
  offline: { backgroundColor: "#525455" },

  boxMid: {},
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default useStyles;
