import React, { useState } from 'react';
import { useStyles } from '../styles';
import { getFormatPresets } from '../../../firebase/data/getDocument';
import formatPresets from '../../../common/images/formatPresets.png';

const FormatPresets = () => {
  const classes = useStyles();
  const [presets, setPresets] = useState(null);
  const handleFetchFormatPresets = async () => {
    const res = await getFormatPresets('text-format-presets');
    if (res) {
      setPresets(res);
    }
  };

  const handleRenderPresets = () => {
    if (presets && presets.length > 0) {
      return presets.map((item, index) => {
        console.log(item);
        return (
          item.custom_thumbnail && (
            <img
              key={index}
              alt="format-presets"
              src={item.custom_thumbnail?.uri}
              className={classes.formatPresetsItem}
            />
          )
        );
      });
    }
  };
  return (
    <div className={classes.formatPresetsContainer}>
      <div>
        {!presets && (
          <img
            alt="format-presets"
            src={formatPresets}
            className={classes.formatPresetsTitle}
            onClick={handleFetchFormatPresets}
          />
        )}
        {handleRenderPresets()}
      </div>
    </div>
  );
};

export default FormatPresets;
