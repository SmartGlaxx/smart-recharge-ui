import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import {Image1, Image3, Image5, Image10} from '../assets/hero'

export default function ImageSlide(props)
{
    var items = [
        // {
        //     id : 1,
        //     name: "Image1",
        //     image: Image1
        // },
        {
            id : 3,
            name: "Image3",
            image: Image3
        }
    ]

    return (
        <Carousel
        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                backgroundColor: 'red',
                borderRadius: 0
            }
        }} 
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div>
            {/* <h2>{props.item.name}</h2> */}
            <img src={props.item.image} alt={props.item.name} />
            {/* <p>{props.item.description}</p> */}

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </div>
    )
}
