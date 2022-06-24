import React from 'react'
//import React in jsx files to get component extension
//after container is done, create local state for form components (constructor method)

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        //local state
        this.state = {
            email: "",
            password: "",
            username: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        //after the form is filled out, the state will have all the data required to 
        //create a user
        this.props.createNewUser(this.state)
            .then( () => this.props.closeModal())  //success             //fail ,() => window.location.reload() 
            .then( () => this.props.history.push(`/`))
    }   //user is created, redirect

    render() {
        let errors;
        if(this.props.errors.responseJSON) {
            errors = this.props.errors.responseJSON.map( (error, idx) => (
                <li className="error" key={idx}> {error} </li> 
            )
        )}
        
        return (
            <div className="signup-form-container">
                <h2>Sign Up!</h2>
                <form onSubmit={this.handleSubmit}>
    
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            />
                    </label>
                    <br></br>
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


                <button onClick={this.handleSubmit}> Sign Up</button>

                <ul>

                    { (this.props.errors.responseJSON != null) && errors }

                </ul>
                
                </form>
            </div>
        )
    }
}

export default SignupForm;