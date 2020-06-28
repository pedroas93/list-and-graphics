import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const ListsStyled = styled.label`
//   display: inline-flex;
//   background: white;
//   align-items: center;
//   box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
//   padding: 0 2rem;
//   flex: 1;

  select
   {
        width: 350px; 
        flex: 1;
        border: none;
        height: 350px;
        line-height: 48px;
        font-size: 1em;
        border-radius: 5px;
        padding: 1em ;

    }
    select option:not(:checked), select option:not(:checked) {
        color: rgb(117, 117, 143)
    }  
    select option:checked
    {
        background: linear-gradient(rgb(240, 242, 255),rgb(240, 242, 255));
        background-color: rgb(240, 242, 255) !important; /* for IE */
        border-radius: 5px;
        margin-bottom: 1%;
        font-family: 'FontAwesome', sans-serif;
        color: rgb(117, 117, 143)!important;
    }
    option {
        font-weight: normal;
        display: block;
        white-space: pre;
        min-height: 1.5em;
        padding: 0px 2px 1px;
    }
`

function Lists
    ({ columns }) {
    const dispatch = useDispatch()
    const listSort =useSelector((state)=> {
        return state.listSort;
    })

    window.onmousedown = function (e) {
        let el = e.target;
        if (el.tagName.toLowerCase() === 'option' && el.parentNode.hasAttribute('multiple')) {
    
            if (el.hasAttribute('selected')) {
                el.removeAttribute('selected');
                el.innerHTML =  (el.innerHTML).substring(1)
                handlerRemove(e)
            }
            else {
                el.setAttribute('selected', '');
                // el.insertAdjacentHTML('afterbegin', "&#xf00c;");
                el.innerHTML = "&#xf00c; "+el.innerHTML;
                handlerAdd(e)
            }
    
            let select = el.parentNode.cloneNode(true);
            el.parentNode.parentNode.replaceChild(select, el.parentNode);
        }
    }
    const handlerAdd = (e) =>{
        console.log(e);
        dispatch({
          type: 'SET_SELECTED_LIST',
          payload: [...listSort, e.target.value]
        })
    }
    const handlerRemove = (e) =>{
        console.log(e);
        dispatch({
          type: 'SET_REMOVE_LIST',
          payload: [e.target.value]
        })
    }
    return (
        <ListsStyled>
            <select id="lists" name="lists" size="8" multiple>
                {
                    columns.map((element) => {
                        return (
                            <option value={element} key={element}>
                                {element}
                            </option>
                        )
                    })
                }

            </select>
        </ListsStyled>
    )
}

export default Lists
