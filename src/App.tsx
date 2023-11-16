import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link} from 'react-router-dom';
import { Layout, Typography, Space} from 'antd'
import { Navbar } from './components/Navbar/Navbar';
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { Router } from './routes/Router';
import { useGetCryptosQuery } from "./urls/cryptoApi";
import { Loader } from './components/Loader/Loader';

function App() {
  const { data, isLoading, error } = useGetCryptosQuery(100);

  if(isLoading){
    return <Loader/>
  } else
  return (
    <div className="App">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="main">
            <Router/>
        </div>
        <div className="footer">
          
        </div>
    </div>
  );
}

export default App;
