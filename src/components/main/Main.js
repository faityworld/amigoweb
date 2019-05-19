import React from 'react';
import Header from '../header/Header';
import Section_1 from '../section-1/Section-1';
import LoginPage from '../login-page/LoginPage';
//import News from '../news/News';
import Profile from '../profile/Profile';
import Footer from '../footer/Footer';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './Main.scss';
import { checkUser } from '../../redux/ActionCreators';
import { logOut } from '../../redux/ActionCreators';
import { fetchNews } from '../../redux/ActionCreators';
import { connect } from 'react-redux';

//import  PrivateRoute  from '../privateRoute/PrivateRoute';
//import Preloader from '../preloader/Preloader';
import DynamicLoader from '../dynamicLoader/DynamicLoader';
const News = React.lazy(() => import('../news/News'));


/*function DynamicLoader(props) {
    console.log(`Props in DinamicLoader: ${props}`);
    return (
      <Suspense fallback={<Preloader />}>
        <props.comp news={props.news} fetchNews={props.fetchNews} />
      </Suspense>
    );
  }*/

const mapStateToProps = state => {

    return {
        login: state.login,
        news: state.news
    }
}
const mapDispatchToProps = (dispatch) => ({
    checkUser: () => { dispatch(checkUser()) },
    logOut: () => { dispatch(logOut()) },
    fetchNews: () => { dispatch(fetchNews()) }
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
                    <Header login={this.props.login} logOut={ this.props.logOut } />
                    <Switch>
                        <Route path="/news" render={() => < News news = { this.props.news } fetchNews = { this.props.fetchNews } />} />
                        {/*<Route path="/news" render={() => < DynamicLoader news = { this.props.news } fetchNews = { this.props.fetchNews } comp={News} /> } />*/}
                       
                        <Route path="/login" render={(routerProps) => <LoginPage {...routerProps} login ={this.props.login} checkUser = {this.props.checkUser} />} />
                        <Route exact path="/" component={Section_1} />
                        {/*<PrivateRoute  path="/profile" component={() => <Profile />} login = {this.props.login} checkUser={this.props.checkUser} /> */}
                        
                        <Route exact path="/profile" render={() => ( !this.props.login ? (<Redirect to="/login" />) : (<Profile />))           
                        } />
                    </Switch>
                </div>
                <Footer />
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));