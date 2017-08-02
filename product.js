import React from 'react';
import {Link} from 'react-router-dom'
import "./product.css";
import underlines from "./underlines.svg";
/**
    This is a product. It is composed of images which shows the product and information about that product. 
    Product information is passed to component to render.

    The main function of this component is to correctly render variable size images. We want to be able to display variables aspect ratio photos.
    All images will have a fixed width which is variable with screen size. The images with be of variable height but centred along X axis in products list component.
    The product will expand to show the produc and show the link to the buy page.


    -------------------------
    Must set product css to 100% width/height otherwise largest image will set the height of all other image. Strange?
    @function
*/
export default function Product(props){
    let price = null;
	if(props.price !== null && props.price !== ""){
	    price = (
	        <Link to={{
                    pathname: '/buy',
                    state: { 
                        title: props.title,
                        description:props.description,
                        img:props.src,
                        price:props.price,
                        info:props.info 
                    }
                }} 
                className={"product__link"} >
                <span> 
                    {props.price} 
                </span> 
            </Link>
	    )
	}

    return (
        <div className={"product"}>
            <img src={props.src} className="product__image" alt="logo" />
            <div className={"product__info"}>
                 <h1 className={"product__name"}>{props.title}</h1>
                 <p className="product__description">{props.description}</p>
                 {price}
            </div>
        </div>
    )
}