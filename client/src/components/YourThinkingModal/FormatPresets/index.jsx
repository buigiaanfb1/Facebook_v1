import React, { useState } from 'react';
import { useStyles } from '../styles';
import { getFormatPresets } from '../../../firebase/data/getDocument';
import formatPresets from '../../../common/images/formatPresets.png';

const FormatPresets = (props) => {
  const classes = useStyles();
  const [presets, setPresets] = useState(null);
  const handleFetchFormatPresets = async () => {
    const res = await getFormatPresets('text-format-presets');
    if (res) {
      setPresets(res);
    }
  };

  const handleChoosePresets = (item) => {
    props.handleSetTextPresetsFromChild(item.background_image.uri, item.color);
  };

  const handleResetPresets = () => {
    props.handleResetPresetsFromChild();
  };

  const handleRenderPresets = () => {
    if (presets && presets.length > 0) {
      return presets.map((item, index) => {
        if (item.custom_thumbnail) {
          return item.custom_thumbnail && index !== 0 ? (
            <div
              className={classes.item}
              onClick={() => handleChoosePresets(item)}
              key={index}
            >
              <img
                alt="format-presets"
                src={item.custom_thumbnail?.uri}
                className={classes.formatPresetsItem}
              />
            </div>
          ) : (
            <div
              className={classes.item}
              onClick={() => handleResetPresets()}
              key={index}
            >
              <div className={classes.resetPresets}></div>
            </div>
          );
        }
      });
    }
  };
  return (
    <div className={classes.formatPresetsContainer}>
      {!presets && (
        <div>
          <img
            alt="format-presets"
            src={formatPresets}
            className={classes.formatPresetsTitle}
            onClick={handleFetchFormatPresets}
          />
        </div>
      )}
      {handleRenderPresets()}
    </div>
  );
};

export default React.memo(FormatPresets);
