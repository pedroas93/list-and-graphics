import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';


// import { ItemTypes } from "./ItemTypes";
const CardStyled = styled.div`
    text-align: left;
    border-radius: 5px;
    overflow:hidden;
    .Card{
        padding:1.5em;
        align-items: center;
    }
    .fas fa-sort-alpha-down-alt{
        align-items
    }
    .sortName{
        margin: 0;
    }
    .sortComponent{
        // display: flex !important;
        display: grid;
        grid-template-columns: 8% 80% 10% 10%;
    }
`
const ItemTypes = {
    CARD: 'card',
}
export const Card = ({ id, text, index, moveCard }) => {

    const dispatch = useDispatch()

    const ref = useRef(null);
    const list = useSelector((state) => {
        return state.listSort;
    })
    const lessSort = useSelector((state) => {
        return state.lessSort;
    })
    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    });
    const handleClickSort = (e) => {
        let sortList = list;
        if (sortList.length > 0) {
            if (lessSort[0] === "less" || lessSort[0] === "null") {
                sortList.sort()
                dispatch({
                    type: "SET_SORT_LIST",
                    payload: [...sortList.reverse()]
                })
                dispatch({
                    type: "SET_LESS_SORT",
                    payload: ["harder"]
                })
            } else {
                dispatch({
                    type: "SET_SORT_LIST",
                    payload: [...sortList.sort()]
                })
                dispatch({
                    type: "SET_LESS_SORT",
                    payload: ["less"]
                })
            }
        }
    }
    const [{ isDraging }, drag] = useDrag({
        item: { type: ItemTypes.CARD, id, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    drag(drop(ref));
    return (
        <CardStyled>
            <div ref={ref}>
                <div className="sortComponent" >
                    <i className="fas fa-credit-card" ></i>
                    <p className="sortName" >{text}</p>
                    <a href="#" onClick={handleClickSort}>
                        <i className="fas fa-sort-alpha-down" />
                    </a>
                    <i className="fas fa-sort-alpha-down-alt" />
                </div>
            </div>
        </CardStyled>
    );
};
