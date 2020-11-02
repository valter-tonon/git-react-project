import api from '../../services/api'
import { addRepo } from '../ducks/repos'

export const getAllRepos = (user)=> {
    return dispatch => {

        api.get(''+user+'')
            .then((res)=> {
                dispatch(addRepo(res.data))
            }).catch(console.log)
            
        }
}

