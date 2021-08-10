import React from 'react'
import { useStyles } from "../styles";
import { Typography } from "@material-ui/core";
const Image = ({picturesArr}) => {
    const classes = useStyles();
    const handleRender1Picture = (picturesArr) => {
        return (
          <div className={classes.contentPicture}>
            <img src={picturesArr[0]} className={classes.picture} />
          </div>
        );
      };
    
      const handleRender2Picture = (picturesArr) => {
        return (
          <div className={classes.containerClipPath}>
            <div className={classes.path}>
              <img src={picturesArr[0]} />
            </div>
            <div className={classes.path}>
              <img src={picturesArr[1]} />
            </div>
          </div>
        );
      };
    
      const handleRender3Picture = (picturesArr) => {
        return (
          <>
            <div className={classes.contentPicture}>
              <img src={picturesArr[0]} className={classes.picture} />
            </div>
            <div
              className={classes.containerClipPath}
              style={{ margin: "0 -16px" }}
            >
              <div className={classes.path}>
                <img src={picturesArr[1]} />
              </div>
              <div className={classes.path}>
                <img src={picturesArr[2]} />
              </div>
            </div>
          </>
        );
      };
    
      const handleRender4Picture = (picturesArr) => {
        return (
          <div className={classes.containerClipPath}>
            <div className={classes.pathMax}>
              <img src={picturesArr[0]} />
            </div>
            <div className={classes.pathMax}>
              <img src={picturesArr[1]} />
            </div>
            <div className={classes.pathMax}>
              <img src={picturesArr[2]} />
            </div>
            <div className={classes.pathMax}>
              <img src={picturesArr[3]} />
            </div>
          </div>
        );
      };
    
      const handleRender5Picture = (picturesArr) => {
        return (
          <div className={classes.containerClipPath}>
            <div className={classes.pathMax}>
              <img src={picturesArr[0]} />
            </div>
            <div className={classes.pathMax}>
              <img src={picturesArr[1]} />
            </div>
            <div className={classes.pathMax}>
              <img src={picturesArr[2]} />
            </div>
            <div className={classes.pathMaxRelative}>
              <img src={picturesArr[3]} />
              <Typography className={classes.moreText}>+1</Typography>
            </div>
          </div>
        );
      };
    
      const checkHowManyPictures = (picturesArr) => {
        if (picturesArr && picturesArr.length > 0) {
          let length = picturesArr.length;
          let functionInString = `handleRender${length}Picture`;
          return eval(functionInString)(picturesArr);
        }
      };
    
    return (
        <div>
          {checkHowManyPictures(picturesArr)}
        </div>
    )
}

export default React.memo(Image);
