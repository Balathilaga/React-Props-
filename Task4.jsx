import React from "react";

function Tast4 (){
     const isAvailable = false;

    if(isAvailable){
        return<h2>Product is Available</h2>;
    }
    else{
        return<h2>out of stock</h2>;
    }
}
export default Tast4