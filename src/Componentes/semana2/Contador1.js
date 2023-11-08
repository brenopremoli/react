import React, { useState, useEffect } from 'react';
import './Contador.css';
import male from './imagens/male.png'
import female from './imagens/female.png'
import mais from './imagens/+.png'
import menos from './imagens/+.png'

function BotaoMais() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>{count}</button>
    )
}

function BotaoMenos() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count - 1);
    }

    return (
        <button onClick={handleClick}>{count}</button>
    )
}

function Elemento() {
  return (
    <>
      <img
        src={male}
        alt={'Foto homem'}
      />
      
      <BotaoMais />   
      <BotaoMenos /> 
      <img
        src={female}
        alt={'Foto homem'}
      />
      <BotaoMais />
      <BotaoMenos />

    </>
  );
}

export default Elemento;