import React, { useState} from 'react'
import { Wrapper } from './styles'
import {SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt'
import {Link } from 'react-router-dom'

const Form = ()=>{
    const [nome, setNome] = useState({})

    return(
        <Wrapper>
                <input type="text" name='nome' placeholder="Nome do usuário GitHub" onChange={event=> setNome(event.target.value)}/>
                <Link to={encodeURI(nome)}>
                    <SearchAlt />
                </Link>
        </Wrapper>
    )
}

export default Form