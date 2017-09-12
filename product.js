import React from 'react';
import {Link} from 'react-router-dom'
//import  "./product.css";
/**
    This is a product. It is composed of images which shows the product and information about that product. 
    Product information is passed to component to render.

    The main function of this component is to correctly render variable size images. We want to be able to display variables aspect ratio photos.
    All photos must have the same height or they will leave large gaps when grouped together. They also must be about 300px width for mobile.
    The product component must also have padding which is can expand into and centre into parent div.

    To achieve these needs set padding to 30px for product to expand into and margin auto by default. If device width is less than 500px then reduce height of
    image to 250px with max-width 300(This might leave some images with broken aspect ratio).


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
            <img src={props.src} className={"product__image"} alt="logo" />
            <div className={"product__info"}>
                 <h1 className={"product__name"}>{props.title} </h1>
                 <h4 className={"product__description"}>{props.description} </h4>
                 <p className={"product__descriptionLong"}>{props.info.description} </p>
                 {price}
            </div>
        </div>
    )
}

Product.defaultProps={
	title:"Test title",
	description:"This is the test description",
	img:null,
	price:"test price",
	info:{size:"test size",weight:"test weight"}
}
