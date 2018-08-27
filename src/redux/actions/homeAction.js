import * as home from '../types/home-types';
export const CHANGENAME = (newName) =>{
    console.log('homeAction running...')
    return {
        type:home.CHANGENAME,
        newName
    }
}