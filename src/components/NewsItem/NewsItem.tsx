import { FC } from 'react';
import './NewsItem.scss';

interface INewsItem {
    newsTitle: string;
    newsImgUrl: string;
    newsDescription: string;
    newsDate: string;
}

export const NewsItem: FC<INewsItem> = ({newsTitle, newsImgUrl, newsDescription, newsDate}) => {
    return (
        <article className='news-item'>
            <div className="news-header">
                <h4 className="news-header__title">{newsTitle}</h4>
                <img src={newsImgUrl} alt="" />
            </div>
            <p className="news-description">{newsDescription}</p>
            <p className="news-date">{newsDate}</p>
        </article>
    )
};
