import {FETCH_POSTS_SUCCESS} from "../actions/actions";

const initialState = {
  messages: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, messages: action.messages};
        default:
            return state;
    }
};

export default reducer;