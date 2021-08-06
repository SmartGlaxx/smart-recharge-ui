import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {NavConstants} from '../constants' 
import { RechargeOptions } from '../components';
import {useGlobalContext} from '../context'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

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

const CableTv =()=>{
    const {selectedServiceValue} = useGlobalContext()
    const classes = useStyles()
    return <div className={classes.root}>
        <div className={classes.main}>
        {NavConstants.map(navItem =>{
            const {id, name, icon, options} = navItem
            if(id === selectedServiceValue){
                return <>
                <div className={classes.div1}>
                    {options.map(option =>{
                        return <Link to={`/airtime/${option}`}>
                            <Button>
                                {option}
                            </Button>
                        </Link>
                    })}
                </div>
                <div className={classes.div2}>
                    {name}
                </div>
                </>
            }
            
        })}
        </div>
    </div>
}

export default CableTv