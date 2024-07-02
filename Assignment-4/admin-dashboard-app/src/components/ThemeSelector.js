import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem, IconButton } from '@material-ui/core';
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@material-ui/icons';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(1),
  },
}));

const ThemeSelector = () => {
  const classes = useStyles();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = (event) => {
    toggleTheme();
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="theme-selector-label">Theme</InputLabel>
        <Select
          labelId="theme-selector-label"
          id="theme-selector"
          value={theme}
          onChange={handleThemeChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="light">Light Theme</MenuItem>
          <MenuItem value="dark">Dark Theme</MenuItem>
        </Select>
      </FormControl>
      <IconButton
        color="inherit"
        aria-label={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        onClick={handleThemeChange}
        className={classes.iconButton}
      >
        {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </div>
  );
};

export default ThemeSelector;
