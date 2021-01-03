import React, { Component } from 'react'
import Counters from './counters';
import NavBar from './navBar';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 2, selected: false },
            { id: 2, value: 0, selected: false },
            { id: 3, value: 0, selected: false },
            { id: 4, value: 0, selected: false },
        ]
    }

    render() {
        return (
            <React.Fragment>
                <NavBar selectedCounters={this.totalSelectedCounters} />
                <main className="container">
                    <Counters
                        onDelete={this.deleteHandler}
                        onIncrement={this.incrementHandler}
                        onDecrement={this.decrementHandler}
                        onReset={this.resetHandler}
                        counters={this.state.counters}
                    />
                </main>
            </React.Fragment>
        );
    }

    totalSelectedCounters = () => {
        return this.state.counters.filter(item => item.value > 0).length;
    }

    selectedItem = (selected, id) => {
        let item = this.state.counters.map(item => {
            if (item.id === id) {
                item.selected = selected;
            }
            return item;
        });

        this.setState({ counters: item });
    }

    getSelected = () => {
        let item = this.state.counters.filter(item => item.selected === true);
        return item.length;
    }

    resetHandler = () => {

        let countersItem = [...this.state.counters];
        let counters = countersItem.map(item => {
            item.selected = false;
            item.value = 0;
            return item;
        });

        this.setState({ counters });
    }

    deleteHandler = (id) => {
        let counters = this.state.counters.filter(item => item.id !== id);
        this.setState({ counters });
    }

    incrementHandler = counter => {

        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index].value++;

        this.setState({ counters });
    }

    decrementHandler = (counter) => {
        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);

        if (counters[index].value === 0) {
            return;
        }
        counters[index].value = counters[index].value - 1;
        this.setState({ counters });
    }
}

export default App;