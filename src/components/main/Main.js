import React from 'react';
import Header from '../header/Header';
import Section_1 from '../section-1/Section-1';
import LoginPage from '../login-page/LoginPage';
import News from '../news/News';
import Profile from '../profile/Profile';
import Footer from '../footer/Footer';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './Main.scss';
import { checkUser } from '../../redux/ActionCreators';
import { logOut } from '../../redux/ActionCreators';
import { fetchNews } from '../../redux/ActionCreators';
import { clickMenuButton } from '../../redux/ActionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//import  PrivateRoute  from '../privateRoute/PrivateRoute';

const mapStateToProps = state => {

    return {
        login: state.login,
        news: state.news,
        clickButton: state.clickButton // maybe it could be managed  locally
    }
}
const mapDispatchToProps = (dispatch) => ({
    checkUser: () => { dispatch(checkUser()) },
    logOut: () => { dispatch(logOut()) },
    fetchNews: () => { dispatch(fetchNews()) },
    clickMenuButton: (val) => { dispatch(clickMenuButton(val)) }
})

class Main extends React.Component {

    componentDidMount() {
        localStorage.removeItem('login');
        this.props.checkUser();
    }
   
    render() {
        return (
            <>
                <div className="wrapper">
                    <Header login={this.props.login} logOut={ this.props.logOut } clickButton = {this.props.clickButton} clickMenuButton = { this.props.clickMenuButton } />
                    <Switch>
                        <Route path="/news" render={() => < News news = { this.props.news } fetchNews = { this.props.fetchNews } />} />
                        <Route path="/login" render={(routerProps) => <LoginPage {...routerProps} login ={this.props.login} checkUser = {this.props.checkUser} />} />
                        <Route exact path="/" component={Section_1} />
                        <Route exact path="/profile" render={() => ( !this.props.login ? (<Redirect to="/login" />) : (<Profile />))           
                        } />
                    </Switch>
                </div>
                <Footer />
            </>
        )
    }
}

Main.propTypes = {
    clickButton: PropTypes.bool,
    login: PropTypes.bool,
    news: PropTypes.object,
    checkUser: PropTypes.func,
    fetchNews: PropTypes.func,
    clickMenuButton: PropTypes.func,
    logOut: PropTypes.func
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));