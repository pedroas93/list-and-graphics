import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.label`
//   display: inline-flex;
//   background: white;
//   align-items: center;
//   box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
//   padding: 0 1rem;
//   border-radius: 5px;
//   flex: 1;

  Button {
    /* width: 100%; */
    // flex: 1;
    // border: none;
    // height: 48px;
    // line-height: 48px;
    // font-size: .9em;
    // outline: 0;
    // &::-webkit-Button-placeholder {
    //   color: #C4C4C4;
    // }
  }
`

function Button({ type }) {
    return (
        <ButtonStyled>
            <button type="text" >{type}</button> 
        </ButtonStyled>
    )
}

export default Button