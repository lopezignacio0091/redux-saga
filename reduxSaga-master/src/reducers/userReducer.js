import { types } from '../const/types';

const initialState = {
    loading: false,
    users: [],
    userSelect: {},
    error: false,
    mensajeError:''
}

export const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.SET_USERS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case types.SET_USER_BY_ID:

            return {
                ...state,
                loading: false,
                userSelect: action.payload
            }
        case types.SET_ERROR:

            return {

                ...state,
                error: true,
                mensajeError:action.payload

            }
        default:

            return state;

    }

}