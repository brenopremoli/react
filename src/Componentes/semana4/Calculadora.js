import React, { useState } from 'react';
import './Calculadora.css';

export default function Calculadora() {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');

  const adicionar = (numero) => {
    setExpressao((expressaoAnterior) => expressaoAnterior + numero);
  };

  const calcular = () => {
    try {
      const resultadoCalculado = eval(expressao);
      setResultado(resultadoCalculado.toString());
      setExpressao(resultadoCalculado.toString());
    } catch (erro) {
      setResultado('Erro');
    }
  };

  const limpar = () => {
    setExpressao('');
    setResultado('');
  };

  const inverterSinal = () => {
    if (expressao !== '0' && expressao !== '') {
      setExpressao((expressaoAnterior) =>
        expressaoAnterior.startsWith('-') ? expressaoAnterior.substring(1) : `-${expressaoAnterior}`
      );
    }
  };

  return (
    <div id = "corpo">
      <p id="total">{expressao || resultado}</p>
      <div id="calculadora-container">
        <table>
          <tbody>
            <tr>
              <td><button className="cor2" onClick={limpar}>AC</button></td>
              <td><button className="cor2" onClick={inverterSinal}>+/-</button></td>
              <td><button className="cor2" onClick={() => adicionar('%')}>%</button></td>
              <td><button className="cor1" onClick={() => adicionar('/')}>/</button></td>
            </tr>
            <tr>
              <td><button className="cor3" onClick={() => adicionar('7')}>7</button></td>
              <td><button className="cor3" onClick={() => adicionar('8')}>8</button></td>
              <td><button className="cor3" onClick={() => adicionar('9')}>9</button></td>
              <td><button className="cor1" onClick={() => adicionar('*')}>*</button></td>
            </tr>
            <tr>
              <td><button className="cor3" onClick={() => adicionar('4')}>4</button></td>
              <td><button className="cor3" onClick={() => adicionar('5')}>5</button></td>
              <td><button className="cor3" onClick={() => adicionar('6')}>6</button></td>
              <td><button className="cor1" onClick={() => adicionar('-')}>-</button></td>
            </tr>
            <tr>
              <td><button className="cor3" onClick={() => adicionar('1')}>1</button></td>
              <td><button className="cor3" onClick={() => adicionar('2')}>2</button></td>
              <td><button className="cor3" onClick={() => adicionar('3')}>3</button></td>
              <td><button className="cor1" onClick={() => adicionar('+')}>+</button></td>
            </tr>
            <tr>
              <td><button className="botao0" onClick={() => adicionar('0')}>0</button></td>
              <td><button className="cor3" onClick={() => adicionar(',')}>,</button></td>
              <td><button className="cor1" onClick={calcular}>=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
