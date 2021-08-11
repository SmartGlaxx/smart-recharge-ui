import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useGlobalContext} from '../context'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    label: {
      display: 'block',
    },
    input:{
      color:"white",
      background:"var(--background-color3)",
      padding: "0 0.2rem",
      borderRadius:"0.2rem"
    },
    showSerach:{
      posiotn:"absolute",
      right:"0",
      width: "10px",
      background:"red"
    }
})
)

export default function ServiceSearch() {
  const {setSearchValue, serachBar} = useGlobalContext()
  const classes = useStyles()

  const setValue= (value)=>{
    setSearchValue(value)
  }


  return (
    <div style={{position:"relative"}}>
   {serachBar && <Autocomplete
      id="combo-box-demo"
      options={services}
      getOptionLabel={(option) => option.title}
      style={{ minWidth: 200}}
      onChange={(event,value)=>{setValue(value)}}
      renderInput={(params) => <TextField {...params} label=""  className={classes.input} placeholder='Search for a service'/>}
    />}
    </div>
  );
}

const services = [
  { title: 'MTN Airtime' },
  { title: 'Airtel Airtime' },
  { title: 'Glo Airtime' },
  { title: '9Mobile Airtime' },
  { title: 'MTN Data' },
  { title: 'Airtel Data' },
  { title: 'Glo Data' },
  { title: '9Mobile Data' },
  
  { title: 'Abuja Electricity Distribution (AEDC)' },
  { title: 'Eko Electricity Distribution (EKEDP)' },
  { title: 'Ibadan Electricity Distribution (IBEDC)' },
  { title: 'Ikeja Electricity (IKEDC)' },
  
  { title: 'Jos Electricity Distribution (JED plc)' },
  { title: 'Kaduna Electric Distribution (KADEDCO)' },
  { title: 'Kano Electricity Distribution (KEDCO)' },
  { title: 'Port Harcourt Electricity Distribution (PHED)' },
  { title: 'DSTV Subscription' },
  { title: 'Gotv Subscription' },
  { title: 'Startimes Subscription' }
]
