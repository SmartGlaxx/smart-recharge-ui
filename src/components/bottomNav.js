import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {BottomNavConstants} from '../constants';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    display:"none",
    position:'fixed',
    color:"white",
    background:"var(--background-color1)",
    bottom:"0",
    zIndex:"50",
    [theme.breakpoints.down('xs')]:{
        display:"block"
    }
  },
  btn:{
      color:"var(--text-color1)",
      '&$selected': {
        paddingTop: 6,
        color: theme.palette.primary.main,
      },
  }
}));

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} 
    onChange={handleChange} 
    className={classes.root}>
        {
            BottomNavConstants.map(navItem =>{
                const {id, name, link, icon, background} = navItem
                return   <Link key={id} to={link}>
                <BottomNavigationAction label={name} value={name} icon={icon} className={classes.btn}/>
                </Link>
            })
        }
    </BottomNavigation>
  );
}
