import axios from 'axios';

export function fetchWithAxios(endpoint, dispatch, actionCreator, additionalCallback){
    axios.get(endpoint)
    .then(res => {
        dispatch(actionCreator(res.data)); //res.data will be the payload
        if(additionalCallback) additionalCallback();
    })
}