import React, { Component } from 'react'

class Counter extends Component {
    render() {

        return (
            <div>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button
                    onClick={() => { this.props.onIncrement(this.props.counter) }}
                    className="btn btn-secondary btn-sm m-2">+</button>

                <button
                    onClick={() => { this.props.onDecrement(this.props.counter) }}
                    className="btn btn-secondary btn-sm m-2">-</button>

                <button
                    onClick={() => { this.props.onDelete(this.props.counter.id) }}
                    className="btn btn-danger btn-sm">Delete</button>
            </div>
        );
    }
    formatCount() {
        let { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;