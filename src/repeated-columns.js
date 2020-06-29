import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Lists from './lists'
import Search from './search'


const RepeatedColumnsStyled = styled.div`
    display:grid;
    grid-row-gap:0.8em;
    background: var(--background);
    justify-content: center;
    padding: 4em 2em;
`

function RepeatedColumns() {

    const dispatch = useDispatch()
    // const columns = useSelector((state) => {
    //     return state.columns;
    // })
    const searchListByName =useSelector((state)=> {
        return state.searchListByNameRepeat;
    })

    const columnsList = useSelector((state) => {
        if(!searchListByName){
            return state.columns;
        }
        if (searchListByName.length > 0) {
            return searchListByName
        }
        if (searchListByName === "Null") {
            return "Null"
        }
        return state.columns;
    })

    //     return state.countryList;
    // })
    useEffect(() => {
        const columns = [
            'Columna SKT_ID',
            'Columna Amount',
            'Columna Getway',
            'Columna Date',
            'Columna Issuer',
            'Columna User_id'
        ]
        dispatch({
            type: 'SET_COLUMNS',
            payload: columns
        })
    }, [dispatch])
    return (
        <RepeatedColumnsStyled>
                <h4><strong>¿Qué Columnas se repiten?</strong></h4>
                <Search actions={"SET_SEARCH_BY_NAME_REPEAT"} />
                <Lists columns={columnsList} sorteable={"SET_SELECTED_LIST"}/>
        </RepeatedColumnsStyled>
    )
}

export default RepeatedColumns
