import { configureStore } from "@reduxjs/toolkit"

import repoReducer from './ducks/repos'


export default configureStore({
    reducer: {
        repos: repoReducer
    }
})

