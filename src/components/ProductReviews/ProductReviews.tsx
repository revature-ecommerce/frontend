import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import './ProductReviews.css';
import Reviews from '../../models/Reviews';
import axios from 'axios';
import Product from '../../models/Product';
import { Link } from 'react-router-dom';

interface productProps {
  product: Product
}

export function ProductReviews(props: productProps) {

  let id:number = props.product.id;
  const apiurl='http://54.152.208.161:8080/api/review/new';
  const[users, setUsers] = useState({email : "", firstName : "", lastName : ""});
  const [reviews, setReviews]=useState<Reviews[]>([]);
  const[score, setScore] = useState("");
  const[text, setText]= useState("");
  
  useEffect (()=>{
      loadReviews();
      loadUser();
  }, []);

  const loadReviews=async()=>{
    const result =await axios.get("http://54.152.208.161:8080/api/review/name/"+id);
    setReviews(result.data);
 };


  const loadUser = async () => {

    var axios = require('axios');

    var config = {
        method: 'post',
        url: 'http://54.152.208.161:8080/auth/userprofile',   
        withCredentials:true
    };
      
    axios(config)
    .then(function (response: any) {
        setUsers(response.data);
    })
    .catch(function (error: any) {
      console.log(error);
    });    
};



const onSubmit=async(e:any)=>{ 
  e.preventDefault()
  createPost();
};

const createPost=()=>{
  var axios = require('axios');
  var data = {score:score,text:text,user:users.firstName,product:id};
  console.log(data);
  var config = {
          method: 'post',
          url: apiurl,
          headers: { 
            'Content-Type': 'application/json'
          },
          withCredentials:true,
          data : data
  };

  axios(config)
  .then(function (response:any) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error:any) {
    console.log(error);
  });
}

  return (
    <div className="main_container">
       <div className='row'>
                <div className='col'>

                    <h2 className='text-center m-4'>Review this Product</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='score' className='form-label'>
                            Rate this Product:
                        </label>
                        <select className='form-select' onChange={(e)=> setScore(e.target.value)}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option> 
                          <option value={5}>5</option> 
                        </select>    
                      
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='yourreview' className='form-label'>
                            Comments:
                        </label>
                        <input
                            type={"text"}
                            className="form-control2"
                            placeholder='Comments'
                            name="text"
                            onChange={(e)=> setText(e.target.value)}
                        />
                        
                    </div>
               
                    <br/>
                <button type='submit' className='btn btn-outline-primary mx-2'>Submit</button>
                <Link type='submit' className='btn btn-outline-danger mx-2' to="/">Cancel</Link>  
                  </form>
                </div>
            </div>

    <table className = 'rtable'>
      <thead className='rhead'>
        <tr>
          <th scope="col">Score</th>
          <th scope="col">User</th>
          <th scope="col">Comment</th>
        </tr>
      </thead>
    <tbody className='rbody'>
    {reviews.map((review, index) => (
    <tr>
      <td>{review.score}</td>
      <td>{review.user}</td>
      <td>{review.text}</td>
            
    </tr> 
    ))
}
  </tbody>
  </table>
</div>
  )
}

export default ProductReviews;


