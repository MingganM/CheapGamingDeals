import { createStore } from 'redux';

const mainState = {
    stores: [],
    currentGame: [],
    curDealsPageNum: 0,
    dealsToShow: []
};

function mainReducer(state = mainState, action){
    switch(action.type){
        case "SET_STORES":
            return {
                ...state,
                stores: action.payload
            }
        case "SET_SINGLEGAME":
            return {
                ...state,
                currentGame: action.payload
            }
        case "SET_DEALSTOSHOW":
            return {
                ...state,
                dealsToShow: action.payload
            }
        case "CHANGE_CURDEALSPAGE":
            return {
                ...state,
                curDealsPageNum: action.payload
            }
        default:
            return { ...state }
    }
}

export const store = createStore(mainReducer, mainState);