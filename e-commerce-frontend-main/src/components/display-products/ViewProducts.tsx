import Navbar from '../navbar/Narbar';
import Product from '../../models/Product';
import React from 'react';
import { useLocation } from 'react-router-dom';
import './ViewProducts.css';
import { ViewCart } from './ViewCart';


export type ProductDetailsProps = {} & React.HTMLAttributes<HTMLDivElement>

export const ViewProducts = () => { 
    const {state} = useLocation();
    const product = state as any as Product;
    console.log(state);


    return (
    <React.Fragment>
        <Navbar/>
        <div className='view'>
            <p className='view-img'>
                <img src={product.image}/>
            </p>
            <div className='view-flexboxright'>
            <p className='view-name'>
                {product.name}
                <br/>
            </p>
            <p className='view-text'>
                {product.description}
                <br/>
            </p>
            <p className='view-price'>
                <p>${product.price}.00</p>
                <br/>
            </p>
            <p className='view-cart'>
            <ViewCart product={product} key={product.id} />
            </p>
            </div>
        </div>
    </React.Fragment>
    );
}
