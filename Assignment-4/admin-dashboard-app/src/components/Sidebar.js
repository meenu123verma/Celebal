import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><TableChartIcon /></ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><InsertChartIcon /></ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><EventIcon /></ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Kanban Board" />
        </ListItem>
        {/* Add more ListItems for additional sections/pages */}
      </List>
      <Divider />
      {/* Additional sidebar components like settings or user info can be added here */}
    </Drawer>
  );
};

export default Sidebar;
