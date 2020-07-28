import React from 'react';
import Style from './Card.module.scss';

const Card = (props) => {
    
    return (
        <section className={ Style.card }>
            {props.children}
        </section>
    )
}

export default Card;