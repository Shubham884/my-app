import * as actionTypes from '../actions'

const initialState = {
    userPas: ''
}

const passReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.Password:
            return {
                ...state,
                userPas: action.payload
            }

        default:
            return state;
    }
}

export default passReducer