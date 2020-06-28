import React, { useEffect, useState } from 'react'
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
    border: 1px solid red;
`

function RepeatedColumns() {

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
        //     fetch('https://restcountries.eu/rest/v2/all')
        //         .then((response) => {
        //             return response.json()
        //         })
        //         .then((list) => {
        //             dispatch({
        //                 type: 'SET_COUNTRY_LIST',
        //                 payload: list
        //             })
        //             // setCountryList(data)
        //         })
        //         .catch(() => {
        //             console.log("ERROR")
        //         })
    }, [dispatch])
    return (
        <RepeatedColumnsStyled>
                <Search />
                <Lists columns={columnsList} />
        </RepeatedColumnsStyled>
    )
}

export default RepeatedColumns
