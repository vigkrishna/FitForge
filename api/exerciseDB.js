import axios from 'axios';
const rapidApiKey = 'fd2110a3fcmsh6c0c90271f3fb85p11d945jsn39593e3b6b07';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params)=>{
    try{
        const options = {
            method: 'GET', 
            url,
            params,
            headers: {
                    'X-RapidAPI-Key': rapidApiKey,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
            
        };
        const response = await axios.request(options);
        return response.data;
    }catch(err){
        console.log('error: ', err.message);
    }
}

export const fetchExercisesByBodypart = async (bodyPart)=>{
    let data = await apiCall(baseUrl+`/exercises/bodyPart/${bodyPart}`);
    // console.log(bodyPart);
    return data;
}