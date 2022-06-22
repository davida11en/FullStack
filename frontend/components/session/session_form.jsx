import React from "react";
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleInput = type => {
        return e => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const user = Object.assign( {}, this.state );
        this.props.processForm(user); 
    }

    render() {
        const otherFormType = (this.props.formType === "Login") ? ("Sign Up") : ("Login");
        const otherFormLink = (this.props.formType === "Login") ? ("signup") : ("login");

        return (
            <div className="session-form">
                <h1 className="session-form-header">{this.props.formType}</h1>
                <Link to={`/${otherFormLink}`}>{`or Click to ${otherFormType}`}</Link>
                <br></br><br></br>

                <form className="session-form-element">
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput("username")}
                        />
                    </label>
                    <br></br>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                        />
                    </label>
                    <br></br>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}