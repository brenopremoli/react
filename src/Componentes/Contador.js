import React, { useState, useEffect } from 'react';
import './Contador.css';
import male from './imagens/male.png'
import female from './imagens/female.png'
import mais from './imagens/+.png'
import menos from './imagens/-.png'

export default function MyApp() {
    const [countMaisH, setCountMaisH] = useState(0);
    const [countMenosH, setCountMenosH] = useState(0);
    const [countH, setCountH] = useState(0);

    function handleClickMaisH() {
        setCountMaisH(countMaisH + 1);
    }
    function handleClickMenosH() {
        setCountMenosH(countMenosH - 1);
    }
    function handleClickH() {
        setCountH(countMaisH + countMenosH);
    }

    const [countMaisM, setCountMaisM] = useState(0);
    const [countMenosM, setCountMenosM] = useState(0);
    const [countM, setCountM] = useState(0);

    function handleClickMaisM() {
        setCountMaisM(countMaisM + 1);
    }
    function handleClickMenosM() {
        setCountMenosM(countMenosM - 1);
    }
    function handleClickM() {
        setCountM(countMaisM + countMenosM);
    }


    const [countT, setCountT] = useState(0);
    function handleClickT() {
        setCountT(countH + countM);
    }


return (
    <>
        <img
        src={male}
        alt={'Foto homem'}
      />
        <MyButtonMais count={countMaisH} onClick={handleClickMaisH} />
        <MyButtonMenos count={countMenosH} onClick={handleClickMenosH} />
        <MyButtonMenos count={countH} onClick={handleClickH} />
        <img
        src={female}
        alt={'Foto homem'}
      />
        <MyButtonMais count={countMaisM} onClick={handleClickMaisM} />
        <MyButtonMenos count={countMenosM} onClick={handleClickMenosM} />
        <MyButtonMenos count={countM} onClick={handleClickM} />

        <h2> <MyButtonMenos count={countT} onClick={handleClickT} /></h2>

    </>
)

}

function MyButtonMais({ count, onClick}) {
    return (
        <button> <img src={mais} alt="my image" onClick={onClick} />{count}</button>
    );
}

function MyButtonMenos({ count, onClick}) {
    return (
        <button> <img src={menos} alt="my image" onClick={onClick} />{count}</button>
    );
}



