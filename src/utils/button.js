import React, { useState }from 'react';
import styled from 'styled-components';
import ModalPrint from '../columns/modalPrint';

const ButtonStyled = styled.label`
  Button {
    font-size: 15px;
    font-weight: bold;
  }
  .ok{
    background-color: rgb(69, 115, 249);
    color:rgb(254, 255, 255);
    border: none;
    height: 35px;
    border-radius: 3px;
    width: 10%;
  }
  .cancelar{
    background-color: rgb(254, 255, 255);
    color: rgb(69, 115, 249);
    height: 38px;
    border-radius: 3px;
    width: 100%;
    border-width: 1px;
  }
`

function Button({ type }) {
  const [modal, setModal] = useState(false)

  const printModal = (e) =>{
    if(type === "ok"){
      setModal(true);
    }
  }
  const handleCloseModal = (e) =>{
    setModal(false);
  }
  return (
    <ButtonStyled>
      <button className={type} onClick={printModal}>{type}</button>
      <ModalPrint
          openModal={modal}
          handleCloseModal={handleCloseModal}
      />
    </ButtonStyled>
  )
}

export default Button