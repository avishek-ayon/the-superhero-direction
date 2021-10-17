import React from 'react';
// font icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'
import './Millionairebio.css'

const Millionairebio = (props) => {
    const { image, name, age, company, netWorth } = props.millionar;
    const element = <FontAwesomeIcon icon={faHandPointer} />

    return (
        <div class="card col-3 cart-details" style={{ "width": "18rem;" }}>
            <img src={image} class="img-fluid rounded-circle image" alt="..." />
            <div class="card-body bg-green-500">
                <h2 class="card-title fw-bold">Name: {name}</h2>
                <h4 class="card-text">Age : {age}</h4>
                <h4 class="card-text">Company : {company}</h4>
                <h5 class="card-text">Networth : {netWorth} billion</h5>
                <br />
                <button
                    className="btn-regular"
                    onClick={() =>
                        props.handleToCart(props.millionar)}
                >{element}Add to List</button>
            </div>
        </div>


    );
};

export default Millionairebio;
