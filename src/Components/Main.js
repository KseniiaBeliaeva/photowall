import React, { Component } from 'react';
import List from './List'
import Title from './Title'

class Main extends Component {
    render() {
        return (
            <div>
                <Title todo={"toDos"} />
                <List tasks={['Mow the lawn', 'walk the dog']} />
                <List tasks={['Hose the driveway', 'finish the laundry']} />

            </div>
        )
    }
}
export default Main
