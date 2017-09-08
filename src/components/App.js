import React from 'react';
import PlacarContainer from './PlacarContainer';

let dados = {
    partida : {
        estadio : "Morumbi/SP",
        data: '09/09/17',
        horario: '19h'
    },
    casa : {
        nome: "São Paulo"
    },
    visitante : {
        nome: "Ponte Preta"
    }
}


export default class App extends React.Component {
    render() {
        //passando dados para os outros Componentes
        return <PlacarContainer {...dados} />

    }
}