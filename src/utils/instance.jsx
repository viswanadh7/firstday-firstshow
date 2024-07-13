import axios from "axios";
const url = 'https://api.themoviedb.org/3/search/movie?query=saaho&include_adult=false&language=en-US&page=1';
const instance = axios.create({
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWRlZGI3ZTY4NzZiODQ5OTM0NjgwZGFjMTYyZmFmYiIsIm5iZiI6MTcyMDc3MDYzNS4zODMwNjYsInN1YiI6IjY2OTBkZTdmNjk1MGI4NGM4MWUxMTA2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpAfY2DEZZzaNw6zX_VIifF3kRxEMzJW1ddMII7rAZ0'
    }
})
instance.interceptors.request.use()
export default instance