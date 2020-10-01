import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Components/Country/Country';
import SelectedCountries from './Components/SelectedCountries/SelectedCountries';

function App() {
  const [countries, setCountries]=useState([]);
  const [selectedCountries, setSelectedCountries] =useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res =>res.json())
    .then(data =>setCountries(data))
    .catch (error => console.log(error))
  },[])
  const handleAddCountry = (country) => {
    const newSelectedCountries = [...selectedCountries, country];
    setSelectedCountries(newSelectedCountries);
  }
  return (
    <div className="App">
      <h1>Countries loaded: {countries.length}</h1>
      <h4>Country added: {selectedCountries.length}</h4>
      <SelectedCountries cart={selectedCountries}></SelectedCountries>
     
        {
          countries.map(country => <Country country= {country} handleAddCountry ={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      
      
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
