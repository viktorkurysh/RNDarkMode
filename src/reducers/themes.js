const initialState = false;

export default (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_THEME':
            return action.payload
        default:
            return state
    }   
}