import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Container from './container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const SortSelectedStyled = styled.div`
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
        grid-template-columns: 8% 70% 10% 10%;
    }

`
function SortSelected() {

    const columnsSelected = useSelector((state) => {
        let newElement = [];
        if(state.listSort.length !== 0){
            state.listSort.forEach((element,index) => {
                newElement= [...newElement, {id: index  ,text: element}]
            });
        }
        return newElement;
    })
    return (
        <SortSelectedStyled>

            <DndProvider backend={HTML5Backend}>
                <Container columnsSelected={columnsSelected} />
            </DndProvider>
        </SortSelectedStyled>
    )
}

export default SortSelected

