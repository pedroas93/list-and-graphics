import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const SortSelectedStyled = styled.div`
    // width: 264px;
    text-align: left;
    border-radius: 5px;
    overflow:hidden;
    // box-shadow: 0 0 7px 2px rgba(0,0,0,.03);
    .sortSelected{
        display: flex;
        padding:1.5em;
        align-items: center;
    }
    i {
        margin: 0;
        padding-right: 4px;
    }
    p{
        margin: 0;
        padding-right: 167px;
    }
    div{
        display: flex;
    }

`
function SortSelected({ }) {

    const columnsSelected =useSelector((state)=> {
        return state.listSort;
    })
    console.log("ENTER HERE????",columnsSelected )
    return (
        <SortSelectedStyled>
            <div className="sortSelected">
                {
                    columnsSelected.map((element)=>{
                        return(
                            <div key={element}>
                                <i className="fas fa-credit-card" ></i>
                                <p className="sortName" key={element} >{element}</p>
                                <i className="fas fa-sort-alpha-down-alt"></i>
                                <i className="fas fa-sort-alpha-down"></i>
                            </div>
                        )
                    })
                }
            </div>

        </SortSelectedStyled>
    )
}

export default SortSelected

