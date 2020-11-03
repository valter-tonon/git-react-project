import { createAction, createReducer} from "@reduxjs/toolkit"

const INITIAL_STATE = []

export const listRepo = createAction('LIST_REPO')

export default createReducer(INITIAL_STATE, {
    [listRepo.type] : (state, action) => action.payload
})
