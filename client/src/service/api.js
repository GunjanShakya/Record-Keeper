import axios from 'axios';

const URL = 'http://localhost:9001';

export const addUser = async (data) => {
    // console.log("ok ok");
    try {

        return await axios.post(`${URL}/add`, data)
    }
    catch (error) {
        console.log('Error while calling user api', error)

    }
}

export const getUser = async () => {
    try {
        return await axios.get(`${URL}/all`)
    }
    catch (error) {
        console.log('Error while calling getUsers APT', error)
    }
}

export const getEUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    }
    catch (err) {
        console.log('Error while calling API', err);
    }
}

export const editUser = async (user,id) => {
    try {
       return await axios.post(`${URL}/${id}`,user)
    }
    catch(err)
    {
        console.log('Error while calling API', err);
    }
}

export const deleteUser= async(id)=>{
    try{
     return await axios.delete(`${URL}/${id}`);
    }catch(err){
     console.log("Error while call Api is:",err);
    }
 }