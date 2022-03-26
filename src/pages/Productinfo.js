import React, { useEffect, useState } from "react";

import Layout from '../components/Layout'
import { getDoc,doc} from "firebase/firestore";
import firedb from "../firebaseConfig";
import { useParams } from "react-router";


function Productinfo() {

  const [product, setproduct] = useState();
  const params =useParams();

  useEffect(() => {
    getData()


  }, [])

  async function getData() {

    try {
      const productTemp = await getDoc(doc(firedb, "products" , params.productid));
      

      console.log(productTemp.data)
      setproduct(productTemp.data());




    } catch (error) {
      console.log(error);

    }
  }


  return (

    <Layout>
        <h1>
            Info
        </h1>

        {product && (<h1>{product.names}</h1>)}
    
    </Layout>


  )
}

export default Productinfo