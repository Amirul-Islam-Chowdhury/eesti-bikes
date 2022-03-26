import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import { PopupWidget } from "react-calendly";

import { collection, addDoc, getDocs } from "firebase/firestore";
import firedb from "../firebaseConfig";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Celender from "../components/Celender";

function Home() {
  const [products, setproducts] = useState([]);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state=>state.cartReducer);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const users = await getDocs(collection(firedb, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);
      });

      setproducts(productsArray);

      console.log(productsArray);
    } catch (error) {
      console.log(error);
    }
  }
  function handleClick(){
    navigate('/productinfo/{$product.id}')
    
  }

  const addToCart=(product)=>{
    dispatch({type: "ADD_TO_CART", product});

  };

  return (
    <Layout>
      <Banner />

      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4">
                <div className="m-2 p-1 product position relative">
                  <div className="product-content">
                    <p>{product.name}</p>
                    <div className="text-center">
                      <img
                        src={product.imageURL}
                        alt=""
                        className="product-img"
                      />
                      <h2>${product.price} </h2>
                    </div>
                    <div className="product-actions">
                      <div className="d-flex">
                        <button onClick={addToCart}type="button" className="btn btn-primary">
                          
                          Add to cart
                        </button>
                        <button  onClick ={handleClick}>
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      <Celender/>

      
    </Layout>
  );
}

export default Home;
