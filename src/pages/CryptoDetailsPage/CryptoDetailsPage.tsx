import { FC, useState } from 'react';
import { useParams } from 'react-router';
import './CryptoDetailsPage.scss';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../../urls/cryptoApi";
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import { LineChart } from '../../components/LineChart/LineChart';

interface ICryptoDetailsPage {
}

export const CryptoDetailsPage: FC<ICryptoDetailsPage> = () => {
    const [timePeriod, setTimeperiod] = useState('7d');
    const { id } = useParams();
    const { data, isLoading } = useGetCryptoDetailsQuery(id)
    const { data: coinHistory, isLoading: isFetching } = useGetCryptoHistoryQuery({coinId: id, timePeriod})
    const cryptoDetails = data?.data?.coin

    console.log(coinHistory)

    const { Option } = Select;
    const { Title, Text } = Typography;
    
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.['24hVolume'] && millify(cryptoDetails?.['24hVolume'])}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
      ];
      
      const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
      ];

    return (
        <div className='crypto-details__wrapper'>
            {data ? 
            <>
                <h1 className="crypto-details__title">{cryptoDetails.name} ({cryptoDetails.symbol}) Price</h1>
                <h4 className="crypto-details__info">{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</h4>
                <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimeperiod(value)}>
                    {time.map((date) => <Option key={date}>{date}</Option>)}
                </Select>
                <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name}/>
                <div className="crypto-stats__wrapper">
                    <div className="crypto-stats">
                        <div className="crypto-stats__heading">
                            <h3 className="crypto-stats__title">{cryptoDetails.name} Value Statistics</h3>
                            <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
                        </div>
                        {stats.map(({ icon, title, value }) => (
                        <div className="coin-stats">
                          <h4 className="coin-stats-name">
                            <p>{icon}</p>
                            <p>{title}</p>
                          </h4>
                          <p className="stats">{value}</p>
                        </div>
                    ))}
                    </div>
                    <div className="crypto-other-stats">
                        <div className="coin-value__heading">
                            <h3 className="coin-value__title">Other Stats Info</h3>
                            <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
                        </div>
                        {genericStats.map(({ icon, title, value }) => (
                        <div className="coin-stats">
                          <h4 className="coin-stats-name">
                            <p>{icon}</p>
                            <p>{title}</p>
                          </h4>
                          <p className="stats">{value}</p>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="coin-desc-link">
                    <div className="coin-desc">
                        <h2 className="coin-details-heading">What is {cryptoDetails.name}?</h2>
                        {HTMLReactParser(cryptoDetails.description)}
                    </div>
                    <div className="coin-links">
                        <h2 className="coin-details-heading">{cryptoDetails.name} Links</h2>
                        {cryptoDetails.links?.map((link: any) => (
                        <div className="coin-link" key={link.name}>
                            <h3 className="link-name">{link.type}</h3>
                            <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                        </div>
                    ))}
                    </div>
                </div>
            </>
            : null}
        </div>
    )
};
