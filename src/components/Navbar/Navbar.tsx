import { FC, useEffect, useState } from 'react';
import './Navbar.scss';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg'
import { ReactComponent as Nitecoin } from '../../assets/img/Rectangle 2.svg'
import { ReactComponent as User } from '../../assets/icons/User.svg'
import { ReactComponent as Dashboard } from '../../assets/icons/Dashboard.svg'
import { ReactComponent as Wallet } from '../../assets/icons/Wallet.svg'
import { ReactComponent as Trade } from '../../assets/icons/Trade.svg'
import { ReactComponent as Notifications } from '../../assets/icons/Notifications.svg'
import { ReactComponent as Settings } from '../../assets/icons/Settings.svg'
import { ReactComponent as LogOut } from '../../assets/icons/LogOut.svg'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Route, Link} from 'react-router-dom';
interface INavbar {
}

export const Navbar: FC<INavbar> = () => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const navButton = document.getElementById(
        'nav-button',
      ) as HTMLDivElement | null;

    return (
        <>
            <div id='nav-button' className="burger-menu" onClick={() => setIsActiveMenu(!isActiveMenu)}>
                    <div className={`burger-menu__line ${isActiveMenu ? 'clicked' : 'unclicked'}`} ></div>
                    <div className={`burger-menu__line ${isActiveMenu ? 'clicked' : 'unclicked'}`} ></div>
                    <div className={`burger-menu__line ${isActiveMenu ? 'clicked' : 'unclicked'}`} ></div>
            </div>
        <div className={`navbar-wrapper ${isActiveMenu ? 'mobile' : ''}`}>
              
            <div className="logo">
                <Logo/>
                <h3 className="logo-title">CryptoNite</h3>
            </div>
            <div className="nav-list">
                <ul className="menu-list">
                <Link onClick={() => {navButton?.click()}} to={'/profile'}>
                    <li className="menu-list-item">
                        <User/>
                            <h4 className="menu-list-item__title">
                                Profile
                            </h4>
                    </li>
                </Link>
                <Link onClick={() => {navButton?.click()}} to={'/dashboard'}>
                <li className="menu-list-item">
                        <Dashboard/>
                        <h4 className="menu-list-item__title">
                            Dashboard
                        </h4>
                    </li>
                </Link>
                    <li className="menu-list-item">
                        <Wallet/>
                        <h4 className="menu-list-item__title">
                            Wallet
                        </h4>
                    </li>
                    <li className="menu-list-item">
                        <Trade/>
                        <h4 className="menu-list-item__title">
                            Trade
                        </h4>
                    </li>
                    <li className="menu-list-item">
                        <Notifications/>
                        <h4 className="menu-list-item__title">
                            Notifications
                        </h4>
                    </li>
                </ul>
            </div>
            <div className={`coin-info ${isActiveMenu ? 'mobile' : ''}`}>
                <div className="coin-img">
                    <img src={require('../../assets/img/Nitecoin.png')} />
                </div>
                <p className="coin-info__text">
                    Nitecoin: The New Crptocurrency in town!
                </p>
                <button className="coin-button">
                    Buy Now
                </button>
            </div>
            <div className="navbar-actions">
                <ul className="navbar-actions-list">
                    <li className="navbar-actions-item">
                        <Settings/>
                        <h4 className="navbar-actions-text">
                            Settings
                        </h4>
                    </li>
                    <li className="navbar-actions-item">
                        <LogOut/>
                        <h4 className="navbar-actions-text">
                            LogOut
                        </h4>
                    </li>
                </ul>
            </div>
            </div>
        </>
    )
};
