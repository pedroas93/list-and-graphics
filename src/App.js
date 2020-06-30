import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import RepeatedColumns from './columns/repeated-columns';
import SortColumns from './columns/sortColumns';
import Cake from './graphics/cake';
import Line from './graphics/line';
import styled from 'styled-components';


const AppStyled = styled.div`
  .App {
    display: grid;
    gird-template-columns: 50% 50%;
    grid-template-areas: "repeat sort"
                          "graphics line"
  }

  @media screen and (max-width: 768px){
    .App{
      gird-template-columns: 50%;
      grid-template-areas: "repeat"
                            "sort"
                            "graphics"
                            "line"
    }
  }
`
const initialState = {
  columns: [],
  searchListByNameRepeat: [],
  searchListByNameSort: [],
  columnsSort: [],
  listSort: [],
  list: [],
  searchListSortByName: [],
  lessSort: ["null"],

}

const store = createStore(reducer, initialState)

function App() {
  return (
    <AppStyled>
      <Provider store={store}>
        <section className="App">
          <div className="repeat">
            <RepeatedColumns />
          </div>
          <div className="sort">
            <SortColumns />
          </div>
          <div className="graphics">
            <Cake />
          </div>
          <div className="line">
            <Line />
          </div>
        </section>
      </Provider>
    </AppStyled>
  );
}

export default App;
