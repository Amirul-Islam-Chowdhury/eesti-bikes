import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";
import { PopupWidget } from "react-calendly";
import { collection, addDoc, getDocs } from "firebase/firestore";
import firedb from "../firebaseConfig";
import { fireProducts } from "../fireProducts";


function Home() {


  const [products, setproducts] = useState([]);

  useEffect(() => {
    getData()


  }, [])




  async function getData() {

    try {
      const users = await getDocs(collection(firedb, "products"),);
      const productsArray = [];
      users.forEach((doc) => {

        const obj = {
          id: doc.id, ...doc.data()
        };
        productsArray.push(obj);
      });

      setproducts(productsArray);


      console.log(productsArray);

    } catch (error) {
      console.log(error);

    }
  }
















  return (


    <Layout>












      <div className="container">
        <div className="row">

          {
            products.map((product) => {

              return <div className="col-md-4">
                <div className="m-2 p-1 product " >
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="text-center">
                    <img src={product.imageURL} alt="" className="product-img" />

                  </div>
                  <div className="">
                    <h2>${product.price} </h2>
                    <div className="d-flex p-2">
                      <button type="button"className="btn btn-primary"> Add to cart</button>
                      <button type="button" class="btn btn-secondary">View </button>



          
                      </div>
                    </div>
                </div>

              </div>






            }
            )
          }


        </div>

      </div>














      <PopupWidget
        url="https://calendly.com/aislamchy96/march-availity"

        rootElement={document.getElementById("root")}
        text="Book Your time !"
        textColor="#ffffff"
        color="#00a2ff"
      />







    </Layout>
  );
}

export default Home;
