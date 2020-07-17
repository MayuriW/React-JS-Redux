//API call will be done
export function movieList(){
    return{
        type:'MOVIE_LIST',
        payload :[
        {id:1,name:'money hyest'},
        {id:2,name:'money hyest2'}
        ]
        }
}