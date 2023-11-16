import { FC } from 'react';
import { Route, Routes } from "react-router-dom";
import { AllCurrenciesPage } from '../pages/AllCurrecniesPage/AllCurrenciesPage';
import { AllNewsPage } from '../pages/AllNewsPage/AllNewsPage';
import { CryptoDetailsPage } from '../pages/CryptoDetailsPage/CryptoDetailsPage';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';

export const Router: FC = () => {
 
    return (
    <Routes>
         <Route path='/dashboard' element={<DashboardPage/>}/>
         <Route path='/profile' element={<ProfilePage/>}/>
         <Route path='/all-currencies' element={<AllCurrenciesPage/>}/>
         <Route path='/all-news' element={<AllNewsPage/>}/>
         <Route path='/crypto/:id' element={<CryptoDetailsPage/>}/>
    </Routes>
    )
 }