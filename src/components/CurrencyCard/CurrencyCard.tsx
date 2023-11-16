import { FC } from 'react';
import './CurrencyCard.scss';
import { ReactComponent as ArrowUp } from '../../assets/icons/arrow-up.svg'
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg'
import { Link } from 'react-router-dom';

interface ICurrencyCard {
    currencyImg: string;
    currencyName: string;
    currencyPrice: string;
    currencySymbol: string;
    currencyRate: string;
    currencyId: string;
}

export const CurrencyCard: FC<ICurrencyCard> = ({currencyImg, currencyName, currencyPrice, currencySymbol, currencyRate, currencyId}) => {
    return (
    <Link to={`/crypto/${currencyId}`}>
        <article className='currency-item'>
            <div className="currency-header">
                <img src={currencyImg} alt="Currency Image"/>
                <h5 className="currency-name">{currencyName}</h5>
            </div>
            <p className="currency-price">${currencyPrice}</p>
            <p className="currency-symbol">{currencySymbol}</p>
            <p className={`currency-rate ${Number(currencyRate) < 0 ? 'negative': 'positive'}`}>{Number(currencyRate) >= 0 ? <ArrowUp/> : <ArrowDown/>}{currencyRate}</p>
        </article>
    </Link>
    )
};
