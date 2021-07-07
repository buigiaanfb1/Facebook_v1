import { makeStyles } from "@material-ui/core";
import { theme } from "../../common/theme";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    top: "56px",
    left: "0",
    minWidth: "350px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  wrapperItem: {
    margin: "0 8px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 0.5rem",
    borderRadius: "8px",
    transition: "all 0.1s",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "var(--hover-overlay)",
    },
  },
  itemPicture: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    marginRight: "12px",
    [theme.breakpoints.down("lg")]: {
      width: "28px",
      height: "28px",
    },
  },

  text: {
    fontSize: "15px",
    fontWeight: "700",
  },
}));
