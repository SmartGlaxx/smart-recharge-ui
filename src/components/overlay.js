import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useGlobalContext } from '../context';

// const useStyles = makeStyles((theme) => ({    
//     position:"fixed",
//     background:"rgba(30,30,30, 0.5)",
//     top:"0",
//     left:'0',
//     right:"0",
//     bottom:"0",
//     zIndex:"5",
//     width:"100%",
//     margin: "auto",
//     display: "grid",
//     placeItems:"center",
//     [theme.breakpoints.up('sm')]:{
//         // width:"50vw",
//     },
// })
// )
        

const useStyles = makeStyles((theme) => ({
    overlay: {
    // zIndex: theme.zIndex.drawer + 1,
    // color: '#fff',

    position:"fixed",
    background:"rgba(60,60,60, 0.5)",
    top:"0",
    left:'0',
    right:"0",
    bottom:"0",
    zIndex:"10",
    width:"100vw",
    height:"100vh",
    margin: "auto",
    display: "grid",
    placeItems:"center",
    background: "rgba(5, 5, 5, 0.30 )",
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    // backdropFilter: 'blur( 4px )',
    // webkitBackdropFilter: 'blur( 4px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',

    [theme.breakpoints.up('sm')]:{
        // width:"50vw",
    },
  },
}));

export default function Overlay() {
  const {setSearchValue} = useGlobalContext()
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div onClick={()=>setSearchValue('')}>
      <div className={classes.overlay} open={open} onClick={handleClose}>
      </div>
    </div>
  );
}




    