import React ,{useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { getAllRepos, ListRepositories } from '../../store/fetchActions'
import {Wrapper} from './styles'
import Menu from "../../components/Menu";
import Moment from 'react-moment'
import Repositorio from "../../components/repositorios";

const Repos = ({match})=>{
    const repos = useSelector((state) => state.repos)
    const listRepos = useSelector((state)=>state.list)
    const quantidade = useSelector((state)=>state.list.length)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllRepos(match.params.nome))
    },[dispatch])
    console.log(listRepos)
    return(
        <Wrapper>
           <Menu/>
            {
                repos.map(repo =>(
                    <div className='user' key={repo.id}>
                        <img src={repo.avatar_url} alt={repo.login}/>
                        <div className="user-details">
                            <div className='first-column'>
                                <h3><b>Usuário: </b>{repo.login}</h3>
                                <h3><b>Site: </b><a href={repo.blog}>{repo.blog}</a></h3>
                                <h3><b>Endereço: </b>{repo.location}</h3>
                                <h3><b>e-mail: </b>{repo.email}</h3>
                            </div>
                            <div className='second-column'>
                                <h3><b>Desde: </b>
                                    <Moment format='DD/MM/YYYY'>{repo.created_at}</Moment>
                                </h3>
                                <h3><b>Seguidores: </b>{repo.followers}</h3>
                                <h3><b>Seguindo: </b>{repo.following}</h3>
                            </div>
                        </div>
                        <div className='botao'>
                            <button onClick={() => (dispatch(ListRepositories(match.params.nome)))}>Ver Repositórios</button>
                        </div>

                    </div>
                ))
                
            }
            { listRepos.map(list => (
                <Repositorio nome={list.name} link={list.html_url} descricao={list.description}/>
            ))
                 }
        </Wrapper>
    )
  
}

export default Repos