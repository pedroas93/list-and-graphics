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
    justify-content: center;
    padding: 4em 2em;
    border: 1px solid red;
`

function SortColumns() {

    const dispatch = useDispatch()
    // const columns = useSelector((state) => {
    //     return state.columns;
    // })
    const searchListByName =useSelector((state)=> {
        return state.searchListByName;
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

    //     return state.countryList;
    // })
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
                <SortSelected/>
                <Search />
                <Lists columns={columnsList}/>
                <Button type={"calcel"}/>
                <Button type={"ok"}/>
        </SortColumnsStyled>
    )
}

export default SortColumns
