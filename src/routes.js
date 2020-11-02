import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Repos from './pages/repos'


const Router = ()=>{
    return(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/repositorios/:nome' component={Repos}></Route>
        </Switch>
    </BrowserRouter>
    )
}

export default Router