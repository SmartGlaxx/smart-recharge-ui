import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {useGlobalContext} from '../context'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {ServiceList} from '../constants'

const useStyles = makeStyles((theme) => ({
    btn3:{
        minWidth: "13rem",
        width:"auto",
        zIndex: "10",
        color:"var(--text-color1)",
        background: "var(--background-color1)",
        position:"fixed",
        //boxShadow:"12px 12px 24px #b2b8c9,-12px -12px 24px #f0f8ff",
        transform:"translate(-50%)",
        marginLeft:'50%',
        marginTop:"20%",
        [theme.breakpoints.down('xs')]:{
            marginTop:"70%",
        },
        // [theme.breakpoints.up('md')]:{
        //     width:"30%",
        //     marginLeft:"65%",
        //     marginTop:"10rem"
        //   },
        '&:hover':{
          color:"var(--text-color3)",
          background: "var(--background-color3)",
        }
      },
    // btnBox:{
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
    // },
    linkBtn:{
        width:"100%",
        color:"var(--text-color1)",
        textDecoration: 'none',
        // transform:"translateX(0%)",
        '&:hover':{
          color:"var(--text-color3)",
          background: "var(--background-color3)",
        },
        // [theme.breakpoints.up('sm')]:{
        //   width:"50%",
        //   //marginLeft:"50%",

        //   transform:"translate(100%, 50%)",
        // },
      },

    })
)


export default function SearchResult(){
    const {searchValue} = useGlobalContext()
    const classes = useStyles()


    return <div >
    {
       ServiceList.map(item =>{
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
  </div>
}
