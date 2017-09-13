# react-product-component

This component displays a picture along with name, description and price passed through props.
The main function of this component is to correctly render variable size images. We want to be able to display variables aspect ratio photos.
All photos must have the same height or they will leave large gaps when grouped together. They also must be about 300px width for mobile.
The product component must also have padding which is can expand into and centre into parent div.

## Installation
To install this component into your project run:

`npm install @mortonprod/react-product-component`

##Usage

Import the component like so(es6 syntax + bundler to package css in someway):
`
import Product from @mortonprod/react-product-component
import @mortonprod/react-product-component/dist/index.css
` 

Note you must pull the css independently of the component.

## Contributing

You are free to contribute to this component if you wish.
