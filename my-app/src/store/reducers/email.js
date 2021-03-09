import * as actionTypes from '../actions'

const initialState = {
    userEmail: ''
}

const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.Email:
            return {
                ...state,
                userEmail: action.payload
            }

        default:
            return state;
    }
}

export default emailReducer