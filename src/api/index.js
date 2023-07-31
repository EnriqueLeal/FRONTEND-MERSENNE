import axios from 'axios'


export const BASE_URL = 'http://localhost:5041/';

export const ENDPOINTS = {
    participant: 'participant',
    getMersenne : 'mersenne',
    postMersenne : 'mersenne/PostMersenne',
    getMersenneAll : 'mersenne/GetAll'
}

export const createAPIEndpoint = endpoint => {

    try{
        let url = BASE_URL + 'api/' + endpoint + '/';
        return {
            fetch: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            post: newRecord => axios.post(url, newRecord),
            put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id),
            
        }
    }
    catch(err)
    {
       
        console.log("err");    
    }
    
}