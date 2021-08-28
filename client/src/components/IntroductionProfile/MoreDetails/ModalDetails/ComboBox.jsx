/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useStyles } from './ComboBoxStyles/styles';
import Axios from 'axios';

export default function ComboBox(props) {
  const classes = useStyles();
  const [cities, setCities] = useState();
  const [userChoice, setUserChoice] = useState();
  console.log(userChoice);

  useEffect(() => {
    handleFetchCity();
  }, []);

  const handleFetchCity = async () => {
    Axios({
      method: 'GET',
      url: `https://api.countrystatecity.in/v1/countries/VN/states`,
      headers: {
        'X-CSCAPI-KEY':
          'OTF2MXlwN3Y1UVgzQzhtSHRGcU5iWHFUWkxEQ2swMmZJNlRXbUp3cA==',
      },
    })
      .then((res) => {
        setCities(res.data);
      })
      .catch((err) => {
        setCities('Có lỗi xảy ra, vui lòng thử lại sau!');
      });
  };

  return (
    <Autocomplete
      classes={classes}
      id="combo-box-demo"
      options={cities}
      getOptionLabel={(option) => option.name}
      size="small"
      onChange={(event, newValue) => {
        setUserChoice({
          ...newValue,
        });
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          id="outlined-basic"
          label="Tỉnh/Thành phố hiện tại"
          variant="outlined"
          className={props.classes.textField}
          InputLabelProps={{
            className: props.classes.inputLabelProps,
          }}
        />
      )}
    />
  );
}
