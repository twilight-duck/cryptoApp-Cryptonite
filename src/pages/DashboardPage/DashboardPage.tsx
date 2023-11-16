import { FC } from 'react';
import './DashboardPage.scss';
import { useGetCryptosQuery } from "../../urls/cryptoApi";
import { Currencies } from '../../components/Currencies/Currencies';
import { Link } from 'react-router-dom';
import { News } from '../../components/News/News';
import { Loader } from '../../components/Loader/Loader';

interface IDashboardPage {
}

export const DashboardPage: FC<IDashboardPage> = () => {
    const {data, isLoading} = useGetCryptosQuery('');
    
    if(isLoading){
        return <Loader/>
      } else
    return (
        <div>
            <h1 className='dashboard-title'>Dashboard</h1>
            <div className="dashboard-header">
                <h3 className="dashboard-top__currencies">
                    Top Currencies
                </h3>
                <Link to={'/all-currencies'}> <div className='currencies-link'>View all</div></Link>
            </div>
            <Currencies isSimplified={true}/>
            <News/>
        </div>
    )
};
