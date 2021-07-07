import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  messenger: {
    marginTop: 56,
    backgroundColor: "var(--background-nav)",
    height: "100vh",
  },
  messLeft: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  leftTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 55,
  },
  topTitle: {
    color: "var(--primary-text)",
    fontSize: 22,
    fontWeight: 900,
    letterSpacing: 1,
  },
  leftAction: { display: "flex" },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#3a3b3c",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginRight: 10,
    "&:hover": {
      backgroundColor: "#525455",
    },
  },
  leftChatList: { paddingTop: 24 },
  messCenter: {
    borderLeft: "1px solid var(--border-bottom-nav)",
    borderRight: "1px solid var(--border-bottom-nav)",
  },
  messRight: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 15,
  },
  chatBoxInfo: { width: "100%" },
  userInfo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  userAvatarImg: { width: 85, height: 85, borderRadius: "50%" },
  userName: { color: "var(--primary-text)", fontSize: 16, fontWeight: 600 },
  chatBoxCustom: { width: "100%", padding: "0 10px" },
}));

export default useStyles;
