import { createAction, createReducer} from "@reduxjs/toolkit"

const INITIAL_STATE = []

export const addRepo = createAction('ADD_REPO')
export const listRepo = createAction('LIST_REPO')

export default createReducer(INITIAL_STATE, {
    [addRepo.type] : (state, action) => [...state, action.payload],
    [listRepo.type] : (state,action) => [...state]
})
