import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chatItem: {
    // marginTop: 12,
    padding: 10,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    height: 75,
    borderRadius: 5,
    cursor: "pointer",
    position: "relative",

    "&:hover": {
      backgroundColor: "#3A3B3C",
    },
    "&:active": {
      backgroundColor: "#242F3C",
    },
    "&:hover > $chatItemAction": {
      display: "block",
    },
  },

  chatActive: {
    backgroundColor: "#242F3C",
  },
  userAvatar: {
    color: "white",
    width: 55,
    height: 55,
    position: "relative",
  },
  avatarImg: { width: "100%", borderRadius: "50%" },

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

  chatContent: {
    paddingLeft: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  contentTop: {},
  chatName: {
    color: "#e4e6eb",
    fontWeight: 500,
    fontSize: 18,
  },
  chatTime: { marginLeft: 8 },
  contentBot: { display: "flex", color: "#8E939B", fontWeight: 400 },
  chatItemAction: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: "#3e4042",
    textAlign: "center",
    lineHeight: "45px",
    position: "absolute",
    right: "7%",
    display: "none",
    "&:hover": {
      backgroundColor: "#525455",
    },
  },
}));

export default useStyles;
