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
// import Mtn from '../assets/airtime/mtn.jpg'
// import Airtel from '../assets/airtime/airtel.jpg'
// import Glo from '../assets/airtime/glo.jpg'
// import NineMobile from '../assets/airtime/nineMobile.jpg'
import {Mtn, Airtel, Glo, NineMobile} from '../assets/airtime'

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
        background: "rgb(23, 29, 212)",
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
        marginTop: "7rem"
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

const Airtime =()=>{
    const {selectedServiceValue, 
        // setAirtimeNavItems, airtimeOptions
    } = useGlobalContext()
    const classes = useStyles()
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
      setChecked((prev) => !prev);
    },[])
  
    // const path = useParams()
  

    
    return <div className={classes.root}>
        <div className={classes.main}>
          <h2 className={classes.sectionHeading}>Buy Airtime</h2>
        <Grid container className={classes.container}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
            <Grow in={checked}>
            <Paper elevation={4} className={classes.paper}>
              <img src={Mtn} alt='MTN' className={classes.images}/>
              <h2>MTN</h2>
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
            <img src={Airtel} alt='Airtel' className={classes.images}/>
            <h2>Airtel</h2>
            </Paper>
            </Grow>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
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
            </Grid>
        </Grid>
        </div>
        <div className={classes.subHeading}>
          <h2 className={classes.sectionSubHeading}>Airtime Transcations</h2>
          <div>
            <Transactions />
          </div>
        </div>
    </div>
}

export default Airtime
