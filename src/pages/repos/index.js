import React ,{useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { getAllRepos } from '../../store/fetchActions'
import {Wrapper} from './styles'

const Repos = ()=>{
    const repos = useSelector((state) => state.repos)
    const dispatch = useDispatch()

    const url = window.location.href
    const url_id = url.slice(url.indexOf('&') + 1)
    
    useEffect(()=>{
        dispatch(getAllRepos(url_id))
    },[dispatch])
    
    console.log(repos)
    return(
        <Wrapper>
            <h1>Repositorios</h1>
            {
                repos.map(repo =>(
                    <div class='user' key={repo.id}>
                        <img src={repo.avatar_url} alt={repo.login}/>
                        <div class="user-details">
                            <h3><b>Usuário: </b>{repo.login}</h3>
                            <h3><b>Site: </b><a href={repo.blog}>{repo.blog}</a></h3>
                            <h3><b>Endereço: </b>{repo.location}</h3>
                            
                        </div>
                        
                    </div>
                ))
                
            }
        </Wrapper>
    )
  
}

export default Repos