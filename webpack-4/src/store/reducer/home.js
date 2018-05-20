import * as types from '../content/index.js'
const initSate = {
    name:'home',
    data:null
}
const home = (state=initSate, actions) => {
    switch(actions.type){
        case types.SET_HOME_LIST:
        return {
            ...state,
            data:actions.data
        }
        default:return state
    }
}
export default home