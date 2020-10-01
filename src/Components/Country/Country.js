import React from 'react';

const Country = (props) => {
    const {name, capital, population,flag,region} = props.country;
    const flagStyle = {height: '50px'};
    const countryStyle = {border:'1px solid red', margin: '10px', padding: '10px'};
    const handleAddCountry =(props.handleAddCountry);
    
    return (
        <div style={countryStyle}>
            <h2>This is {name}</h2>
            <img style ={flagStyle} src={flag} alt=""/>
            <p>This country's population: {population}</p>
            <h3>This country capital: {capital}</h3>
            <h4>This is {region}</h4>
            <button onClick ={() => handleAddCountry(props.country)}>Add country</button>
            

        </div>
    );
};

export default Country;