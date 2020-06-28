import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import RepeatedColumns from './repeated-columns';
const initialState = {
  columns: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: '',
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RepeatedColumns/>
      </div>
    </Provider>
  );
}

export default App;
