import React from 'react';
import Preloader from '../preloader/Preloader';
import './News.scss';


class  News extends React.Component {
    componentDidMount() {
        /** it can be also called in Main in that case it will not be updated every time it is open */
        this.props.fetchNews(); 
    }

    render() {
        return (
            <>
                { this.props.news.isLoading ? (<Preloader />) : (<div className="news">
                    <div className="news__container">
                        <h2 className="news__title">News:</h2>
                        {(this.props.news.errMess)? (<div> {this.props.news.errMess} </div>) : <ul className="news__list">
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
                        </ul>}
                    </div>
                </div>) }
    
            </>
        ) 
    }
    
}

export default News;