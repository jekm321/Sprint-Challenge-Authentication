import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
    state = {
        jokes: []
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.jokes.map(joke => (
                        <li key={joke.id}>
                            <div>
                                type: {joke.type}
                            </div>
                            <div>
                                setup: {joke.setup}
                            </div>
                            <div>
                                punchline: {joke.punchline}
                            </div>
                            <br />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    componentDidMount = event => {
        const token = localStorage.getItem('token');

        const requestOption = {
            headers: {
                Authorization: token
            }
        };

        axios
            .get('http://localhost:5000/api/jokes', requestOption)
            .then(response => {
                this.setState({ jokes: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export default Jokes;