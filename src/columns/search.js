import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../utils/input'
import { useDispatch } from 'react-redux'

const SearchStyled = styled.div`
  display: flex;
  position: relative;
  .close {
    position: absolute;
    right: 1em;
    top: 1em;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);

  }
`

function Search({actions}) {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const filterByName = (e) => {
    setInputValue(e.target.value)
    dispatch({
      type: actions,
      payload: e.target.value
    })
  }
  const clearInput = () => {
    dispatch({
      type: actions,
      payload: ''
    })
    setInputValue('')
  }
  return (
    <SearchStyled>
      {
        inputValue &&
        <i className="fas fa-times close" onClick={clearInput}></i>
      }
      <Input placeholder="Buscar columna" value={inputValue} onChange={filterByName} />
    </SearchStyled>
  )
}

export default Search