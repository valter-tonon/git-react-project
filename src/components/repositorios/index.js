import React from 'react'
import {Wrapper} from "./style";

const Repositorio = (props) =>{
    return(
        <Wrapper>
            <label><b>Nome do repositório: </b> {props.nome}</label>
            <label><b>Descrição: </b>{props.descricao}</label>
            <a href={props.link} target='_blank'><b>Url: </b> {props.link}</a>
        </Wrapper>
    )
}

export default Repositorio