import {REGISTER} from '../constants/actionTypes'
import * as api from '../api/index'


export const register = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.register(formData)
        console.log(data);
        if(data.company){
            dispatch({type:REGISTER,data})
            history.push('/')
        }else{
            history.push('/register', {Err: 'Company already exists.'})
        }
    } catch (error) {
        console.log({error:error.message});
    }
}