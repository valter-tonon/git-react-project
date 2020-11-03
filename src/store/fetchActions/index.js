import api from '../../services/api'
import { addRepo} from '../ducks/repos'
import {listRepo} from "../ducks/repositorios";

export const getAllRepos = (user)=> {
    return dispatch => {

        api.get(''+user+'')
            .then((res)=> {
                dispatch(addRepo(res.data))
            }).catch(console.log)
            
        }
}

export const ListRepositories = (user) => {
    return dispatch => {
        api.get(`${user}/repos`)
            .then((res)=> {
                dispatch(listRepo(res.data))
            }).catch(console.log)
    }
}

