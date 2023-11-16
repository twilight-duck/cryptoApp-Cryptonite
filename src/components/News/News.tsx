import { FC } from 'react';
import './News.scss';
import { useGetCryptoNewsQuery } from "../../urls/cryptoNewsApi";
import { NewsItem } from '../NewsItem/NewsItem';
import moment from "moment";
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

interface INews {
}

export const News: FC<INews> = () => {
    const { data, isLoading } = useGetCryptoNewsQuery('');
    
    

    return (
        <div className='news-wrapper'>
            <div className="news-wrapper__header">
                <h3 className="news-title">Latest Crypto News</h3>
                <Link to={'/all-news'}><div className='all-news__link'>View all News</div></Link>
            </div>
            <div className="news-list">
                { data ? data.data.slice(40).map((news: any) => (
                    <NewsItem 
                        newsTitle={news.title} 
                        newsImgUrl={news.thumbnail} 
                        newsDescription={news.description} 
                        newsDate={moment(news.createdAt).startOf('s').fromNow()}
                    />
                )) : "Oops, news not found"}
            </div>
        </div>
    )
};
