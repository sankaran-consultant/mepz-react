


export function reqStatusReducer(state = {}, action) {

    switch (action.type) {
        case 'REQUEST_BEGIN': {
            return Object.assign({}, state, { message: action.message })
        }
        case 'REQUEST_FINISHED': {
            return Object.assign({}, state, { message: action.message })
        }
        default:
            return state;
    }

}