import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {NavConstants} from '../constants' 
import { RechargeOptions } from '../components';
import {useGlobalContext} from '../context'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        height: "10rem",
        width:"100%",
        background:"var(--background-color1)",
        bottom:'0',
        position:"relative"
    }
 })
)

const Footer =()=>{
    const {selectedServiceValue} = useGlobalContext()
    const classes = useStyles()

    return <div className={classes.root} >
        footer
    </div>
}

export default Footer
