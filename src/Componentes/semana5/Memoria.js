import React, { useState, useEffect } from 'react';
import './Memoria.css';

const embaralharArray = (array) => {
  const arrayEmbaralhado = [...array];
  for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j], arrayEmbaralhado[i]];
  }
  return arrayEmbaralhado;
};

const Memoria = () => {
  const cartas = [
    'https://efootballhub.net/images/efootball23/players/52783537565822_l.png',
    'https://efootballhub.net/images/efootball23/players/52787295560432_l.png',
    'https://efootballhub.net/images/efootball23/players/52785148107842_l.png',
    'https://efootballhub.net/images/efootball23/players/52778974109475_l.png',
    'https://efootballhub.net/images/efootball23/players/52785416510807_l.png',
    'https://efootballhub.net/images/efootball23/players/52785416547675_l.png'
  ];

  const [cartasEmbaralhadas, setCartasEmbaralhadas] = useState([]);
  const [cartasViradas, setCartasViradas] = useState([]);
  const [cartasCorrespondentes, setCartasCorrespondentes] = useState([]);

  useEffect(() => {
    setCartasEmbaralhadas(embaralharArray([...cartas, ...cartas]));
  }, []);

  const clickCarta = (indice) => {
    if (cartasViradas.length === 2) {
      return;
    }

    if (cartasViradas.includes(indice)) {
      return;
    }

    setCartasViradas([...cartasViradas, indice]);

    if (cartasViradas.length === 1) {
      if (cartasEmbaralhadas[cartasViradas[0]] === cartasEmbaralhadas[indice]) {
        setCartasCorrespondentes([...cartasCorrespondentes, cartasViradas[0], indice]);
        setCartasViradas([]);
      } else {
        setTimeout(() => {
          setCartasViradas([]);
        }, 1000);
      }
    }
  };

  const renderizarCarta = (indice) => {
    const virada = cartasViradas.includes(indice);
    const correspondente = cartasCorrespondentes.includes(indice);

    return (
      <div
        className={`carta ${virada ? 'virada' : ''} ${correspondente ? 'correspondente' : ''}`}
        key={indice}
        onClick={() => clickCarta(indice)}
      >
        <img
          src={virada || correspondente ? cartasEmbaralhadas[indice] : ''}
          alt={virada || correspondente ? 'Imagem da carta' : ''}
        />
      </div>
    );
  };

  return (
    <div className="jogo-da-memoria">
      {cartasEmbaralhadas.map((_, indice) => renderizarCarta(indice))}
    </div>
  );
};

export default Memoria;
