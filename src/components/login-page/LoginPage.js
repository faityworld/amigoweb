import React from 'react';
import './LoginPage.scss';
import { loginService } from '../../services/loginService';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        /** According to React community manage form state locally */
        this.state = {
            username: '',
            password: '',
            loginSuccess: false,
            errMess: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            let loginSuccess = loginService(username, password) 
            loginSuccess ? this.props.checkUser() : this.setState({errMess: 'Username or password is incorrect'})            
        }
        else this.setState({errMess: 'Fill out all fields'});
        this.setState({username: '', password: ''});
    }
    componentDidUpdate() {
        if (this.props.login) this.props.history.push('/profile');
    }
    render() {
        return (
            <div className="login">
                <div className="login__container">
                    {this.state.errMess && <div className="login__error">{this.state.errMess}</div>}
                    <form action="" className="form" onSubmit={this.handleSubmit}>
                        <label htmlFor="login" className="form__label">Login</label>
                        <input type="text" className="form__input" id="login" ref = {this.login} name="username" onChange={this.handleChange} value={this.state.username} />
                        <label htmlFor="password" className="form__label">Password</label>
                        <input type="password" className="form__input" id="password" ref = {this.password} name="password" onChange={this.handleChange} value = {this.state.password} />
                        <button className="form__submit">Log In</button>
                    </form>
                </div>
            </div>
        )
    }    
}

export default LoginPage;