import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const SortSelectedStyled = styled.div`
    // width: 264px;
    text-align: left;
    border-radius: 5px;
    overflow:hidden;
    .sortSelected{
        padding:1.5em;
        align-items: center;
    }
    .fas fa-sort-alpha-down-alt{
        align-items
    }
    .sortName{
        margin: 0;
    }
    .sortComponent{
        // display: flex !important;
        display: grid;
        grid-template-columns: 8% 80% 10% 10%;
    }

`
function SortSelected({ }) {

    const columnsSelected = useSelector((state) => {
        return state.listSort;
    })
    return (
        <SortSelectedStyled>
            <div className="sortSelected">
                {
                    columnsSelected.map((element) => {
                        return (
                            <div className="sortComponent" key={element}>
                                <i className="fas fa-credit-card" ></i>
                                <p className="sortName" key={element} >{element}</p>
                                <i className="fas fa-sort-alpha-down"></i>
                                <i className="fas fa-sort-alpha-down-alt"></i>
                            </div>
                        )
                    })
                }
            </div>

        </SortSelectedStyled>
    )
}

export default SortSelected

