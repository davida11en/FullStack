import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);   
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    
    componentWillUnmount() {
        if (this.props.errors.length) {
        this.props.clearErrors();
        }
    }

    render() {
        return (
            <div className='session-form-container'>
                <h1>Take a stroll down EasyStreet</h1>
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    <label htmlFor='email'>Email
                        <input
                            className='session-form-input'
                            type="text"
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label htmlFor='password'>Password
                        <input
                            className='session-form-input'
                            type="text"
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    
                    {/* <div>
                        {this.props.errors.map((error, i) => (
                        <p className="errors" key={i}>{error}</p>
                        ))}
                    </div> */}

                    <button type="submit" onClick={this.handleSubmit}>
                        {this.props.formType}
                    </button>
                </form>
            </div>
        )
    }

}

export default SessionForm