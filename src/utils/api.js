import  axios from "axios"
const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzQ2OGUxZTBlMGI0NjYzYzk1YTc2Y2IwMTRkMWI4NSIsInN1YiI6IjYxNTQ3NmVlNDE0NjVjMDA0MmFmYTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UiUwpJF-fz7di48nurNXhgIBgRN-161N52JQMntRML4"

const headers = {
    Authorization: "bearer "+ TMDB_TOKEN,
};

export const fetchDataFromApi= async(url,params)=>{
    try{
        const {data}= await axios.get(BASE_URL+url,{
            headers: headers,
            params: params,
        })
        return data;
    }
    catch(e){
        console.log(e);
        return e;
    }
    
}
