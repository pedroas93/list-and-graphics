import React, { useState, useCallback, useEffect } from "react";
import { Card } from "./card";
import update from "immutability-helper";

const style = {
    width: 400
};


const Container = ({ columnsSelected }) => {
    useEffect(() => {
        setCards(columnsSelected);
    }, [columnsSelected]
    );
    let [cards, setCards] = useState(columnsSelected);

    const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
            let dragCard = cards[dragIndex];
            setCards(
                update(cards, {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
                })
            );

        },
        [cards]
    );
    const renderCard = (card, index) => {
        return (
            <Card
                key={card.id}
                index={index}
                id={card.id}
                text={card.text}
                moveCard={moveCard}
            />
        );
    };
    return (
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    );
};

export default Container
