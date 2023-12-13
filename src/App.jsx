import React from 'react';
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  const productList = [
    { id: 1, nombre: 'Growth marketing', precio: 25.99 },
    { id: 2, nombre: 'Landing site', precio: 149.99 },
    { id: 3, nombre: 'SEO Optimization', precio: 5.49 },
    { id: 4, nombre: 'Asistance On Demand SaaS', precio: 5.49 },
    
  ];
  return (
    <div>
      <NavBar/>
      <ItemListContainer  greeting={"Welcome this is our market "}  productList={productList} />
    </div>
  );
};

export default App;
