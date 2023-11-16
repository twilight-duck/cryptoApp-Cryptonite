import { FC, useEffect, useState } from 'react';
import './AllNewsPage.scss';
import { useGetCryptoNewsQuery } from "../../urls/cryptoNewsApi";
import { useGetCryptosQuery } from "../../urls/cryptoApi";
import { NewsItem } from '../../components/NewsItem/NewsItem';
import moment from 'moment';
import { Loader } from '../../components/Loader/Loader';

interface IAllNewsPage {
}

export const AllNewsPage: FC<IAllNewsPage> = () => {
    const { data } = useGetCryptoNewsQuery('');
    const { data: coinsData, isLoading, error } = useGetCryptosQuery(100);
    
    if(isLoading){
        return <Loader/>
      } else
    
    return (
        <div className='all-news-page'>
            <h2 className="all-news__title">All News</h2>
            <div className="news-list">
                {data ? data.data.map((news: any, index: number) => (
                    <NewsItem 
                        key={news.index}
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
