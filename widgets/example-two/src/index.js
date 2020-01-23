import React, {Component} from 'react';

class MyComponent extends Component {

    state = {
        events: [],
        users: [],
        isLoading: false,
    };

    componentDidMount() {
        window.addEventListener('widgets__on-click', this.handleEvent);
        this.fetchSomeData();
    }

    render() {
        return (
            <div>
                Component listening for events:

                <div>
                    <h3>Events:</h3>
                    {!this.state.events.length && (
                        <div>You need to click a button from a first component in "Components communicating" example to add new events</div>
                    )}
                    {this.state.events.map(event => (
                        <div key={`key-${event}`}>{event}</div>
                    ))}
                </div>
                <div>
                    <h3>Users:</h3>
                    {this.state.isLoading && <span>Loading...</span>}
                    {this.state.users.map(user => {
                        return (
                            <div key={`user-${user.id}`}>
                                {user.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }

    fetchSomeData = async () => {
        this.setState({
            isLoading: true
        }, async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const parsedData = await data.json();

            this.setState({
                isLoading: false,
                users: parsedData
            });
        })
    };

    handleEvent = () => {
        this.setState({
            events: [...this.state.events, `Event: ${new Date().toJSON()}`]
        })
    }
}

MyComponent.propTypes = {};

export default MyComponent;
