import React from 'react';
import Style from '../scss/DataBar.module.scss';

export const DataBar = props => {
    const percent = Math.round((props.likes * 100) / (props.likes + props.dislikes))
    return <progress className={ Style.stats } max="100" value={percent} />
};