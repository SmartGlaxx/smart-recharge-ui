import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import {NavConstants} from '../constants' 
import Button from '@material-ui/core/Button';
import {RechargeOptions} from './index'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {RechargeOptionsData} from '../constants'

// import '@fontsource/roboto';
 //import "@fontsource/alef"
import "@fontsource/raleway"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '90vh',
    width: "100%",
    position: 'fixed',
    zIndex: 9
  },
  root2: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "theme.palette.background.paper",
  },
  tabs: {
    borderRight: `1px solid  #fff`,
  },
  tabItem: {
    borderBottom: "1px solid  #fff",
    height: "5px",
    color: "#fff"
  }
}));

export default function Sidebar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const allNames = ['MTN','Airtel', 'Glo']

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Smart Recharge"
        className={classes.tabs}
        scrollButtons='desktop'

      >
        {
        NavConstants.map(navItem =>{
            const {id, name, icon} = navItem
            return <Tab label={name} {...a11yProps({id})} wrapped={true} icon={icon}
            className={classes.tabItem} style={{padding: "0rem"}} id='tabItem' key={id}/>
        })
        }
      </Tabs>
      {
        NavConstants.map(navItem =>{
            const {id, name, link, icon, options} = navItem
            return <TabPanel value={value} index={id} key={id}>
                 {allNames.map(itemName => {
                     return <div>
                         
                         <FormControlLabel
                            control={<Switch checked={checked} onChange={handleChange} />}
                            label="Show"
                        />
                        <div className={classes.container}>
                            <Grow in={checked}>
                            <Paper elevation={4} className={classes.paper}>
                                <svg className={classes.svg}>
                                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                                </svg>
                            </Paper>
                            </Grow>
                            {/* Conditionally applies the timeout prop to change the entry speed. */}
                            <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 1000 } : {})}
                            >
                            <Paper elevation={4} className={classes.paper}>
                                <svg className={classes.svg}>
                                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                                </svg>
                            </Paper>
                            </Grow>
                        </div> 
                         
                         </div>
                     
                 })}
        </TabPanel>
        })
      }
    </div>
  );
}


























import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import {NavConstants} from '../constants' 
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import '@fontsource/roboto';
 //import "@fontsource/alef"
import "@fontsource/raleway"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '90vh',
    width: "100%",
    position: 'fixed',
    zIndex: 9
  },
  root2: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "theme.palette.background.paper",
  },
  tabs: {
    borderRight: `1px solid  #fff`,
  },
  tabItem: {
    borderBottom: "1px solid  #fff",
    height: "5px",
    color: "#fff"
  }
}));

export default function Sidebar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Smart Recharge"
        className={classes.tabs}
        scrollButtons='desktop'

      >
        {
        NavConstants.map(navItem =>{
            const {id, name, icon} = navItem
            return <Tab label={name} {...a11yProps({id})} wrapped={true} icon={icon}
            className={classes.tabItem} style={{padding: "0rem"}} id='tabItem'/>
        })
        }
      </Tabs>
      {
        NavConstants.map(navItem =>{
            const {id, name, link, icon} = navItem
            return <TabPanel value={value} index={id} key={id}>
                 {name}
        </TabPanel>
        })
      }
    </div>
  );
}



