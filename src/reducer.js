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
            return { ...state, listSort: action.payload}
        }
        case "SET_REMOVE_LIST": {
            return { ...state, listSort: action.payload}
        }
        case 'SET_SEARCH_BY_NAME': {
            let searchListByName = (state.columns || [])
                .filter(columnsValue => columnsValue.toLowerCase().includes(action.payload.toLowerCase()))
            if (searchListByName.length === 0) {
                searchListByName = ["No hay resultados"]
            }
            return { ...state, searchListByName }
        }
        default: {
            return state
        }
    }
}