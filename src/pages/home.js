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
import {Transactions, ServiceSearch} from '../components'
import {ServiceList} from '../constants'
// import Mtn from '../assets/mtn.jpg'
// import Airtel from '../assets/airtel.jpg'
// import Glo from '../assets/glo.jpg'
// import NineMobile from '../assets/nineMobile.jpg'
import {Image1,Image2, SrImage} from '../assets/hero'

const useStyles = makeStyles((theme) => ({
    root: {
     marginLeft : "20rem",
    //  minHeight: "100vh",
     height: "auto",
     padding : "1rem",
     paddingTop : "0rem",
     paddingLeft : "1rem",
    // background : "#d5d5d5",
    [theme.breakpoints.down('xs')]:{
      marginLeft : "0rem",
      padding : "1rem",
    },
    [theme.breakpoints.down('sm')]:{
      paddingTop : "5rem",
    }
    },  
    backgnd:{
      position:'absolute',
      width:"100%"
    },
    main:{
        height: "auto",
        // marginTop:"10rem",
        background: "white",
        borderRadius : "1rem",
        // padding: "5rem",
        paddingTop: "3rem",
        webkitBorderRadius: '1rem',
        borderRadius: '1rem',
        // background: "var(--background-color3)",
        // background : "rgba(92, 51, 85)",
        //background: "linear-gradient(123deg, navy, rgba(173, 42, 147, 0.7))",
        // color :"var(--text-color1)",
        //webkitBoxShadow: "12px 12px 24px #d9d9d9,-12px -12px 24px #ffffff",
        //boxShadow: "12px 12px 24px #d9d9d9,-12px -12px 24px #ffffff",
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
      background: "red",
      marginTop : "3rem",
      [theme.breakpoints.down('sm')]:{
        margin : "1rem 0"
      }
      },
      subContainer:{
        marginTop:'0'
      },
      paper: {
        margin: theme.spacing(1),
        color: "black",
        display :"flex",
        // alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        padding: "0 1rem",
        position: "relative",
        textAlign:  "left",
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
      image1:{
        width: "20rem",
        zIndex: "9",
        top:"2rem",
        [theme.breakpoints.down('sm')]:{
          width:"15rem",
          top:"-2rem"
        },
        [theme.breakpoints.down('xs')]:{
          width:"12rem",
          top:"0rem"
        }
      },
      images2:{
          width:"100%"
      },
      packages : {
          display: "block",
          marginTop: "0",
          paddingTop: "0rem",
          background: "var(--background-color3)",
          height: "auto",
          position: "relative",
          [theme.breakpoints.down('sm')]:{
            marginTop: "-4rem",
          }
      },
      words:{
        height:"100%",
        padding: '20% 1rem',
        color:'var(--text-color2)',
        fontSize:"1.8rem",
        position:"relative",
        [theme.breakpoints.down("sm")]:{
          fontSize:"1.3rem"
        },
        [theme.breakpoints.down('xs')]:{
          fontSize : "1.3"
        }
      },
      word1:{
        margin:"0",
        lineHeight:"2.8rem",
      },
      subName:{
        margin:"0",
        fontWeight: "600",
        color : "var(--text-color3)",
        fontSize: "1.5rem",
        [theme.breakpoints.down('sm')]:{
          fontSize:"1.2rem"
        }
      },
      title:{
        fontWeight: "800",
        lineHeight: "2.5rem",
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
          color: "var(--text-color2)",
          fontSize: "1.3rem"
      },
      btn2:{
        fontWeight:"300",
        width: "10rem",
        margin: "0.3rem 0",
        color:"var(--text-color3)",
        background: "var(--background-color1)",
        background:"var(--text-color1)",
        boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.02),0 22.3px 17.9px rgba(0, 0, 0, 0.042),0 41.8px 33.4px rgba(0, 0, 0, 0.05)",
        '&:hover':{
          color:"var(--text-color1)",
          background: "var(--background-color1)",
        }
      },
      btn3:{
        heigth:"200vh",
        width: "100%",
        zIndex: "30",
        color:"var(--text-color1)",
        background: "var(--background-color1)",
        position:"absolute",
        boxShadow:"5px 10px 20px black",
        // [theme.breakpoints.up('md')]:{
        //   transform:"translate(90%, 200%)",
        // },
        '&:hover':{
          color:"var(--text-color3)",
          background: "var(--background-color3)",
        }
      },
      btnBox:{
        position:"absolute",
        left:'0',
        height:"3rem",
        width:"200%",
        margin: "auto",
        display: "flex",
        justifyContent:"right",
        [theme.breakpoints.up('sm')]:{
          // width:"50vw",
        },
      },
      linkBtn:{
        width:"100%",
        color:"var(--text-color1)",
        textDecoration: 'none',
        transform:"translateX(0%)",
        '&:hover':{
          color:"var(--text-color3)",
          background: "var(--background-color3)",
        },
        [theme.breakpoints.up('sm')]:{
          width:"50%",
          //marginLeft:"50%",

          transform:"translate(100%, 50%)",
        },
      },
      service:{
          marginTop: "0rem",
          display: "grid",
          placeItems: "center",
          [theme.breakpoints.down('sm')]:{
            marginTop: "4rem",      
          }
      },
      serviceDesc:{
        textAlign:'center'
      },
      subheader:{
        fontSize: "1.4rem",
        marginTop: "3rem",
        marginBottom: "1rem",
        textAlign : 'center',
      },
      serviceName:{
        marginBottom:"0rem"
      },
      about:{
        display: "flex",
        justifyContent: "center"
      }
 })
)

const Home =()=>{
    const {selectedServiceValue,searchValue} = useGlobalContext()
    const classes = useStyles()
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
      setChecked((prev) => !prev);
    },[])

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    

    return <div className={classes.root}>
        <div className={classes.main}>
        <Grid container className={classes.container} id="home-container">
          
          <Grid item xs={6}>
            <div className={classes.words}>
              <h1 className={classes.word1}>Smart Recharge</h1>
              <em className={classes.subName}>Get Airtime, Data, Cable TV Electricity in one place</em>

              {/* <div className={classes.btnBox}>
        {
          searchValue && ServiceList.map(item =>{
              const {id, title, link} = item
              const searchVal = searchValue.title
              const action = id > 9 ? "Pay for" : "Buy"
              if(title == searchVal){
                return <Link to='/' className={classes.linkBtn}>
                  <Button className={classes.btn3}>{action}<br />{title}</Button>
                  </Link>
              }
            })
        }
      </div> */}

            </div>

        </Grid>
        <Grid item xs={6}>
          <img src={Image1} alt='image1' className={classes.image1}/>
        </Grid>
        </Grid> 
        <div className={classes.packages}>
        <div className={classes.service}>
            <h2 className={classes.subheader}>Choose a Service to get started</h2>
            <Grid container className={classes.subContainer}> 
             <Grid item xs={6} sm={6} md={3}>
                <Grow in={checked}>
                <div className={classes.serviceDesc}>
                    <h3 className={classes.serviceName}>Buy Airtime</h3>
                    <Link to='/' className={classes.linkBtn}><Button className={classes.btn2}>MTN Airtime</Button></Link><br/>
                    <Link to='/' className={classes.linkBtn}><Button className={classes.btn2}>Airtel Airtime</Button></Link><br/>
                    <Link to='/' className={classes.linkBtn}><Button className={classes.btn2}>Glo Airtime</Button></Link><br/>
                    <Link to='/' className={classes.linkBtn}><Button className={classes.btn2}>9Moble Airtime</Button></Link><br/>
                </div>
                </Grow>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
                <Grow in={checked}>
                <div className={classes.serviceDesc}>
                    <h3 className={classes.serviceName}>Buy Data</h3>
                    <Link to='/' className={classes.linkBtn}><Button className={classes.btn2}>MTN Data</Button></Link><br/>
                    <Link to='/' className={classes.linkBtn}><Button className={classes.btn2}>Airtel Data</Button></Link><br/>
                    <Link to='/' className={classes.linkBtn}><Button className={classes.btn2}>Glo Data</Button></Link><br/>
                    <Link to='/' className={classes.linkBtn}><Button className={classes.btn2}>9Moble Data</Button></Link><br/>
                    <Link to='/' className={classes.linkBtn}><Button className={classes.btn2}>Smile Data</Button></Link><br/>
                </div>
                </Grow>
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
                <Grow in={checked}>
                <div className={classes.serviceDesc}>
                    <h3 className={classes.serviceName}>Pay Electricity Bill</h3>
                    <Link to='/'className={classes.linkBtn}><Button className={classes.btn2}>AEDC</Button></Link><br/>
                    <Link to='/'className={classes.linkBtn}><Button className={classes.btn2}>EKEDC</Button></Link><br/>
                    <Link to='/'className={classes.linkBtn}><Button className={classes.btn2}>IBEDC</Button></Link><br/>
                    <Link to='/'className={classes.linkBtn}><Button className={classes.btn2}>IKEDC</Button></Link><br/>

                    <Link to='/'className={classes.linkBtn}><Button className={classes.btn2}>JEDplc</Button></Link><br/>
                    <Link to='/'className={classes.linkBtn}><Button className={classes.btn2}>KEDCO</Button></Link><br/>
                    <Link to='/'className={classes.linkBtn}><Button className={classes.btn2}>KAEDCO</Button></Link><br/>
                    <Link to='/'className={classes.linkBtn}><Button className={classes.btn2}>PHED</Button></Link><br/>
                </div>
                </Grow>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
                <Grow in={checked}>
                <div className={classes.serviceDesc}>
                    <h3 className={classes.serviceName}>Cable TV Subscription</h3>
                    <Link to='/'className={classes.linkBtn}><Button className={classes.btn2}>DSTV</Button></Link><br/>
                    <Link to='/'className={classes.linkBtn}><Button className={classes.btn2}>GoTv</Button></Link><br/>
                    <Link to='/'className={classes.linkBtn}><Button className={classes.btn2}>Startimes</Button></Link><br/>
                </div>
                </Grow>
            </Grid> 
            </Grid>
        </div>
        <div>
            <h2 className={classes.subheader}>About Smart Recharge</h2>
            <Grid container >
            <Grid item xs={12} sm={6} md={6}>
                <Grow in={checked}>
                <img src={Image2} alt='image' className={classes.images2}/>
                </Grow>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Grow in={checked}>
                <p className={classes.about}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna orci, id pellentesque nulla mattis eu. Integer sit amet fermentum nibh. Nulla gravida sodales quam vel auctor. Praesent semper quis dui sit amet volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas volutpat tortor eget congue dignissim. Integer aliquam, lacus ut venenatis suscipit, lacus urna mattis mauris, ut varius est odio non enim. Curabitur tincidunt vitae odio eget malesuada. Phasellus eu ultrices diam. Etiam sit amet varius felis. Aenean eu.
                </p>
                </Grow>
            </Grid>
            </Grid>
        </div>
        </div>
        </div>
    </div>
}

export default Home
