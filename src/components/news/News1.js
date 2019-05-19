import React from 'react';
import Preloader from '../preloader/Preloader';
import './News.scss';
import { connect } from 'react-redux';
import { fetchNews } from '../../redux/ActionCreators';


const mapStateToProps = state => {
    return {
      news: state.news, // from redux store
    }
  }
const mapDispatchToProps = (dispatch) => ({
    fetchNews: () => { dispatch(fetchNews())}
  })

class News extends React.Component {
    
    componentDidMount() {      
        this.props.fetchNews();
    }

    render() {
        return (
            <>
            { this.props.news.isLoading ? (<Preloader />) : ( <div className="news">
                <div className="news__container">
                    <h2 className="news__title">News:</h2>
                    <ul className="news__list">
                        {this.props.news.news.map((item) => {
                            return (
                                <li key={item.title} className="news__li">
                                    <a className="news__a" href={item.url} target="_blank" rel="noopener noreferrer">
                                        <h3 className="news__header">{item.title}</h3>
                                        <p className="news__source">{item.source.name}</p>
                                        {item.content && <p className="news__description">{item.content}</p>}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>   
                </div>
            </div>)}
           
            </>
        )
    }
}

// To fetch data every time, the component is mounting without infinte loop
export default connect(mapStateToProps, mapDispatchToProps)(News);