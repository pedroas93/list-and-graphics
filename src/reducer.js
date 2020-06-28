export default function reducer(state, action) {
    console.log(action)
    switch (action.type) {
      case 'SET_COLUMNS': {
        return { ...state, columns: action.payload }
      }
      case 'SET_SELECTED_VALUE': {
        const { itemSelected } = action.payload;
        if('' === itemSelected){
          return {...state, countryFilteredByRegion: [], filterByRegion: '', }
        }
  
        const countryFilteredByRegion = state.countryList.filter((country) => country.region === itemSelected);
  
        return {...state, countryFilteredByRegion, filterByRegion: itemSelected}
  
      }
      default: {
        return state
      }
    }
  }