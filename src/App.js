import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import RepeatedColumns from './repeated-columns';
import SortColumns from './sortColumns'
const initialState = {
  columns: [],
  searchListByName: [],
  columnsSort: [],
  listSort: [],
  searchListSortByName: [],

}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RepeatedColumns/>
        <SortColumns/>
      </div>
    </Provider>
  );
}

export default App;
