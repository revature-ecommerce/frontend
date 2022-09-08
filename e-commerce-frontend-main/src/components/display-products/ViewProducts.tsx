import styled from 'styled-components';
import Navbar from '../navbar/Narbar';
import Product from '../../models/Product';
import React from 'react';
import { useLocation } from 'react-router-dom';

export type ProductDetailsProps = {} & React.HTMLAttributes<HTMLDivElement>

export const ViewProducts = () => { 
    const {state} = useLocation();
    const product = state as any as Product;
    console.log(state);
    return (
    <React.Fragment>
        <Navbar/>
        <h1>hello world</h1>
        <img src={product.image}/>
        <br/>
        {product.id}
        <br/>
        {product.name}
        <br/>
        {product.price}
        <br/>
        {product.quantity}
    </React.Fragment>
    );
}
