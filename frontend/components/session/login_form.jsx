import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
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
    }   

    handleDemoLogin(e) {
        e.preventDefault()

        this.props.loginUser({email:'demo@user.com', password:'123456'})
        .then( () => this.props.closeModal()) 
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
                
                <form onSubmit={this.handleSubmit}>
                <h2>Login!</h2>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
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