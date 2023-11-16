import millify from 'millify';
import { FC, useEffect, useState } from 'react';
import { CurrencyCard } from '../../components/CurrencyCard/CurrencyCard';
import { Loader } from '../../components/Loader/Loader';
import { useGetCryptosQuery } from '../../urls/cryptoApi';
import './AllCurrenciesPage.scss';

interface IAllCurrenciesPage {
}

export const AllCurrenciesPage: FC<IAllCurrenciesPage> = () => {
    const [searchValue, setSearchValue] = useState('');
    const { data, isLoading, error } = useGetCryptosQuery(100);

    console.log(searchValue)
    
    const filteredData = data?.data.coins.filter((coin: any) => coin.name.toLowerCase().includes(searchValue.toLowerCase()));
    
    if(isLoading){
        return <Loader/>
      } else
    return (
        <>
        <input className='search-input' type="text" placeholder='Search Cryptocurrencies' onChange={(e: any) => setSearchValue(e.target.value)}/>
        <div className='all-currencies-list'>
            { filteredData ? (
                filteredData.map((crypto: any) => (
                    <CurrencyCard 
                        key={crypto.id}
                        currencyId={crypto.uuid}
                        currencyImg={crypto.iconUrl} 
                        currencyName={crypto.name} 
                        currencyPrice={millify(crypto.price)}
                        currencyRate={crypto.change}
                        currencySymbol={crypto.symbol}
                        />
                ))) : null 
            }
        </div>
        </>
    )
};
