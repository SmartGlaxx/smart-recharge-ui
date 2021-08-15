import React, {useState,useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {NavConstants} from '../constants' 
import TextField from '@material-ui/core/TextField';
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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
        background: "linear-gradient(123deg, navy, rgba(23, 29, 212, 0.7))",
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
    //   svg: {
    //     // width: 100,
    //     // height: 100,
    //     color: "black"
    //   },
    //   polygon: {
    //     fill: 'yellow',
    //     stroke: theme.palette.divider,
    //     strokeWidth: 1,
    //   },
      sectionHeading:{
        fontSize: "2rem",
      },
    //   subHeading:{
    //     marginTop:"5rem",
    //     position: 'relative',
    //     [theme.breakpoints.down('sm')]:{
    //       marginTop:"13rem",
    //     },
    //     [theme.breakpoints.down('xs')]:{
    //       marginTop:"27rem",
    //     }
    //   },
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
      },
      dir1:{
          fontSize:'2rem'
      },
      dir2:{
        float: "right",
        fontSize:'2rem'
    },
    form: {
        width:"100%",
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
      navBtn:{
          color:"var(--text-color1)"
      },
      formBlock:{
        width:"95%",
        [theme.breakpoints.up('sm')]:{
            width:"65%"
        },
        [theme.breakpoints.up('md')]:{
            width:"50%"
        }
      }
 })
)

const AirtimeDetails =()=>{
    const {setPaymentValues} = useGlobalContext()
    const classes = useStyles()
    const serviceName = useParams().name
    const [checked, setChecked] = React.useState(false);
    const [formValue, setFormValue] = useState({serviceName})


    useEffect(() => {
      setChecked((prev) => !prev);
    },[])

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  
    const setValue =(e)=>{
        const name = e.target.name
        const value = e.target.value

        setFormValue(prev =>{
            return {...prev, [name]: value}
        })
    }
    const makePayment =()=>{
        if(formValue.serviceName && formValue.number && formValue. email && formValue.amount){
            setPaymentValues(formValue)
        }
    }

    
    
    const firstLetter = serviceName[0].toUpperCase()
    const otherLetters = serviceName.slice(1).toLowerCase()
    const name = firstLetter + otherLetters
    let logoName = ''
    
    if(name == "Mtn"){
        logoName = Mtn
    }
    else if(name == "Airtel"){
        logoName = Airtel
    }
    else if(name == "Glo"){
        logoName = Glo
    }
    else if(name == "9mobile"){
        logoName = NineMobile
    }

    return <div className={classes.root}>
        <div className={classes.main}>
            <Link to='/airtime' className={classes.navBtn}>
                <ArrowBackIosIcon className={classes.dir1}/>
            </Link>
            <Link to='/payment' className={classes.navBtn}>
                <ArrowForwardIosIcon className={classes.dir2}/>
            </Link>
          <h2 className={classes.sectionHeading}>{name == 'Mtn' ? "MTN" : firstLetter + otherLetters } Airtime VTU</h2>
        <Grid container className={classes.container}>
            <Grid item xs={12} >
            <Grow in={checked}>
            <Paper elevation={4} className={classes.paper}>
              <img src={logoName} alt='MTN' className={classes.images}/>
              <h2>{name == 'Mtn' ? "MTN" : firstLetter + otherLetters }</h2>
            </Paper>
            </Grow>
            </Grid>

        </Grid>
        <form className={classes.form} noValidate autoComplete="off">
        <div className={classes.formBlock}>
            <TextField required  id="standard-number" label="Phone Number" name='number'
            value={formValue.number} style={{width:"100%"}} onChange={setValue}/>
        </div>
        <div className={classes.formBlock}>
            <TextField required id="standard-required" label="Email"  name='email' 
            value={formValue.email} style={{width:"100%"}} onChange={setValue}/>
        </div>
        <div className={classes.formBlock}>
            <TextField required id="standard-required" label="Amount" name='amount'
            value={formValue.amount} style={{width:"100%"}} onChange={setValue}/>
        </div>
        <Grid container>
            <Grid item>
                <Button><Link to='/airtime'>Cancel</Link></Button>
            </Grid>
            <Grid item>
                <Link to='/payment'>
                    <Button onClick={makePayment}>Continue</Button>
                </Link>
            </Grid>
        </Grid>
        </form>
    </div>
    </div>
}

export default AirtimeDetails

