import React from 'react';

const weatherRequestInput = (props) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Введите название города"
                onChange={props.ischanged}
                value={props.city}/>
        </div>
    )
};

export default weatherRequestInput;