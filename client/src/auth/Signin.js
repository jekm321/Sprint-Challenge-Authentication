import React from 'react';
import axios from 'axios';

class Signin extends React.Component {
    state = {
        username: '',
        password: '',
    };

    render() {
        return (
            <form onSubmit={this.submitChange}>
                <div>
                    <label htmlFor="username" />
                    <input
                        name="username"
                        placeholder="Enter Username Here"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="password" />
                    <input
                        name="password"
                        placeholder="Enter Password Here"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="password"
                    />
                </div>
                <div>
                    <button type="submit" >Sign In</button>
                </div>
            </form>
        )
    }

    handleInputChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    submitChange = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:5000/api/login', this.state)
            .then(response => {
                localStorage.setItem('token', response.data.token);

                this.props.history.push('/jokes');
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log(err);
            })
    }
}

export default Signin;