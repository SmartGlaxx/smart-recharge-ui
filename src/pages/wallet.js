import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {NavConstants} from '../constants' 
import { RechargeOptions } from '../components';
import {useGlobalContext} from '../context'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import {Transactions} from '../components'
// import Mtn from '../assets/Wallet/mtn.jpg'
// import Airtel from '../assets/Wallet/airtel.jpg'
// import Glo from '../assets/Wallet/glo.jpg'
// import NineMobile from '../assets/Wallet/nineMobile.jpg'
// import {Mtn, Airtel, Glo, NineMobile} from '../assets/Wallet'

const useStyles = makeStyles((theme) => ({
    root: {
     marginLeft : "20rem",
     minHeight: "100vh",
     height: "auto",
     padding : "1rem",
     paddingTop : "6rem",
     paddingLeft : "1rem",
    // background : "#d5d5d5",
    [theme.breakpoints.down('xs')]:{
      marginLeft : "0rem",
      padding : "1rem",
      paddingTop : "6rem",
    }
    },
    main:{
        height: "5rem",
        borderRadius : "1rem",
        padding: "5rem",
        paddingTop: "3rem",
        webkitBorderRadius: '1rem',
        borderRadius: '1rem',
        background: "var(--background-color1)",
        background: "linear-gradient(123deg, navy, rgba(4, 88, 92, 0.7))",
        color :"var(--text-color1)",
        webkitBoxShadow: "12px 12px 24px #d9d9d9,-12px -12px 24px #ffffff",
        boxShadow: "12px 12px 24px #d9d9d9,-12px -12px 24px #ffffff",
        // [theme.breakpoints.down('xs')]:{
        //   padding: "5rem 1rem",
        //   paddingTop: "4rem",
        //   marginTop:"5rem",
        // },
        [theme.breakpoints.down('sm')]:{
          padding: "5rem 1rem",
          paddingTop: "4rem",
          // marginTop:"2rem",
        }
    },
    container: {
      marginTop : "3rem",
      [theme.breakpoints.down('xs')]:{
        margin : "3rem 0"
      }
      },
      paper: {
        margin: theme.spacing(1),
        color: "black",
        display :"grid",
        placeItems: "center",
        height: "6rem",
        position: "relative"
        // [theme.breakpoints.down('xs')]:{
        //   margin : "5rem 0"
        // }
      },
      svg: {
        // width: 100,
        // height: 100,
        color: "black"
      },
      polygon: {
        fill: 'yellow',
        stroke: theme.palette.divider,
        strokeWidth: 1,
      },
      sectionHeading:{
        fontSize: "2rem",

      },
      subHeading:{
        marginTop:"5rem",
        position: 'relative',
        [theme.breakpoints.down('sm')]:{
          marginTop:"6rem",
        },
        [theme.breakpoints.down('xs')]:{
          marginTop:"15rem",
        }
      },
      images:{
        width: "2.5rem",
        position: "absolute",
        top: "50%",
        left : "1rem",
        transform: "translateY(-50%)",
        borderRadius: "0.6rem",
        // [theme.breakpoints.down('xs')]:{
        //   width: "13%",
        // },
        // [theme.breakpoints.down('md')]:{
        //   width: "25%",
        // }
      }
 })
)

const Wallet =()=>{
    const {selectedServiceValue, 
        // setWalletNavItems, WalletOptions
    } = useGlobalContext()
    const classes = useStyles()
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
      setChecked((prev) => !prev);
    },[])
  
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    // const path = useParams()
  

    
    return <div className={classes.root}>
        <div className={classes.main}>
          <h2 className={classes.sectionHeading}>My Wallet</h2>
        <Grid container className={classes.container}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
            <Grow in={checked}>
            <Paper elevation={4} className={classes.paper}>
              {/* <img src={Mtn} alt='MTN' className={classes.images}/> */}
              <h2>Wallet Balance</h2>
            </Paper>
            </Grow>
            </Grid>
            {/* Conditionally applies the timeout prop to change the entry speed. */}
            <Grid item xs={12} sm={6} md={3} lg={3}>
            <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
            >
            <Paper elevation={4} className={classes.paper}>
            {/* <img src={Airtel} alt='Airtel' className={classes.images}/> */}
            <h2>Fund Wallet</h2>
            </Paper>
            </Grow>
            </Grid>
            {/* <Grid item xs={12} sm={6} md={3} lg={3}>
            <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 2000 } : {})}
            >
            <Paper elevation={4} className={classes.paper}>
            <img src={Glo} alt='Glo' className={classes.images}/>
            <h2>Glo</h2>
            </Paper>
            </Grow>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
            <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 3000 } : {})}
            >
            <Paper elevation={4} className={classes.paper}>
            <img src={NineMobile} alt='9Mobile' className={classes.images}/>
            <h2>9 Mobile</h2>
            </Paper>
            </Grow>
            </Grid> */}
        </Grid>
        </div>
        <div className={classes.subHeading}>
          <h2 className={classes.sectionSubHeading}>Wallet History</h2>
          <div>
            <Transactions />
          </div>
        </div>
    </div>
}

export default Wallet
