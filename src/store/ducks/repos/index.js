import { createAction, createReducer} from "@reduxjs/toolkit"

const INITIAL_STATE = []

export const addRepo = createAction('ADD_REPO')

export default createReducer(INITIAL_STATE, {
    [addRepo.type] : (state, action) => [...state, action.payload],
})
