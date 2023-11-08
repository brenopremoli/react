import React, { useState, useEffect } from 'react';
import './Contador.css';
import male from './imagens/male.png';
import female from './imagens/female.png';
import mais from './imagens/+.png';
import menos from './imagens/-.png';
import total from './imagens/total.png';
import zera from './imagens/zera.png';

export default function MyApp() {
  const [countMaisH, setCountMaisH] = useState(0);
  const [countMenosH, setCountMenosH] = useState(0);
  const [countH, setCountH] = useState(0);

  const [countMaisM, setCountMaisM] = useState(0);
  const [countMenosM, setCountMenosM] = useState(0);
  const [countM, setCountM] = useState(0);

  const [countT, setCountT] = useState(0);

  const contador = () => {
    setCountH(countMaisH + countMenosH);
    setCountM(countMaisM + countMenosM);
  };

  useEffect(() => {
    contador();
  }, [countMaisH, countMenosH, countMaisM, countMenosM]);

  useEffect(() => {
    setCountT(countH + countM);
  }, [countH, countM]);

  function handleClickMaisH() {
    setCountMaisH(countMaisH + 1);
  }

  function handleClickMenosH() {
    if (countH > 0) {
      setCountMenosH(countMenosH - 1);
    }
  }

  function handleClickMaisM() {
    setCountMaisM(countMaisM + 1);
  }

  function handleClickMenosM() {
    if (countM > 0) {
      setCountMenosM(countMenosM - 1);
    }
  }

  function handleZerar() {
    setCountMaisH(0);
    setCountMenosH(0);
    setCountH(0);
    setCountMaisM(0);
    setCountMenosM(0);
    setCountM(0);
    setCountT(0);
  }

  return (
    <div className="container">
      <h2>Homens ㅤㅤㅤㅤ Mulheres</h2>
      <div className="contador">
        <img src={male} alt={'Foto homem'} />
        <MyButtonMais count={countMaisH} onClick={handleClickMaisH} />
        <MyButtonTotal count={countH} onClick={contador} />
        <MyButtonMenos count={countMenosH} onClick={handleClickMenosH} />
      </div>
      <div className="counter">
        <img src={female} alt={'Foto mulher'} />
        <MyButtonMais count={countMaisM} onClick={handleClickMaisM} />
        <MyButtonTotal count={countM} onClick={contador} />
        <MyButtonMenos count={countMenosM} onClick={handleClickMenosM} />
      </div>
      <div className="total">
        <h2> <MyButtonTotal count={countT} onClick={contador} /></h2>
        <button onClick={handleZerar}><img src={zera}></img></button>
      </div>
    </div>
  );
}

function MyButtonMais({ count, onClick }) {
  return (
    <button>
      <img src={mais} alt="adição" onClick={onClick} /><h2></h2>
    </button>
  );
}

function MyButtonMenos({ count, onClick }) {
  return (
    <button>
      <img src={menos} alt="subtração" onClick={onClick} /><h2></h2>
    </button>
  );
}

function MyButtonTotal({ count, onClick }) {
  return (
    <button>
      <img src={total} alt="subtração" onClick={onClick} /><h2>{count}</h2>
    </button>
  );
}
