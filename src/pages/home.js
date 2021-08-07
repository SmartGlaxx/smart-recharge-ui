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
// import Mtn from '../assets/mtn.jpg'
// import Airtel from '../assets/airtel.jpg'
// import Glo from '../assets/glo.jpg'
// import NineMobile from '../assets/nineMobile.jpg'
import {Image} from '../assets/hero'

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
        height: "25rem",
        // marginTop:"10rem",
        background: "white",
        borderRadius : "1rem",
        // padding: "5rem",
        paddingTop: "3rem",
        webkitBorderRadius: '1rem',
        borderRadius: '1rem',
        background: "var(--background-color3)",
        // background : "rgba(92, 51, 85)",
        //background: "linear-gradient(123deg, navy, rgba(173, 42, 147, 0.7))",
        color :"var(--text-color1)",
        webkitBoxShadow: "12px 12px 24px #d9d9d9,-12px -12px 24px #ffffff",
        boxShadow: "12px 12px 24px #d9d9d9,-12px -12px 24px #ffffff",
        // [theme.breakpoints.down('xs')]:{
        //   padding: "5rem 1rem",
        //   paddingTop: "4rem",
        //   marginTop:"5rem",
        // },
        [theme.breakpoints.down('sm')]:{
          padding: "0rem 1rem",
          paddingTop: "1rem",
          // marginTop:"2rem",
        },
        [theme.breakpoints.down('xs')]:{
            padding: "0rem 0rem",
          }
    },
    container: {
      marginTop : "3rem",
      [theme.breakpoints.down('sm')]:{
        margin : "1rem 0"
      }
      },
      paper: {
        margin: theme.spacing(1),
        color: "black",
        display :"grid",
        placeItems: "center",
        height: "50vh",
        // padding: "1rem",
        position: "relative",
        textAlign:  "right",
        background: "none",
        boxShadow: "0, 0, 0 black",
        [theme.breakpoints.down('sm')]:{
        //   margin : "5rem 0"
        height: "40vh",
        zIndex: "7"
        }
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
        width: "100vw",
        position: "absolute",
        zIndex: "7",
        // top: "50%",
        // left : "1rem",
        // transform: "translateY(-50%)",
        // borderRadius: "0.6rem",
        // [theme.breakpoints.down('xs')]:{
        //   width: "13%",
        // },
        [theme.breakpoints.up('sm')]:{
            width: "50vw",
        }
      },
      packages : {
          display: "block",
          marginTop: "1vh",
          paddingTop: "4rem",
          background: "var(--background-color3)",
          height: "20rem",
          position: "relative"
        //   [theme.breakpoints.down('sm')]:{
        //       display : "block"
        //   }
      },
      heroWords:{
          color: "var(--text-color2)",
          paddingRight: "1rem",
          fontSize: "1.7rem",
          [theme.breakpoints.down('sm')]:{
            fontSize : "1.2rem"
         },
         [theme.breakpoints.down('xs')]:{
           fontSize : "1rem"
        }
      },
      title:{
        fontWeight: "800",
        lineHeight: "2rem",
        // [theme.breakpoints.down('sm')]:{
        //     fontSize : "1.2rem"
        //  },
        //  [theme.breakpoints.down('xs')]:{
        //    fontSize : "1rem"
        // }
      },
      subtitle:{
        fontWeight: "600",
         color: "var(--text-color3)",
         fontSize: "1.5rem",
         [theme.breakpoints.down('sm')]:{
           fontSize : "1.2rem"
        }
      },
      btn:{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          color: "var(--text-color1)",
          fontSize: "1.3rem"
      }
 })
)

const Data =()=>{
    const {selectedServiceValue, 
        // setDataNavItems, DataOptions
    } = useGlobalContext()
    const classes = useStyles()
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
      setChecked((prev) => !prev);
    },[])
  
    // const path = useParams()
  
    // Mtn, Airtel, Glo, NineMobile
    
    return <div className={classes.root}>
        <div className={classes.main}>
        <Grid container className={classes.container}>
            <Grid item xs={6} sm={6} md={6}>
                <Grow in={checked}>
                <div elevation={4} className={classes.paper}>
                <img src={Image} alt='Image1' className={classes.images}/>
                </div>
                </Grow>
                </Grid>
                
                <Grid item xs={6} sm={6} md={6}>
                <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
                >
                <div elevation={4} className={classes.paper}>
                <div className={classes.heroWords}>
                    <h1 className={classes.title}>Smart Recharge</h1>
                    <span className={classes.subtitle}>
                    <em >Get Airtime, Data, Electricity and Cable TV subscriptions in one place.</em> </span>
                </div>
                </div>
                </Grow>
            </Grid>
        </Grid> 
        <div className={classes.packages}>
        <Button className={classes.btn}>Buy Now</Button>
        </div>
        </div>
    </div>
}

export default Data
