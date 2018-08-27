import * as home from '../types/home-types'
let defaultState = {
    homeId:0,
    name:'tchome'
};
export const homeData = (state=defaultState,action = {})=>{
    switch(action.type){
        case home.CHANGENAME:
            return {...state,...{name:action.newName}};
        default:
            return state;
    }
}