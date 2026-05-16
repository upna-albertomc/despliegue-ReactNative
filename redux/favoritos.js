import * as ActionTypes from './ActionTypes';
export const favoritos = (state = {favoritos: []}, action) => {
    
    switch (action.type) {
        case ActionTypes.ADD_FAVORITO:
            if (!state.favoritos.some(el => el === action.payload)){
                return {favoritos: [...state.favoritos, action.payload]};
            }
            else{
                return state;
            }

        default:
            return state;
    }
};