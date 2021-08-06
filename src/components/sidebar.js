import React from 'react';
import {Link} from 'react-router-dom'
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
import { useGlobalContext } from '../context';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'block',
    height: '100vh',
    width: "20rem",
    paddingTop: "6.5rem",
    position: 'fixed',
    textAlign: "left",
    zIndex: 9
  },
  buttonContainer:{
    paddingLeft: "1rem",
    justifyContent: "left",
  },
  name:{
      marginLeft: "1rem"
  },
  link:{
      textDecoration : "none"
  },
  icon:{
    width: "2.5rem",
    height: "2.5rem",
    display : "grid",
    placeItems: "center",
    borderRadius : "20%"
  }
  

}));

export default function Sidebar() {
  const classes = useStyles();
  const {selectedServiceValue, setServiceValue} = useGlobalContext()

  const handleClick= (item) => {
    setServiceValue(item);
  };

  return (
    <div className={classes.root} id='tabBlock'>
        {NavConstants.map(navItem =>{
            const {id, name, icon, link, background} = navItem
            return <div key={id} className={classes.buttonContainer} className={classes.tabItem}  id='tabItem'>
                <Link to={link} className={classes.link}>
                    <Button id={selectedServiceValue.id == id ? 'btnActive' : 'btn'} value={id} 
                    onClick={()=>handleClick(navItem)} >
                        <span className={classes.icon} 
                        style={{background : background}}
                        >{icon}</span> <span className={classes.name}>{name}</span>
                    </Button>
                </Link>
                </div>
        })}
    </div>
  );
}



