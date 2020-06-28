import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Lists from './lists'


const RepeatedColumnsStyled = styled.div`
    display:grid;
    grid-row-gap:2.3em;
    background: var(--background);
    justify-content: center;
    padding: 4em 2em;
    border: 1px solid red;
`

function RepeatedColumns() {

    const dispatch = useDispatch()
    const columns = useSelector((state) => {
        return state.columns;
    })

    // const selectedItem = (e) => {
    //     setColumns(e.target.value)
    //     dispatch({
    //         type: 'SET_SELECTED_VALUE',
    //         payload: e.target.value
    //     })
    // }

    // const dispatch = useDispatch()
    // const countryListByName = useSelector((state) => state.countryListByName)

    // const countryList = useSelector((state) => {
    //     if ('' !== state.filterByRegion) {
    //         return state.countryFilteredByRegion;
    //     }
    //     if (countryListByName.length > 0) {
    //         return countryListByName
    //     }


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
        //             console.log(list.length)
        //         })
        //         .catch(() => {
        //             console.log("ERROR")
        //         })
    }, [dispatch])
    return (
        <RepeatedColumnsStyled>
            {
                <Lists columns={columns} />
            }
        </RepeatedColumnsStyled>
    )
}

export default RepeatedColumns
