import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './signin.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        this.setState({ email:'', password:''});
    }

    handleChange (e) {
        const {name, value} = e.target;

        this.setState({ [name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" name="email" onChange={this.handleChange} type="email" value={this.state.email}></FormInput>
                    <FormInput label="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}></FormInput>
                    <CustomButton type="submit" value="submit form">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;