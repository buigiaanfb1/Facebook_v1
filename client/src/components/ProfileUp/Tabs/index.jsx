import React from 'react';
import { useStyles } from '../styles';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { TAB_PROFILE } from '../../../common/constants';
import { arrTab } from '../../../common/TabsProfileArray';

const Tabs = () => {
  const classes = useStyles();
  const tabCon = useSelector((state) => state.tabsStore.tabProfile);
  const dispatch = useDispatch();
  const handleChangeTab = (tabName) => {
    dispatch({
      type: TAB_PROFILE,
      payload: tabName,
    });
  };

  const handleRenderTabs = () => {
    // arrTab is import from common folder
    return arrTab.map((tab, index) => {
      return (
        <div
          className={`${
            tabCon === tab.cons ? classes.itemSelected : classes.item
          }`}
          key={index}
          onClick={() => handleChangeTab(tab.cons)}
        >
          <Typography
            className={`${
              tabCon === tab.cons ? classes.itemTextSelected : classes.itemText
            }`}
          >
            {tab.view}
          </Typography>
        </div>
      );
    });
  };
  return handleRenderTabs();
};

export default Tabs;
