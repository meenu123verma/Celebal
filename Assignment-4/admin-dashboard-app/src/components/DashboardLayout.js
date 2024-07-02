import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core';
import Sidebar from './Sidebar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
          {/* Add more header components as needed */}
        </Toolbar>
      </AppBar>
      <Sidebar />
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
