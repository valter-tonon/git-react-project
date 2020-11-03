import React from 'react'
import {Link} from 'react-router-dom'
import {Wrapper} from './style'
import {GithubOutline} from '@styled-icons/evaicons-outline/GithubOutline'


const Menu = () => {
    return(
        <Wrapper>
            <div>
                <GithubOutline/>
                <label>valter-tonon</label>
            </div>
            <div>
                <a href='/'>início</a>
            </div>
        </Wrapper>
    )
}

export default Menu
