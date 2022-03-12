import React from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";
import { PopupWidget } from "react-calendly";


function Home() {
  return (
    <Layout>



      <div className="page-head">
        <div className="page-title">Home</div>

     
      </div>

      <Card
      img='https://media.istockphoto.com/photos/mountain-biker-following-family-on-single-track-forest-trail-picture-id1273812424'
      title=' Bicycle'
      desctiption=' Hybride bicyle......'
      price='250'
      />

      

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
