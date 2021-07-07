import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    cursor: "pointer",
    borderRadius: 5,
    padding: "0 10px",

    "&:hover": {
      backgroundColor: "var(--border-bottom-nav)",
    },
  },
  itemChild: {},

  expand: { display: "none" },
}));

export default useStyles;
