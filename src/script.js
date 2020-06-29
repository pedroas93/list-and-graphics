import React from 'react';
import styled from 'styled-components';

const ScriptStyled = styled.label`

`

function Script
    () {
    const ul = document.querySelector('ul')
    const setColumn = (column) => {
        setTimeout(() => {
            ul.innerHTML += `<li>${column}<li>`
        }, Math.random() * 5000)
    }

    const columns = [
        'Columna SKT_ID',
        'Columna Amount',
        'Columna Getway',
        'Columna Date',
        'Columna Issuer',
        'Columna User_id'
    ]


    const handlerRemove = (e) => {

    }
    return (
        <ScriptStyled>
            <ul></ul>
        </ScriptStyled>
    )
}

export default Script
