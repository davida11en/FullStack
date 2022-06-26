import React from 'react'
import { closeModal } from '../../actions/modal_actions'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }    

    handleSubmit(e) {
        e.preventDefault()
        
        this.props.loginUser(this.state)
            .then( () => this.props.closeModal()) 
            // .then( () => this.props.history.push(`/account`) )
    }   

    handleDemoLogin(e) {
        e.preventDefault()

        this.props.loginUser({username:'demo@user.com', password:'123456'})
        .then( () => this.props.closeModal()) 
        // .then( () => this.props.history.push(`/account`) )
    }

    render() {
        
        let errors;
        if(this.props.errors.responseJSON) {
            errors = this.props.errors.responseJSON.map( (error, idx) => (
                <li className="error" key={idx}> {error} </li> 
            )
        )}

        return (
            <div className="session-form">
                
                <form>
                <h2>Login!</h2>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            />
                    </label>
                        <br></br>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                    </label>

                <button onClick={this.handleSubmit}> Login</button>
                <button onClick={this.handleDemoLogin}> Demo Login</button>

                <ul>

                { (this.props.errors.responseJSON != null) && errors }

                </ul>
                
                </form>

            </div>
        )
    }
}

export default LoginForm;