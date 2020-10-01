import React from 'react';

const SelectedCountries = (props) => {
    const cart = (props.cart)
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const total = cart[i];
    //     totalPopulation = totalPopulation + total.population;
        
    // }
    const totalPopulation = cart.reduce((total, country) => total + country.population,0)
    return (
        <div>
            <h4>This is selected countries: {cart.length}</h4>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default SelectedCountries;