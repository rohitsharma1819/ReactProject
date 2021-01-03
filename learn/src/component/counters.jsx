import Counter from './counter';
import React from 'react'

export default function counters(props) {
    let { onReset, onDelete, onIncrement, onDecrement, counters } = props;
    return (
        <React.Fragment>
            <button className="btn btn-primary m-2" onClick={onReset}>Reset</button>
            {counters.map(item => <Counter
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={item}
                key={item.id}
            />)}

        </React.Fragment>
    )
}
