import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Lists from './lists'
import Search from './search'
import SortSelected from './sortSelected'
import Button from './button'

const SortColumnsStyled = styled.div`
    display:grid;
    grid-row-gap:0.8em;
    background: var(--backgroundHowOrder);
    justify-content: center;
    padding: 4em 2em;
    .Buttons{
        display: grid;
        grid-template-columns: 20% 130%;
    }
`

function SortColumns() {

    const dispatch = useDispatch()
    const searchListByName = useSelector((state) => {
        return state.searchListByNameSort;
    })

    const columnsList = useSelector((state) => {

        if (searchListByName.length > 0) {
            return searchListByName
        }
        if (searchListByName === "Null") {
            return "Null"
        }
        return state.columnsSort;
    })

    // handlerOk = (e) =>{
        
    // }
    useEffect(() => {
        const columns = [
            'SKT_ID',
            'Amount',
            'Getway',
            'Date',
            'Issuer',
            'User_id'
        ]
        dispatch({
            type: 'SET_COLUMNS_SORT',
            payload: columns
        })
    }, [dispatch])
    return (
        <SortColumnsStyled>
            <h4><strong>¿Cómo  quíeres ordenarlos?</strong></h4>
            <SortSelected />
            <Search actions={"SET_SEARCH_BY_NAME_SORT"} />
            <Lists columns={columnsList} sorteable={"SET_SELECTED_LIST_SORT"} />
            <div className="Buttons">
                <Button type={"cancelar"}/>
                <Button type={"ok"} />
            </div>
        </SortColumnsStyled>
    )
}

export default SortColumns
