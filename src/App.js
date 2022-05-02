import React from 'react';
import './App.css';
import { Contatos } from './components/contatos';
import { Depoimentos } from './components/depoimentos';
import { Experiencia } from './components/experiencia';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { NavBar } from './components/nav';
import { Portfolio } from './components/portfolio';
import { Service } from './components/services';
import { Sobre } from './components/sobre';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Sobre />
      <Experiencia />
      <Service />
      <Portfolio />
      <Depoimentos />
      <Contatos />
      <Footer /> 
    </>
  );
}

export default App;
