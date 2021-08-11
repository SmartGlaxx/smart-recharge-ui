// import Button from '@material-ui/core/Button';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import {useGlobalContext} from '../context'
import {Link} from 'react-router-dom'
import {NavConstants} from '../constants' 
import {ServiceSearch} from '../components'
import {ServiceList} from '../constants'
import {Logo} from '../assets/hero'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position : "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex : '10'
  },
  navbar:{
    position :"relative",
    zIndex : '10'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  authBtn:{
    color: "var(--text-color1)"
  },
  logo:{
    background: "white",
    width:"3rem"
  },
  name:{
    margin: "auto 1rem"
  },
  showSerach:{
    color: "var(--text-color1)",
    height: '2rem',
    width:"1rem"
  }
}));


export default function Header() {
  const {searchValue, showSearchBar} = useGlobalContext()
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} id='navbar'>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            // onClick={showASidebar}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography className={classes.title} variant="h6" noWrap>
            <img src ={Logo} alt='SR' className={classes.logo} />
            <span className={classes.name} >Smart Recharge</span>
          </Typography>
          {auth ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Wallet</MenuItem>
                <MenuItem onClick={handleClose}>My Orders</MenuItem>
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menu>
            </div>)
          : <div>
              <Button onClick={handleClose} className={classes.authBtn}>Sign Up</Button>
              <Button onClick={handleClose} className={classes.authBtn}>Login</Button>
            </div>

        }
          <div className={classes.search}>
             <ServiceSearch />
          </div>
          <Button onClick={showSearchBar} className={classes.showSerach}><SearchIcon /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
