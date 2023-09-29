import React from 'react';
import s from './Sidebar.module.scss';
export const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <ul className={s.nav}>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </nav>
    );
};