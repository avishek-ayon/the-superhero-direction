import React from 'react';
import './Totalworth.css'

const Totalworth = (props) => {
    console.log(props.cart)
    const { cart } = props;
    let total = 0;

    // total add person
    for (const millionar of cart) {
        total = total + millionar.netWorth;

    }
    return (
        <div className="add-millionar">
            <h1>Milllionaries added : {cart.length}</h1>
            <h3><span className="text-warning">Total worth:$</span> {total.toFixed(2)} billion</h3>

            {
                cart.map(carts => <li className="bg-success">{carts.name}</li>)
            }
        </div >
    );
};

export default Totalworth;