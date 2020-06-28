import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.label`
  display: inline-flex;
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  padding: 0 1rem;
  border-radius: 5px;
  background: var(--backgroundHowOrder);
  flex: 1;
  input {
    /* width: 100%; */
    // flex: 1;
    background: var(--backgroundHowOrder);
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: .9em;
    outline: 0;
    &::-webkit-input-placeholder {
      color: #C4C4C4;
    }
  }
`

function Input({ ...props }) {
    return (
        <InputStyled>
            <input type="text" {...props} />
        </InputStyled>
    )
}

export default Input