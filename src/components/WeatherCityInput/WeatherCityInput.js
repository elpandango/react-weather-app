import React from 'react';

const weatherRequestInput = (props) => {
    return (
        <div className="city-input">
            <input
                type="text"
                placeholder="Введите название города"
                onKeyPress={props.enterPressed}
                onChange={props.ischanged}
                value={props.city}/>
        </div>
    )
};

export default weatherRequestInput;