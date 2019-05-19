import React from 'react';
import Preloader from '../preloader/Preloader';
import './News.scss';

/** We call fetchNews to fetch news every time the component is loading and control updating with shouldComponentUpdaten in Main.
 * The another way to avoit infinite call fetchNews is to connect this component to Redux directly and call fetchNews in componentDidMount
 */
class  News extends React.Component {
    componentDidMount() {
        this.props.fetchNews();
    }
    render() {
        return (
            <>
                {this.props.news.isLoading ? (<Preloader />) : (<div className="news">
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

export default News;