import React, { useState } from 'react';
import './App.css';
import Product from "./Product";

function App() {
  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <div>
                <Product
                    fruit = "🍓 Aarbeien"
                />

                <Product
                    fruit = "🍌Bananen"
                />

               <Product
                   fruit = "🍏Appels"
               />

                <Product
                    fruit = "🥝Kiwi's"
                />


        </div>
    </>
  );
}

export default App;
