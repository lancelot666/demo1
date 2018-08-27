import * as user from '../types/user-types';
let defaultState = {
    userId:0,
    userName:'Lancelot'
};
export const userData = (state=defaultState,action = {})=>{
    switch(action.type){
        case user.CHANGEPHONE:
            return {...state,...{name:action.newName}};
        default:
            return state;
    }
}