import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import RepeatedColumns from './columns/repeated-columns';
import SortColumns from './columns/sortColumns';
import Graphics from './graphics/graphics';
import Line from './graphics/line';
import Script from './script'
import styled from 'styled-components';


const AppStyled = styled.div`
  .App {
    display: grid;
    gird-template-columns: 40% 50%;
    grid-template-areas: "repeat sort"
                          "graphics line"
  }

  @media screen and (max-width: 500px){
    .grid-container{
      gird-template-columns: 50%;
      grid-template-areas: "repeat"
                            "sort"
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
            <Graphics />
          </div>
          <div className="line">
            <Line />
          </div>
          <div>
            <Script/>
          </div>
        </section>
      </Provider>
    </AppStyled>
  );
}

export default App;
