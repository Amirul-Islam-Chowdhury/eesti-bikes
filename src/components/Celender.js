import React from "react";
import { PopupButton, PopupWidget } from "react-calendly";

export default function Celender() {
  return (
    <div className="Celebder_button">
        
        <button
          style={{ display: "block", margin: "10px" }}
          onClick={() => this.setState({ isOpen: true })}
        >
            <PopupWidget
        url="https://calendly.com/aislamchy96/march-availity"
        rootElement={document.getElementById("root")}
        text="Book Your time !"
        textColor="1b1c1f"
        color="#063594"
        style={
            {
                
            }
        }
        
      />
          
        </button>
      
    </div>
  );
}
