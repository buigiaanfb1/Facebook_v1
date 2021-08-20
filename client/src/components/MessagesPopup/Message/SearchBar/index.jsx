import React from 'react';
import { useStyles } from './styles';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Aa"
        // endAdornment={props.icon}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default SearchBar;
