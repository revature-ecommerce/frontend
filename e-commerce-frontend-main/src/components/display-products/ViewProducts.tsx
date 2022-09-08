import styled from 'styled-components';
import Navbar from '../navbar/Narbar';
import Product from '../../models/Product';
import React from 'react';

export type ProductDetailsProps = {} & React.HTMLAttributes<HTMLDivElement>

interface productProps{
    products: Array<Product>,

}
 

export const ViewProducts = (props:productProps) => { 
   const theView = (products:Array<Product>) =>{
    return (
        <React.Fragment>
       <Navbar/>
        <div className="basket">
            {props.products.map(props => (
                <div key={props.id} className="basket-product">
                    {props.name}
                    {props.image}
                    {props.description}
                </div>

            ))}
            {/* <div className="big-img">
                <img className="big-img" src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"
                    alt=""></img>

            </div> */}


        </div> 
        </React.Fragment>


    );
    }
}