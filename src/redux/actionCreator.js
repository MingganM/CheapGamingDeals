export function payloadDispatcher(type){
    return payload => ({
        type: type,
        payload: payload
    })
}