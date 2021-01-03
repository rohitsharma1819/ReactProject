import React, { Component } from 'react'

class NavBar extends Component {
    state = {
        time: new Date()
    }

    componentDidMount = () => {
        this.timerId = setInterval(() => this.nextTick(), 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.timerId);
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div>
                    <span className="navbar-brand mb-0 h1">Number of selected counters</span>
                    <span className="badge badge-primary">{this.props.selectedCounters()}</span>
                </div>
                <div>
                    {this.state.time.toLocaleTimeString()}
                </div>
            </nav>
        );
    }

    nextTick = () => {
        this.setState({ time: new Date() });
    }
}

export default NavBar;