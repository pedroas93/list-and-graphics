export default function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case 'SET_COLUMNS': {
            return { ...state, columns: action.payload }
        }
        case 'SET_COLUMNS_SORT':{
            return { ...state, columnsSort: action.payload}
        }
        case "SET_SELECTED_LIST": {
            return { ...state, list: action.payload}
        }
        case "SET_LESS_SORT": {
            return { ...state, lessSort: action.payload}
        }
        case "SET_REMOVE_LIST": {
            return { ...state, list: action.payload}
        }
        case "SET_SORT_LIST": {
            return { ...state,  list: action.payload}
        }
        case "SET_SELECTED_LIST_SORT": {
            console.log(' state.listSort???', state.listSort )

            if(state.listSort.includes( action.payload[action.payload.length-1] ) ){
                let listSort = state.listSort.filter(list => !list.includes(action.payload)); 
                console.log('WHAT IS LISTSORT???', listSort, "state.listSort[0]", state.listSort[0], "action.payload[action.payload.length-1]", action.payload[action.payload.length-1] )
                return { ...state, listSort}
            }else{
                return { ...state, listSort: action.payload}
            }
        }
        case 'SET_SEARCH_BY_NAME_REPEAT': {
            let searchListByNameRepeat = (state.columns || [])
                .filter( columnsValue => columnsValue.toLowerCase().includes(action.payload.toLowerCase()))
            if (searchListByNameRepeat.length === 0) {
                searchListByNameRepeat = ["No hay resultados"]
            }
            return { ...state, searchListByNameRepeat }
        }
        case 'SET_SEARCH_BY_NAME_SORT': {
            let searchListByNameSort = (state.columnsSort || [])
                .filter(columnsValue => columnsValue.toLowerCase().includes(action.payload.toLowerCase()))
            if (searchListByNameSort.length === 0) {
                searchListByNameSort = ["No hay resultados"]
            }
            return { ...state, searchListByNameSort }
        }
        default: {
            return state
        }
    }
}