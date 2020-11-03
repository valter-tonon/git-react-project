import { configureStore } from "@reduxjs/toolkit"

import repoReducer from './ducks/repos'
import listReducer from './ducks/repositorios'

export default configureStore({
    reducer: {
        repos: repoReducer,
        list: listReducer
    }
})

