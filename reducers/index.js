import {createSlice, dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
const ROUTE = 'http://192.168.0.137:3001' // since the device    (host Local)


export const videogameSlice = createSlice({
    name : "VIDEOGAMES",
    initialState : {
        allVideogame: [],
        allVideogameFiltered: [],
        detailVideogame: [],
        allGenres: [],
        filterGenre: [],
        filterSource: [],
        sortBy: [],
        sortDirection: [],
        newVideogamePlatforms: [],
        newVideogameGenres: []
    },
    reducers:{
        getAllVideogames(state,action){  
            state.allVideogame = action.payload
            state.allVideogameFiltered = action.payload
        },

        getVideogameByName(state,action){       
            state.allVideogame = action.payload
            state.allVideogameFiltered = action.payload
        },
        
        getVideogameById(state,action){
            state.detailVideogame = action.payload
        },

        // cleanDetail(state,action){
        //     state.detailVideogame = []
        // },

        setNewPlatforms(state,action){
            state.newVideogamePlatforms = action.payload
        },

        setNewGenres(state,action){
            state.newVideogameGenres = action.payload
        },

        delPlaGen(state,action){
            state.newVideogameGenres = []
            state.newVideogamePlatforms = []
        },

        getAllGenres(state, action){
            state.allGenres = action.payload
        },

        getVideogameFilter(state, action){
            const allVideogame2 = state.allVideogame
            const statusFiltered2 = action.payload === "db" 
                ? allVideogame2.filter(e => e.createdDb) // if filter for DB
                : allVideogame2.filter(e => !e.createdDb); // if filter for API

                state.allVideogameFiltered = action.payload === 'all' 
                ? allVideogame2                       // if Option is ALL
                : statusFiltered2;                  // if Option es Only Source

                state.filterSource = action.payload
        },

        getVideogameSortByName(state, action){
            let sortedArray
            state.sortBy = "name"
            state.sortDirection = action.payload

            if(action.payload === 'up'){

                sortedArray = state.allVideogameFiltered.sort(function (a, b){
                        if(a.name > b.name){
                            return 1;
                        }
                        if(b.name > a.name){
                            return -1;
                        }
                        return 0;
                    }) 
            }
            if(action.payload === 'down'){

                sortedArray = state.allVideogameFiltered.sort(function (a, b){
                        if(a.name > b.name){
                            return -1;
                        }
                        if(b.name > a.name){
                            return 1;
                        }
                        return 0;
                    }) 
            }
        },

        getVideogameSortByRating(state, action){
            let sortedArray
            state.sortBy = "rating"
            state.sortDirection = action.payload

            if(action.payload === 'up'){
                sortedArray = state.allVideogameFiltered.sort(function (a, b){
                        if(a.rating > b.rating){
                            return 1;
                        }
                        if(b.rating > a.rating){
                            return -1;
                        }
                        return 0;
                    }) 
            }
            if(action.payload === 'down'){
                sortedArray = state.allVideogameFiltered.sort(function (a, b){
                        if(a.rating > b.rating){
                            return -1;
                        }
                        if(b.rating > a.rating){
                            return 1;
                        }
                        return 0;
                    }) 
            }
        },

        getVideogameByGenre(state, action) {
            const allVideogame2 = state.allVideogame
            const statusFiltered2 = action.payload === "all" ? allVideogame2 : allVideogame2.filter(el => el.genres.includes(action.payload) )   
            
            statusFiltered2.length ? state.allVideogameFiltered = statusFiltered2 : state.allVideogameFiltered = {"msg": "No se encontro el id indicado en DB"}
            state.filterGenre = action.payload
        }

    }
});

export const getAllVideogames = ()=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + "/games/")     // require all Videogames (120)
        dispatch(videogameSlice.actions.getAllVideogames(json.data))

    } catch (e) {
        console.log(e)
    }
}   

export const getVideogameByName = (name)=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + "/games/?name=" + name)     // require Videogame by name
        dispatch(videogameSlice.actions.getVideogameByName(json.data))

    } catch (e) {
        console.log(e)
    }
} 

export const getVideogameById = (id)=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + "/games/" + id)     // require Pokemon by id
        dispatch(videogameSlice.actions.getVideogameById(json.data))

    } catch (e) {
        console.log(e)
    }
}

// export const cleanDetail = () => async(dispatch) => {       // clean detail
//     dispatch(videogameSlice.actions.cleanDetail())
// }

export const getAllGenres = ()=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + "/genres/")     // require all Genres
        dispatch(videogameSlice.actions.getAllGenres(json.data))

    } catch (e) {
        console.log(e)
    }
}

export const createVideogame = (payload) => async () => {  // create new videogame
    try {
        await axios.post(ROUTE + "/game/", payload);

    } catch (error) {
        console.log(error);
    }
}

export const getVideogameFilter = (option) => async(dispatch) => {   // Source Filter
    dispatch(videogameSlice.actions.getVideogameFilter(option))
}

export const getVideogameSortByName = (payload) => async(dispatch) => {   // Sort by name
    dispatch(videogameSlice.actions.getVideogameSortByName(payload))
}

export const getVideogameSortByRating = (payload) => async(dispatch) => {   // Sort by attack level
    dispatch(videogameSlice.actions.getVideogameSortByRating(payload))
}

export const getVideogameByGenre = (payload) => async(dispatch) => {   //  Filter Videogame by Genre
    dispatch(videogameSlice.actions.getVideogameByGenre(payload))
}

export const setNewPlatforms = (payload) => async(dispatch) => {       // set array platforms
    dispatch(videogameSlice.actions.setNewPlatforms(payload))
}

export const setNewGenres = (payload) => async(dispatch) => {       // set array genres
    dispatch(videogameSlice.actions.setNewGenres(payload))
}

export const delPlaGen = () => async(dispatch) => {       // delete platforms & genres array 
    dispatch(videogameSlice.actions.delPlaGen())
}

export default videogameSlice.reducer