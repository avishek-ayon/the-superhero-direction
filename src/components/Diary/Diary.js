import React, { useEffect, useState } from 'react';
import Millionairebio from '../Millionairebio/Millionairebio';
import Totalworth from '../Totalworth/Totalworth';
import './Diary.css';

const Diary = () => {
    const [millionars, setMillionars] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("./millionaires.JSON")
            .then(res => res.json())
            .then(data => setMillionars(data))

    }, [])

    const handleToCart = (millionar) => {
        const newCart = [...cart, millionar]
        setCart(newCart);
    }

    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row gy-4 diary-millionar">
                    {
                        millionars.map(millionar => < Millionairebio
                            key={millionar.key}
                            millionar={millionar}
                            handleToCart={handleToCart}
                        ></Millionairebio>)
                    }
                </div>

            </div>

            <div className="networth-container col-md-3">
                <div className="cart">
                    <Totalworth cart={cart}></Totalworth>
                </div>
            </div>
        </div >
    );
};

export default Diary;