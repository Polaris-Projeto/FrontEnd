import {Action } from './actions';

export interface TokenState {
    tokens: string,
    id: string
}

const initialState = {
    tokens: "",
    id:""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, id: state.id}
        }

        default:
            return state
    }
}