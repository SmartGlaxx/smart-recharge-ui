import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder'
import Button from '@material-ui/core/Button'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import {BottomNavConstants} from '../constants'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { useGlobalContext } from '../context'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';

const useStyles = makeStyles((theme)=>({
  root: {
    width: "100%",
    height:"5rem",
    display:"none",
    position:'fixed',
    color:"white",
    position:"fixed",
    background:"var(--background-color1)",
    bottom:"0",
    zIndex:"50",
    [theme.breakpoints.down('xs')]:{
        display:"flex",
        alignItems:"space-between"
    }
  },
  btns:{
    padding:"0",
    display: "grid",
    placeItems:"center",
    // color:"var(--text-color1)",
  },
  btnName:{
    fontSize: "0.7rem",
    color:"var(--text-color1)",
    // color:"lightgray"
  },
  selected:{
    color:"var(--text-color4)",
    transform:"scale(1.6)",
    transition:"all 0.3s"
  },
  links:{
    color:"var(--text-color1)"
  }
}));

export default function BottomNav() {
  const {setMenu} = useGlobalContext()
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const selected = (newValue) => {
    setValue(newValue);
  };

  const showMenu =()=>{
    setMenu()
  }

  return (<Grid container className={classes.root}>
    {
      BottomNavConstants.map(item =>{
        const {id, name, icon, link} = item
        return  <Grid item xs={3} className={classes.btns} key={id}>
            <Button onClick={()=>selected(id)} className={classes.btns}>
              <Link to={link} className={ value == id ? `${classes.selected}` : `${classes.links}`}
               >{icon}</Link>
               <span className={classes.btnName}>{name}</span>
            </Button>            
          </Grid>
      }) 
    }
     <Grid item xs={3} className={classes.btns} >
       <span onClick={showMenu}>
     <Button onClick={()=>selected(4)} className={classes.btns}>
       <span className={classes.links}>
      <MoreHorizIcon/>
      </span>
      <span className={classes.btnName}>More</span>
    </Button>
    </span>
    </Grid>
  </Grid>
  )
}
