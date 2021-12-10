import { types } from "../const/types"

export const setLoading = () => {
    return ({ type: types.SET_LOADING })
}

export const getAllUsers = payload => ({
    type: types.GET_USERS,
    ...payload
});


export const getHeroebyId = id => ({
    type: types.GET_HEREO_BY_ID,
    payload: id
});