import { FC } from 'react';
import './ProfilePage.scss';

interface IProfilePage {
}

export const ProfilePage: FC<IProfilePage> = () => {
    return (
        <div className='profile-page'>
            <h1>Profile</h1>
        </div>
    )
};
