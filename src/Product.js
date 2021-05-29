import React, { useState } from "react";

function Product({fruit}) {
    const [number, setNumber] = useState(0);
    return(
            <div>
                <label>{fruit}</label>
                <button className="minus" onClick={() => setNumber(number - 1)}>-</button>
                {number}
                <button onClick={() => setNumber(number + 1)}>+</button>
            </div>
    );

}


export default Product;