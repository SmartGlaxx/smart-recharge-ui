import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {NavConstants} from '../constants' 
import { RechargeOptions } from '../index';
import {useGlobalContext} from '../context'

const useStyles = makeStyles((theme) => ({
    root: {
     marginLeft : "20rem",
     minHeight: "100vh",
     height: "auto",
     padding : "1rem",
     paddingTop : "6rem",
     paddingLeft : "1rem",
    // background : "#d5d5d5"
    },
    main:{
        height: "70vh",
        background: "white",
        borderRadius : "1rem",
        padding: "5rem",
        webkitBorderRadius: '1rem',
        borderRadius: '1rem',
        background: "#ffffff",
        webkitBoxShadow: "12px 12px 24px #d9d9d9,-12px -12px 24px #ffffff",
        boxShadow: "12px 12px 24px #d9d9d9,-12px -12px 24px #ffffff",
    },
    div1:{
        
    },
    div2:{

    }
 })
)

const PageDisplay =()=>{
    const {selectedServiceValue} = useGlobalContext()
    const classes = useStyles()
    return <div className={classes.root}>
        <div className={classes.main}>
        {NavConstants.map(navItem =>{
            const {id, name, icon} = navItem
            if(id === selectedServiceValue.id){
                return <>
                <div className={classes.div1}>
                    {name} disp
                </div>
                </>
            }
            
        })}
        </div>
    </div>
}

export default PageDisplay